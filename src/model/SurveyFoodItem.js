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
import {FoodAttribute} from './FoodAttribute';
import {FoodPortion} from './FoodPortion';
import {InputFoodSurvey} from './InputFoodSurvey';
import {WweiaFoodCategory} from './WweiaFoodCategory';

/**
 * The SurveyFoodItem model module.
 * @module model/SurveyFoodItem
 * @version 1.0.1
 */
export class SurveyFoodItem {
  /**
   * Constructs a new <code>SurveyFoodItem</code>.
   * @alias module:model/SurveyFoodItem
   * @class
   * @param fdcId {Number} 
   * @param description {String} 
   */
  constructor(fdcId, description) {
    this.fdcId = fdcId;
    this.description = description;
  }

  /**
   * Constructs a <code>SurveyFoodItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SurveyFoodItem} obj Optional instance to populate.
   * @return {module:model/SurveyFoodItem} The populated <code>SurveyFoodItem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SurveyFoodItem();
      if (data.hasOwnProperty('fdcId'))
        obj.fdcId = ApiClient.convertToType(data['fdcId'], 'Number');
      if (data.hasOwnProperty('datatype'))
        obj.datatype = ApiClient.convertToType(data['datatype'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('endDate'))
        obj.endDate = ApiClient.convertToType(data['endDate'], 'String');
      if (data.hasOwnProperty('foodClass'))
        obj.foodClass = ApiClient.convertToType(data['foodClass'], 'String');
      if (data.hasOwnProperty('foodCode'))
        obj.foodCode = ApiClient.convertToType(data['foodCode'], 'String');
      if (data.hasOwnProperty('publicationDate'))
        obj.publicationDate = ApiClient.convertToType(data['publicationDate'], 'String');
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'String');
      if (data.hasOwnProperty('foodAttributes'))
        obj.foodAttributes = ApiClient.convertToType(data['foodAttributes'], [FoodAttribute]);
      if (data.hasOwnProperty('foodPortions'))
        obj.foodPortions = ApiClient.convertToType(data['foodPortions'], [FoodPortion]);
      if (data.hasOwnProperty('inputFoods'))
        obj.inputFoods = ApiClient.convertToType(data['inputFoods'], [InputFoodSurvey]);
      if (data.hasOwnProperty('wweiaFoodCategory'))
        obj.wweiaFoodCategory = WweiaFoodCategory.constructFromObject(data['wweiaFoodCategory']);
    }
    return obj;
  }
}

/**
 * @member {Number} fdcId
 */
SurveyFoodItem.prototype.fdcId = undefined;

/**
 * @member {String} datatype
 */
SurveyFoodItem.prototype.datatype = undefined;

/**
 * @member {String} description
 */
SurveyFoodItem.prototype.description = undefined;

/**
 * @member {String} endDate
 */
SurveyFoodItem.prototype.endDate = undefined;

/**
 * @member {String} foodClass
 */
SurveyFoodItem.prototype.foodClass = undefined;

/**
 * @member {String} foodCode
 */
SurveyFoodItem.prototype.foodCode = undefined;

/**
 * @member {String} publicationDate
 */
SurveyFoodItem.prototype.publicationDate = undefined;

/**
 * @member {String} startDate
 */
SurveyFoodItem.prototype.startDate = undefined;

/**
 * @member {Array.<module:model/FoodAttribute>} foodAttributes
 */
SurveyFoodItem.prototype.foodAttributes = undefined;

/**
 * @member {Array.<module:model/FoodPortion>} foodPortions
 */
SurveyFoodItem.prototype.foodPortions = undefined;

/**
 * @member {Array.<module:model/InputFoodSurvey>} inputFoods
 */
SurveyFoodItem.prototype.inputFoods = undefined;

/**
 * @member {module:model/WweiaFoodCategory} wweiaFoodCategory
 */
SurveyFoodItem.prototype.wweiaFoodCategory = undefined;

// Implement InlineResponse200 interface:
