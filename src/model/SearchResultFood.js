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
import {AbridgedFoodNutrient} from './AbridgedFoodNutrient';

/**
 * The SearchResultFood model module.
 * @module model/SearchResultFood
 * @version 1.0.1
 */
export class SearchResultFood {
  /**
   * Constructs a new <code>SearchResultFood</code>.
   * @alias module:model/SearchResultFood
   * @class
   * @param fdcId {Number} Unique ID of the food.
   * @param description {String} The description of the food.
   */
  constructor(fdcId, description) {
    this.fdcId = fdcId;
    this.description = description;
  }

  /**
   * Constructs a <code>SearchResultFood</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchResultFood} obj Optional instance to populate.
   * @return {module:model/SearchResultFood} The populated <code>SearchResultFood</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SearchResultFood();
      if (data.hasOwnProperty('fdcId'))
        obj.fdcId = ApiClient.convertToType(data['fdcId'], 'Number');
      if (data.hasOwnProperty('dataType'))
        obj.dataType = ApiClient.convertToType(data['dataType'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('foodCode'))
        obj.foodCode = ApiClient.convertToType(data['foodCode'], 'String');
      if (data.hasOwnProperty('foodNutrients'))
        obj.foodNutrients = ApiClient.convertToType(data['foodNutrients'], [AbridgedFoodNutrient]);
      if (data.hasOwnProperty('publicationDate'))
        obj.publicationDate = ApiClient.convertToType(data['publicationDate'], 'String');
      if (data.hasOwnProperty('scientificName'))
        obj.scientificName = ApiClient.convertToType(data['scientificName'], 'String');
      if (data.hasOwnProperty('brandOwner'))
        obj.brandOwner = ApiClient.convertToType(data['brandOwner'], 'String');
      if (data.hasOwnProperty('gtinUpc'))
        obj.gtinUpc = ApiClient.convertToType(data['gtinUpc'], 'String');
      if (data.hasOwnProperty('ingredients'))
        obj.ingredients = ApiClient.convertToType(data['ingredients'], 'String');
      if (data.hasOwnProperty('ndbNumber'))
        obj.ndbNumber = ApiClient.convertToType(data['ndbNumber'], 'Number');
      if (data.hasOwnProperty('additionalDescriptions'))
        obj.additionalDescriptions = ApiClient.convertToType(data['additionalDescriptions'], 'String');
      if (data.hasOwnProperty('allHighlightFields'))
        obj.allHighlightFields = ApiClient.convertToType(data['allHighlightFields'], 'String');
      if (data.hasOwnProperty('score'))
        obj.score = ApiClient.convertToType(data['score'], 'Number');
    }
    return obj;
  }
}

/**
 * Unique ID of the food.
 * @member {Number} fdcId
 */
SearchResultFood.prototype.fdcId = undefined;

/**
 * The type of the food data.
 * @member {String} dataType
 */
SearchResultFood.prototype.dataType = undefined;

/**
 * The description of the food.
 * @member {String} description
 */
SearchResultFood.prototype.description = undefined;

/**
 * Any A unique ID identifying the food within FNDDS.
 * @member {String} foodCode
 */
SearchResultFood.prototype.foodCode = undefined;

/**
 * @member {Array.<module:model/AbridgedFoodNutrient>} foodNutrients
 */
SearchResultFood.prototype.foodNutrients = undefined;

/**
 * Date the item was published to FDC.
 * @member {String} publicationDate
 */
SearchResultFood.prototype.publicationDate = undefined;

/**
 * The scientific name of the food.
 * @member {String} scientificName
 */
SearchResultFood.prototype.scientificName = undefined;

/**
 * Brand owner for the food. Only applies to Branded Foods.
 * @member {String} brandOwner
 */
SearchResultFood.prototype.brandOwner = undefined;

/**
 * GTIN or UPC code identifying the food. Only applies to Branded Foods.
 * @member {String} gtinUpc
 */
SearchResultFood.prototype.gtinUpc = undefined;

/**
 * The list of ingredients (as it appears on the product label). Only applies to Branded Foods.
 * @member {String} ingredients
 */
SearchResultFood.prototype.ingredients = undefined;

/**
 * Unique number assigned for foundation foods. Only applies to Foundation and SRLegacy Foods.
 * @member {Number} ndbNumber
 */
SearchResultFood.prototype.ndbNumber = undefined;

/**
 * Any additional descriptions of the food.
 * @member {String} additionalDescriptions
 */
SearchResultFood.prototype.additionalDescriptions = undefined;

/**
 * allHighlightFields
 * @member {String} allHighlightFields
 */
SearchResultFood.prototype.allHighlightFields = undefined;

/**
 * Relative score indicating how well the food matches the search criteria.
 * @member {Number} score
 */
SearchResultFood.prototype.score = undefined;

