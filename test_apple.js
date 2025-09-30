import dotenv from 'dotenv';
import { FDCService } from './src/services/fdcServiceSimple.js';
import { NutritionDatabase } from './src/services/nutritionDatabase.js';

dotenv.config();

const FDC_API_KEY = process.env.FDC_API_KEY;

if (!FDC_API_KEY || FDC_API_KEY === 'your_api_key_here') {
  console.error('❌ ERROR: Please add your real FDC API key to the .env file');
  console.error('   Replace "your_api_key_here" with your actual key from:');
  console.error('   https://fdc.nal.usda.gov/api-key-signup.html');
  process.exit(1);
}

console.log('Testing with Apple (first item)...\n');

async function testApple() {
  const fdcService = new FDCService(FDC_API_KEY);
  const db = new NutritionDatabase();

  try {
    console.log('1. Searching FDC API for "apple"...');
    const result = await fdcService.searchAndGetDetails('apple', ['Foundation', 'SR Legacy']);

    if (!result) {
      console.log('❌ No results found for apple');
      return;
    }

    console.log('✓ Found:', result.details.description);
    console.log('  FDC ID:', result.details.fdcId);
    console.log('  Data Type:', result.details.dataType);
    console.log('  Nutrients:', result.details.foodNutrients?.length || 0);
    console.log('  Portions:', result.details.foodPortions?.length || 0);

    console.log('\n2. Saving to Supabase database...');
    const savedFood = await db.saveFoodComplete(result.details, 'apple');

    console.log('✓ Saved successfully!');
    console.log('  Database ID:', savedFood.id);
    console.log('  Name:', savedFood.name);
    console.log('  Food Group:', savedFood.food_group);

    console.log('\n3. Retrieving from database...');
    const retrieved = await db.getFoodByFdcId(result.details.fdcId);

    console.log('✓ Retrieved successfully!');
    console.log('  Nutrients in DB:', retrieved.food_nutrients?.length || 0);
    console.log('  Portions in DB:', retrieved.food_portions?.length || 0);

    // Show some sample nutrients
    if (retrieved.food_nutrients?.length > 0) {
      console.log('\n📊 Sample Nutrients (per 100g):');
      const topNutrients = retrieved.food_nutrients
        .filter(n => ['Protein', 'Carbohydrate', 'Total lipid (fat)', 'Energy', 'Fiber, total dietary'].includes(n.nutrient_name))
        .slice(0, 5);

      topNutrients.forEach(n => {
        console.log(`  - ${n.nutrient_name}: ${n.amount} ${n.unit_name}`);
      });
    }

    console.log('\n✅ SUCCESS! The system is working correctly.');
    console.log('   You can now run: npm run populate');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.message.includes('403') || error.message.includes('401')) {
      console.error('   This looks like an API key issue. Please check your key.');
    }
    console.error('\nStack:', error.stack);
    process.exit(1);
  }
}

testApple();
