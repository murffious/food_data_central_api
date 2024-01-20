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
 * The NutrientConversionFactors model module.
 * @module model/NutrientConversionFactors
 * @version 1.0.1
 */
export class NutrientConversionFactors {
  /**
   * Constructs a new <code>NutrientConversionFactors</code>.
   * @alias module:model/NutrientConversionFactors
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>NutrientConversionFactors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NutrientConversionFactors} obj Optional instance to populate.
   * @return {module:model/NutrientConversionFactors} The populated <code>NutrientConversionFactors</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new NutrientConversionFactors();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} type
 */
NutrientConversionFactors.prototype.type = undefined;

/**
 * @member {Number} value
 */
NutrientConversionFactors.prototype.value = undefined;

