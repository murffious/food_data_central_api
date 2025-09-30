import dotenv from 'dotenv';
import { FDCService } from './src/services/fdcServiceSimple.js';
import { wholeFoodsList } from './src/data/wholeFoodsList.js';

dotenv.config();

const apiKey = process.env.FDC_API_KEY;
const fdc = new FDCService(apiKey);

function escapeString(str) {
  if (!str) return 'NULL';
  return `'${str.replace(/'/g, "''")}'`;
}

function formatDate(dateStr) {
  if (!dateStr) return 'NULL';
  try {
    const date = new Date(dateStr);
    return `'${date.toISOString().split('T')[0]}'`;
  } catch {
    return 'NULL';
  }
}

async function processFoods(startIndex = 0, count = 10) {
  const foods = wholeFoodsList.slice(startIndex, startIndex + count);

  for (let i = 0; i < foods.length; i++) {
    const foodItem = foods[i];
    const foodName = foodItem.name;

    try {
      console.error(`[${startIndex + i + 1}/${wholeFoodsList.length}] Processing: ${foodName}`);

      const searchResults = await fdc.searchFood(foodName);

      if (!searchResults.foods || searchResults.foods.length === 0) {
        console.error(`  ⚠ No results found`);
        continue;
      }

      const topResult = searchResults.foods[0];
      const fdcId = topResult.fdcId;

      const food = await fdc.getFoodDetails(fdcId);

      const name = escapeString(food.description);
      const dataType = escapeString(food.dataType);
      const pubDate = formatDate(food.publicationDate);

      console.log(`-- ${foodName} (FDC ID: ${fdcId})`);
      console.log(`INSERT INTO foods (id, fdc_id, name, data_type, publication_date)`);
      console.log(`VALUES (gen_random_uuid(), '${fdcId}', ${name}, ${dataType}, ${pubDate})`);
      console.log(`ON CONFLICT (fdc_id) DO NOTHING;`);

      if (food.foodNutrients && food.foodNutrients.length > 0) {
        const nutrientValues = [];
        for (const nutrient of food.foodNutrients) {
          if (nutrient.nutrient && nutrient.amount != null) {
            const nutrientName = escapeString(nutrient.nutrient.name);
            const nutrientNumber = escapeString(nutrient.nutrient.number);
            const unitName = escapeString(nutrient.nutrient.unitName);
            const amount = nutrient.amount;

            nutrientValues.push(`((SELECT id FROM foods WHERE fdc_id = '${fdcId}'), ${nutrient.nutrient.id}, ${nutrientName}, ${nutrientNumber}, ${unitName}, ${amount})`);
          }
        }

        if (nutrientValues.length > 0) {
          console.log(`INSERT INTO food_nutrients (food_id, nutrient_id, nutrient_name, nutrient_number, unit_name, amount) VALUES`);
          console.log(nutrientValues.join(',\n') + ';');
        }
      }

      if (food.foodPortions && food.foodPortions.length > 0) {
        const portionValues = [];
        for (const portion of food.foodPortions) {
          const portionDesc = escapeString(portion.portionDescription);
          const gramWeight = portion.gramWeight || 'NULL';
          const amount = portion.amount || 'NULL';
          const modifier = escapeString(portion.modifier);

          portionValues.push(`((SELECT id FROM foods WHERE fdc_id = '${fdcId}'), ${portionDesc}, ${gramWeight}, ${amount}, ${modifier})`);
        }

        if (portionValues.length > 0) {
          console.log(`INSERT INTO food_portions (food_id, portion_description, gram_weight, amount, modifier) VALUES`);
          console.log(portionValues.join(',\n') + ';');
        }
      }

      console.log('');
      console.error(`  ✓ Success`);

      // Rate limiting - be nice to the API
      await new Promise(resolve => setTimeout(resolve, 500));

    } catch (error) {
      console.error(`  ✗ Error: ${error.message}`);
    }
  }
}

const startIdx = parseInt(process.argv[2]) || 0;
const count = parseInt(process.argv[3]) || 10;

console.error(`Processing ${count} foods starting from index ${startIdx}`);
console.error(`Total foods in list: ${wholeFoodsList.length}\n`);

await processFoods(startIdx, count);

console.error(`\nDone! Processed ${count} foods.`);
