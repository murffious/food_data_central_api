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
 * The NutrientAcquisitionDetails model module.
 * @module model/NutrientAcquisitionDetails
 * @version 1.0.1
 */
export class NutrientAcquisitionDetails {
  /**
   * Constructs a new <code>NutrientAcquisitionDetails</code>.
   * @alias module:model/NutrientAcquisitionDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>NutrientAcquisitionDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NutrientAcquisitionDetails} obj Optional instance to populate.
   * @return {module:model/NutrientAcquisitionDetails} The populated <code>NutrientAcquisitionDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new NutrientAcquisitionDetails();
      if (data.hasOwnProperty('sampleUnitId'))
        obj.sampleUnitId = ApiClient.convertToType(data['sampleUnitId'], 'Number');
      if (data.hasOwnProperty('purchaseDate'))
        obj.purchaseDate = ApiClient.convertToType(data['purchaseDate'], 'String');
      if (data.hasOwnProperty('storeCity'))
        obj.storeCity = ApiClient.convertToType(data['storeCity'], 'String');
      if (data.hasOwnProperty('storeState'))
        obj.storeState = ApiClient.convertToType(data['storeState'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} sampleUnitId
 */
NutrientAcquisitionDetails.prototype.sampleUnitId = undefined;

/**
 * @member {String} purchaseDate
 */
NutrientAcquisitionDetails.prototype.purchaseDate = undefined;

/**
 * @member {String} storeCity
 */
NutrientAcquisitionDetails.prototype.storeCity = undefined;

/**
 * @member {String} storeState
 */
NutrientAcquisitionDetails.prototype.storeState = undefined;

