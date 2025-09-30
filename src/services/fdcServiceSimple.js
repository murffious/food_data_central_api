import dotenv from 'dotenv';

dotenv.config();

export class FDCService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.nal.usda.gov/fdc';
  }

  async searchFood(query, dataType = ['Foundation', 'SR Legacy']) {
    const params = new URLSearchParams({
      query: query,
      dataType: dataType.join(','),
      pageSize: 25,
      pageNumber: 1,
      api_key: this.apiKey
    });

    const response = await fetch(`${this.baseUrl}/v1/foods/search?${params}`);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  }

  async getFoodDetails(fdcId) {
    const params = new URLSearchParams({
      format: 'full',
      api_key: this.apiKey
    });

    const response = await fetch(`${this.baseUrl}/v1/food/${fdcId}?${params}`);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  }

  async searchAndGetDetails(foodName, dataType = ['Foundation', 'SR Legacy']) {
    try {
      const searchResults = await this.searchFood(foodName, dataType);

      if (!searchResults.foods || searchResults.foods.length === 0) {
        return null;
      }

      const topResult = searchResults.foods[0];
      const details = await this.getFoodDetails(topResult.fdcId);

      return {
        searchResult: topResult,
        details: details
      };
    } catch (error) {
      throw error;
    }
  }
}
