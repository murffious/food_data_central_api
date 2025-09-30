import { supabase } from '../config/supabase.js';

export class NutritionDatabase {
  async insertFood(foodData) {
    const { data, error } = await supabase
      .from('foods')
      .insert({
        fdc_id: foodData.fdcId.toString(),
        name: foodData.description,
        description: foodData.description,
        food_group: foodData.foodCategory?.description || foodData.foodGroup || 'Unknown',
        data_type: foodData.dataType,
        publication_date: foodData.publicationDate || null
      })
      .select()
      .maybeSingle();

    if (error) {
      if (error.code === '23505') {
        const { data: existingFood } = await supabase
          .from('foods')
          .select('*')
          .eq('fdc_id', foodData.fdcId.toString())
          .maybeSingle();

        return existingFood;
      }
      throw error;
    }

    return data;
  }

  async insertNutrients(foodId, nutrients) {
    if (!nutrients || nutrients.length === 0) {
      return [];
    }

    const nutrientData = nutrients.map(nutrient => ({
      food_id: foodId,
      nutrient_id: nutrient.nutrient?.id || nutrient.id,
      nutrient_name: nutrient.nutrient?.name || nutrient.name || 'Unknown',
      nutrient_number: nutrient.nutrient?.number || nutrient.number || '',
      unit_name: nutrient.nutrient?.unitName || nutrient.unitName || '',
      amount: nutrient.amount || 0
    }));

    const { data, error } = await supabase
      .from('food_nutrients')
      .insert(nutrientData)
      .select();

    if (error) {
      console.error('Error inserting nutrients:', error);
      return [];
    }

    return data;
  }

  async insertPortions(foodId, portions) {
    if (!portions || portions.length === 0) {
      return [];
    }

    const portionData = portions.map(portion => ({
      food_id: foodId,
      portion_description: portion.portionDescription || portion.modifier || '',
      gram_weight: portion.gramWeight || 0,
      amount: portion.amount || 1,
      modifier: portion.modifier || ''
    }));

    const { data, error } = await supabase
      .from('food_portions')
      .insert(portionData)
      .select();

    if (error) {
      console.error('Error inserting portions:', error);
      return [];
    }

    return data;
  }

  async logFetch(foodName, fdcId, status, errorMessage = null) {
    const { data, error } = await supabase
      .from('api_fetch_log')
      .insert({
        food_name: foodName,
        fdc_id: fdcId ? fdcId.toString() : null,
        status: status,
        error_message: errorMessage
      })
      .select()
      .maybeSingle();

    if (error) {
      console.error('Error logging fetch:', error);
    }

    return data;
  }

  async saveFoodComplete(foodDetails, originalFoodName) {
    try {
      const food = await this.insertFood(foodDetails);

      if (!food) {
        throw new Error('Failed to insert food');
      }

      await this.insertNutrients(food.id, foodDetails.foodNutrients || []);
      await this.insertPortions(food.id, foodDetails.foodPortions || []);

      await this.logFetch(originalFoodName, foodDetails.fdcId, 'success');

      return food;
    } catch (error) {
      await this.logFetch(originalFoodName, foodDetails.fdcId, 'error', error.message);
      throw error;
    }
  }

  async getFoodByFdcId(fdcId) {
    const { data, error } = await supabase
      .from('foods')
      .select(`
        *,
        food_nutrients(*),
        food_portions(*)
      `)
      .eq('fdc_id', fdcId.toString())
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data;
  }

  async searchFoodsByGroup(foodGroup) {
    const { data, error } = await supabase
      .from('foods')
      .select('*')
      .eq('food_group', foodGroup);

    if (error) {
      throw error;
    }

    return data;
  }
}
