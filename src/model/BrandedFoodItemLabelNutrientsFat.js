/*
 * Food Data Central API
 * The FoodData Central API provides REST access to FoodData Central (FDC). It is intended primarily to assist application developers wishing to incorporate nutrient data into their applications or websites.   To take full advantage of the API, developers should familiarize themselves with the database by reading the database documentation available via links on [Data Type Documentation](https://fdc.nal.usda.gov/data-documentation.html). This documentation provides the detailed definitions and descriptions needed to understand the data elements referenced in the API documentation.      Additional details about the API including rate limits, access, and licensing are available on the [FDC website](https://fdc.nal.usda.gov/api-guide.html)
 *
 * OpenAPI spec version: 1.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.52
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The BrandedFoodItemLabelNutrientsFat model module.
 * @module model/BrandedFoodItemLabelNutrientsFat
 * @version 1.0.1
 */
export class BrandedFoodItemLabelNutrientsFat {
  /**
   * Constructs a new <code>BrandedFoodItemLabelNutrientsFat</code>.
   * @alias module:model/BrandedFoodItemLabelNutrientsFat
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BrandedFoodItemLabelNutrientsFat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrandedFoodItemLabelNutrientsFat} obj Optional instance to populate.
   * @return {module:model/BrandedFoodItemLabelNutrientsFat} The populated <code>BrandedFoodItemLabelNutrientsFat</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrandedFoodItemLabelNutrientsFat();
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} value
 */
BrandedFoodItemLabelNutrientsFat.prototype.value = undefined;

