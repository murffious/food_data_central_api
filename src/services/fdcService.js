import FoodDataCentralApi from '../index.js';

export class FDCService {
  constructor(apiKey) {
    this.apiClient = FoodDataCentralApi.ApiClient.instance;
    const apiKeyAuth = this.apiClient.authentications['ApiKeyAuth'];
    apiKeyAuth.apiKey = apiKey;
    this.api = new FoodDataCentralApi.FDCApi();
  }

  searchFood(query, dataType = ['Foundation', 'SR Legacy']) {
    return new Promise((resolve, reject) => {
      const opts = {
        dataType: dataType,
        pageSize: 25,
        pageNumber: 1
      };

      this.api.getFoodsSearch(query, opts, (error, data, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }

  getFoodDetails(fdcId) {
    return new Promise((resolve, reject) => {
      const opts = {
        format: 'full'
      };

      this.api.getFood(fdcId.toString(), opts, (error, data, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
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
