# Nutrition Database Setup - Complete!

Your nutrition database system is now fully configured and ready to use.

## What's Been Created

### 1. Database Schema (Supabase)
Four tables with proper security policies:
- `foods` - Main food items table
- `food_nutrients` - Detailed nutrient information
- `food_portions` - Portion size data
- `api_fetch_log` - API request tracking

### 2. API Integration
- **FDCService** (`src/services/fdcServiceSimple.js`) - Handles FoodData Central API calls
- **NutritionDatabase** (`src/services/nutritionDatabase.js`) - Manages Supabase operations

### 3. Data Population Scripts
- `npm run test-connection` - Test API and database connectivity
- `npm run populate` - Populate database with 119 whole foods

### 4. Whole Foods List
119 foods organized in 8 categories:
- 31 Fruits
- 32 Vegetables
- 8 Legumes
- 8 Whole Grains
- 13 Nuts/Seeds
- 7 Animal Proteins
- 10 Seafood
- 5 Dairy

## Next Steps

### 1. Get Your API Key
You **must** obtain a free API key from FoodData Central:
- Visit: https://fdc.nal.usda.gov/api-key-signup.html
- Sign up (takes 1 minute)
- Copy your API key

### 2. Update .env File
Replace `DEMO_KEY` with your actual API key:
```bash
FDC_API_KEY=your_real_api_key_here
```

### 3. Test the Connection
```bash
npm run test-connection
```

This will:
- Test the FDC API with a search for "apple"
- Retrieve full nutrition data
- Save to your database
- Confirm everything works

### 4. Populate the Database
```bash
npm run populate
```

This systematically processes all 119 whole foods:
- Searches FDC database for each food
- Retrieves complete nutrition data
- Saves to Supabase
- Handles rate limits automatically
- Logs all activity
- Takes ~2-3 minutes

## How to Use the Data

After population, query your nutrition database using Supabase:

```javascript
import { supabase } from './src/config/supabase.js';

// Get all fruits
const { data: fruits } = await supabase
  .from('foods')
  .select('*')
  .eq('food_group', 'Fruit');

// Get food with nutrients
const { data: apple } = await supabase
  .from('foods')
  .select(`
    *,
    food_nutrients(*),
    food_portions(*)
  `)
  .ilike('name', '%apple%')
  .single();

// Find high protein foods
const { data: proteinFoods } = await supabase
  .from('food_nutrients')
  .select(`
    amount,
    foods(name)
  `)
  .eq('nutrient_name', 'Protein')
  .gte('amount', 20);
```

## Files Created

### Core Services
- `src/config/supabase.js` - Supabase client configuration
- `src/services/fdcServiceSimple.js` - FDC API wrapper
- `src/services/nutritionDatabase.js` - Database operations

### Data
- `src/data/wholeFoodsList.js` - 119 whole foods list

### Scripts
- `src/scripts/testConnection.js` - Connection testing
- `src/scripts/populateDatabase.js` - Database population

### Database
- `supabase/migrations/20250930233006_create_nutrition_tables.sql` - Schema migration

### Documentation
- `NUTRITION_DATABASE_SETUP.md` - Detailed setup guide
- `SETUP_COMPLETE.md` - This summary

## Troubleshooting

**"Missing FDC_API_KEY"**
- Add your API key to the `.env` file

**"API Error: 429"**
- Rate limit reached. The populate script handles this automatically with delays.

**"Food not found"**
- Some foods may not exist in FDC with the exact name. Check `api_fetch_log` table.

**Connection timeout**
- Verify your API key is correct
- Check internet connectivity

## Support

For more details, see `NUTRITION_DATABASE_SETUP.md`

FoodData Central API Documentation: https://fdc.nal.usda.gov/api-guide.html
