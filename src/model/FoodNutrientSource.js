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
 * The FoodNutrientSource model module.
 * @module model/FoodNutrientSource
 * @version 1.0.1
 */
export class FoodNutrientSource {
  /**
   * Constructs a new <code>FoodNutrientSource</code>.
   * @alias module:model/FoodNutrientSource
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FoodNutrientSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FoodNutrientSource} obj Optional instance to populate.
   * @return {module:model/FoodNutrientSource} The populated <code>FoodNutrientSource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FoodNutrientSource();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
FoodNutrientSource.prototype.id = undefined;

/**
 * @member {String} code
 */
FoodNutrientSource.prototype.code = undefined;

/**
 * @member {String} description
 */
FoodNutrientSource.prototype.description = undefined;
