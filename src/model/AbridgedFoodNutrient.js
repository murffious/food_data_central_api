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
 * The AbridgedFoodNutrient model module.
 * @module model/AbridgedFoodNutrient
 * @version 1.0.1
 */
export class AbridgedFoodNutrient {
  /**
   * Constructs a new <code>AbridgedFoodNutrient</code>.
   * @alias module:model/AbridgedFoodNutrient
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AbridgedFoodNutrient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AbridgedFoodNutrient} obj Optional instance to populate.
   * @return {module:model/AbridgedFoodNutrient} The populated <code>AbridgedFoodNutrient</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AbridgedFoodNutrient();
      if (data.hasOwnProperty('number'))
        obj._number = ApiClient.convertToType(data['number'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('unitName'))
        obj.unitName = ApiClient.convertToType(data['unitName'], 'String');
      if (data.hasOwnProperty('derivationCode'))
        obj.derivationCode = ApiClient.convertToType(data['derivationCode'], 'String');
      if (data.hasOwnProperty('derivationDescription'))
        obj.derivationDescription = ApiClient.convertToType(data['derivationDescription'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} _number
 */
AbridgedFoodNutrient.prototype._number = undefined;

/**
 * @member {String} name
 */
AbridgedFoodNutrient.prototype.name = undefined;

/**
 * @member {Number} amount
 */
AbridgedFoodNutrient.prototype.amount = undefined;

/**
 * @member {String} unitName
 */
AbridgedFoodNutrient.prototype.unitName = undefined;

/**
 * @member {String} derivationCode
 */
AbridgedFoodNutrient.prototype.derivationCode = undefined;

/**
 * @member {String} derivationDescription
 */
AbridgedFoodNutrient.prototype.derivationDescription = undefined;

