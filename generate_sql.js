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

async function generateSQLForFood(foodName) {
  try {
    console.log(`-- Processing: ${foodName}`);

    const searchResults = await fdc.searchFood(foodName);

    if (!searchResults.foods || searchResults.foods.length === 0) {
      console.log(`-- No results found for ${foodName}\n`);
      return;
    }

    const topResult = searchResults.foods[0];
    const fdcId = topResult.fdcId;

    const food = await fdc.getFoodDetails(fdcId);

    const foodId = `gen_random_uuid()`;
    const name = escapeString(food.description);
    const dataType = escapeString(food.dataType);
    const pubDate = formatDate(food.publicationDate);

    console.log(`INSERT INTO foods (id, fdc_id, name, data_type, publication_date)`);
    console.log(`VALUES (${foodId}, '${fdcId}', ${name}, ${dataType}, ${pubDate})`);
    console.log(`ON CONFLICT (fdc_id) DO UPDATE SET`);
    console.log(`  name = EXCLUDED.name,`);
    console.log(`  data_type = EXCLUDED.data_type,`);
    console.log(`  publication_date = EXCLUDED.publication_date;`);
    console.log();

    if (food.foodNutrients && food.foodNutrients.length > 0) {
      console.log(`-- Nutrients for ${food.description}`);
      for (const nutrient of food.foodNutrients) {
        if (nutrient.nutrient && nutrient.amount != null) {
          const nutrientName = escapeString(nutrient.nutrient.name);
          const nutrientNumber = escapeString(nutrient.nutrient.number);
          const unitName = escapeString(nutrient.nutrient.unitName);
          const amount = nutrient.amount;

          console.log(`INSERT INTO food_nutrients (food_id, nutrient_id, nutrient_name, nutrient_number, unit_name, amount)`);
          console.log(`VALUES ((SELECT id FROM foods WHERE fdc_id = '${fdcId}'), ${nutrient.nutrient.id}, ${nutrientName}, ${nutrientNumber}, ${unitName}, ${amount});`);
        }
      }
      console.log();
    }

    if (food.foodPortions && food.foodPortions.length > 0) {
      console.log(`-- Portions for ${food.description}`);
      for (const portion of food.foodPortions) {
        const portionDesc = escapeString(portion.portionDescription);
        const gramWeight = portion.gramWeight || 'NULL';
        const amount = portion.amount || 'NULL';
        const modifier = escapeString(portion.modifier);

        console.log(`INSERT INTO food_portions (food_id, portion_description, gram_weight, amount, modifier)`);
        console.log(`VALUES ((SELECT id FROM foods WHERE fdc_id = '${fdcId}'), ${portionDesc}, ${gramWeight}, ${amount}, ${modifier});`);
      }
      console.log();
    }

    console.log(`---\n`);

  } catch (error) {
    console.log(`-- Error processing ${foodName}: ${error.message}\n`);
  }
}

// Process just the first food item for testing
const firstFood = wholeFoodsList[0];
await generateSQLForFood(firstFood.name);
