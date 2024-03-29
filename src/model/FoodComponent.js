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
 * The FoodComponent model module.
 * @module model/FoodComponent
 * @version 1.0.1
 */
export class FoodComponent {
  /**
   * Constructs a new <code>FoodComponent</code>.
   * @alias module:model/FoodComponent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FoodComponent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FoodComponent} obj Optional instance to populate.
   * @return {module:model/FoodComponent} The populated <code>FoodComponent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FoodComponent();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('dataPoints'))
        obj.dataPoints = ApiClient.convertToType(data['dataPoints'], 'Number');
      if (data.hasOwnProperty('gramWeight'))
        obj.gramWeight = ApiClient.convertToType(data['gramWeight'], 'Number');
      if (data.hasOwnProperty('isRefuse'))
        obj.isRefuse = ApiClient.convertToType(data['isRefuse'], 'Boolean');
      if (data.hasOwnProperty('minYearAcquired'))
        obj.minYearAcquired = ApiClient.convertToType(data['minYearAcquired'], 'Number');
      if (data.hasOwnProperty('percentWeight'))
        obj.percentWeight = ApiClient.convertToType(data['percentWeight'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
FoodComponent.prototype.id = undefined;

/**
 * @member {String} name
 */
FoodComponent.prototype.name = undefined;

/**
 * @member {Number} dataPoints
 */
FoodComponent.prototype.dataPoints = undefined;

/**
 * @member {Number} gramWeight
 */
FoodComponent.prototype.gramWeight = undefined;

/**
 * @member {Boolean} isRefuse
 */
FoodComponent.prototype.isRefuse = undefined;

/**
 * @member {Number} minYearAcquired
 */
FoodComponent.prototype.minYearAcquired = undefined;

/**
 * @member {Number} percentWeight
 */
FoodComponent.prototype.percentWeight = undefined;

