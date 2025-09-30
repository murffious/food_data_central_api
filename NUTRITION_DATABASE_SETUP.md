# Nutrition Database Setup Guide

This guide will help you populate your Supabase database with whole foods nutrition data from the USDA FoodData Central API.

## Prerequisites

1. **FoodData Central API Key**: Get your free API key from [FoodData Central](https://fdc.nal.usda.gov/api-key-signup.html)
2. **Supabase Database**: Already configured in your `.env` file
3. **Node.js**: Installed and ready

## Setup Steps

### 1. Add Your API Key

**IMPORTANT:** You must get a real API key from [FoodData Central](https://fdc.nal.usda.gov/api-key-signup.html). The process is free and instant.

Once you have your key, replace the placeholder in the `.env` file:

```bash
# In your .env file, replace DEMO_KEY with your actual key:
FDC_API_KEY=your_real_api_key_here
```

Your `.env` file should now have:
```
VITE_SUPABASE_URL=https://...
VITE_SUPABASE_ANON_KEY=...
FDC_API_KEY=your_real_api_key_here
```

### 2. Test the Connection

Before populating the database, test that everything is working:

```bash
npm run test-connection
```

This will:
- Test the FoodData Central API connection
- Search for "apple" in the API
- Retrieve detailed nutrition data
- Save it to your Supabase database
- Retrieve it back to confirm everything works

### 3. Populate the Database

Once the test passes, populate the entire database with all whole foods:

```bash
npm run populate
```

This will systematically process all 119 whole foods from the list, including:
- 31 Fruits
- 32 Vegetables
- 8 Legumes
- 8 Whole Grains
- 13 Nuts/Seeds
- 7 Animal Proteins
- 10 Seafood items
- 5 Dairy products

The script will:
- Search for each food in FoodData Central
- Retrieve complete nutrition data
- Save to your Supabase database
- Log all activity
- Handle rate limits automatically
- Show progress with detailed output

**Note**: This process takes approximately 2-3 minutes to complete (1 second delay between requests to respect API rate limits).

## Database Schema

The system creates 4 tables:

### `foods`
Main table for food items with basic information like name, FDC ID, food group, and data type.

### `food_nutrients`
Detailed nutrient information for each food (protein, carbs, vitamins, minerals, etc.).

### `food_portions`
Portion size information (cups, grams, whole items, etc.).

### `api_fetch_log`
Logs all API requests for debugging and monitoring.

## What Gets Populated

The database will be populated with whole, minimally processed foods across these categories:

**Fruits**: Apples, Bananas, Berries, Citrus, Melons, Tropical fruits, etc.

**Vegetables**: Leafy greens, Root vegetables, Cruciferous, Nightshades, etc.

**Legumes**: Beans (black, kidney, pinto), Chickpeas, Lentils, Peas, Soybeans

**Whole Grains**: Brown Rice, Quinoa, Oats, Barley, Buckwheat, etc.

**Nuts & Seeds**: Almonds, Walnuts, Chia, Flax, Pumpkin seeds, etc.

**Animal Proteins**: Eggs, Chicken, Turkey, Beef, Pork, Lamb, Goat

**Seafood**: Salmon, Tuna, Cod, Sardines, Shrimp, Shellfish

**Dairy**: Milk, Yogurt, Cheese, Cottage Cheese, Butter

## Querying the Data

After population, you can query your nutrition database using the Supabase client:

```javascript
import { supabase } from './src/config/supabase.js';

// Get all fruits
const { data: fruits } = await supabase
  .from('foods')
  .select('*')
  .eq('food_group', 'Fruit');

// Get a food with all its nutrients
const { data: apple } = await supabase
  .from('foods')
  .select(`
    *,
    food_nutrients(*),
    food_portions(*)
  `)
  .eq('name', 'Apples, raw')
  .single();

// Search for high protein foods
const { data: proteinFoods } = await supabase
  .from('food_nutrients')
  .select(`
    *,
    foods(*)
  `)
  .eq('nutrient_name', 'Protein')
  .gte('amount', 20);
```

## Troubleshooting

**"Missing FDC_API_KEY"**: Make sure you've added your API key to the `.env` file

**"Rate limit exceeded"**: The script automatically handles this by waiting. If you see this frequently, the delays will be increased automatically.

**"Food not found"**: Some foods might not be in the FoodData Central database with the exact name. These are logged in the `api_fetch_log` table.

**Connection errors**: Check your Supabase credentials in the `.env` file

## API Rate Limits

FoodData Central allows:
- 1,000 requests per hour for free API keys
- The script respects these limits with built-in delays
- Rate limit errors are handled automatically with extended waits

## Data Sources

All nutrition data comes from the USDA FoodData Central database, prioritizing:
1. **Foundation Foods**: Core foods with extensive nutrient data
2. **SR Legacy**: Standard Reference Legacy database

This ensures you get the most comprehensive and reliable nutrition information.
