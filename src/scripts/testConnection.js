import dotenv from 'dotenv';
import { FDCService } from '../services/fdcServiceSimple.js';
import { NutritionDatabase } from '../services/nutritionDatabase.js';

dotenv.config();

const FDC_API_KEY = process.env.FDC_API_KEY;

if (!FDC_API_KEY) {
  console.error('ERROR: FDC_API_KEY environment variable is required');
  console.error('Please add FDC_API_KEY=your_key_here to your .env file');
  process.exit(1);
}

async function testConnection() {
  console.log('Testing FoodData Central API connection...\n');

  const fdcService = new FDCService(FDC_API_KEY);
  const db = new NutritionDatabase();

  try {
    console.log('1. Testing API search for "apple"...');
    const searchResult = await fdcService.searchFood('apple', ['Foundation', 'SR Legacy']);

    if (searchResult && searchResult.foods && searchResult.foods.length > 0) {
      console.log(`✓ Found ${searchResult.foods.length} results`);
      console.log(`  Top result: ${searchResult.foods[0].description} (FDC ID: ${searchResult.foods[0].fdcId})`);

      const fdcId = searchResult.foods[0].fdcId;

      console.log('\n2. Testing detailed food data retrieval...');
      const details = await fdcService.getFoodDetails(fdcId);
      console.log(`✓ Retrieved details for: ${details.description}`);
      console.log(`  Data type: ${details.dataType}`);
      console.log(`  Nutrients count: ${details.foodNutrients?.length || 0}`);
      console.log(`  Portions count: ${details.foodPortions?.length || 0}`);

      console.log('\n3. Testing Supabase database save...');
      const savedFood = await db.saveFoodComplete(details, 'apple');
      console.log(`✓ Successfully saved to database`);
      console.log(`  Database ID: ${savedFood.id}`);
      console.log(`  FDC ID: ${savedFood.fdc_id}`);

      console.log('\n4. Testing database retrieval...');
      const retrievedFood = await db.getFoodByFdcId(fdcId);
      console.log(`✓ Successfully retrieved from database`);
      console.log(`  Name: ${retrievedFood.name}`);
      console.log(`  Nutrients in DB: ${retrievedFood.food_nutrients?.length || 0}`);
      console.log(`  Portions in DB: ${retrievedFood.food_portions?.length || 0}`);

      console.log('\n✓ All tests passed! System is ready to populate the database.');

    } else {
      console.log('✗ No results found for "apple"');
    }

  } catch (error) {
    console.error('\n✗ Test failed:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
}

testConnection();
