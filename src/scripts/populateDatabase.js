import dotenv from 'dotenv';
import { FDCService } from '../services/fdcService.js';
import { NutritionDatabase } from '../services/nutritionDatabase.js';
import { wholeFoodsList } from '../data/wholeFoodsList.js';

dotenv.config();

const FDC_API_KEY = process.env.FDC_API_KEY;

if (!FDC_API_KEY) {
  console.error('ERROR: FDC_API_KEY environment variable is required');
  console.error('Please add FDC_API_KEY=your_key_here to your .env file');
  process.exit(1);
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function populateNutritionDatabase() {
  const fdcService = new FDCService(FDC_API_KEY);
  const db = new NutritionDatabase();

  console.log('Starting nutrition database population...');
  console.log(`Total foods to process: ${wholeFoodsList.length}\n`);

  let successCount = 0;
  let errorCount = 0;
  let notFoundCount = 0;

  for (let i = 0; i < wholeFoodsList.length; i++) {
    const food = wholeFoodsList[i];
    const progress = `[${i + 1}/${wholeFoodsList.length}]`;

    console.log(`${progress} Processing: ${food.name} (${food.group})`);

    try {
      const result = await fdcService.searchAndGetDetails(food.name, ['Foundation', 'SR Legacy']);

      if (!result) {
        console.log(`  ⚠️  Not found in FDC database`);
        await db.logFetch(food.name, null, 'not_found', 'No results from API');
        notFoundCount++;
      } else {
        const savedFood = await db.saveFoodComplete(result.details, food.name);
        console.log(`  ✓ Saved: ${savedFood.name} (FDC ID: ${savedFood.fdc_id})`);
        successCount++;
      }

      await delay(1000);

    } catch (error) {
      console.log(`  ✗ Error: ${error.message}`);
      await db.logFetch(food.name, null, 'error', error.message);
      errorCount++;

      if (error.message.includes('rate limit') || error.message.includes('429')) {
        console.log('  ⏸️  Rate limit detected, waiting 60 seconds...');
        await delay(60000);
      } else {
        await delay(2000);
      }
    }
  }

  console.log('\n=== SUMMARY ===');
  console.log(`Total processed: ${wholeFoodsList.length}`);
  console.log(`✓ Success: ${successCount}`);
  console.log(`⚠️  Not found: ${notFoundCount}`);
  console.log(`✗ Errors: ${errorCount}`);
  console.log('\nDatabase population complete!');
}

populateNutritionDatabase().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
