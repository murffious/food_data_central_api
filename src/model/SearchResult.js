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
import {FoodSearchCriteria} from './FoodSearchCriteria';
import {SearchResultFood} from './SearchResultFood';

/**
 * The SearchResult model module.
 * @module model/SearchResult
 * @version 1.0.1
 */
export class SearchResult {
  /**
   * Constructs a new <code>SearchResult</code>.
   * @alias module:model/SearchResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SearchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchResult} obj Optional instance to populate.
   * @return {module:model/SearchResult} The populated <code>SearchResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SearchResult();
      if (data.hasOwnProperty('foodSearchCriteria'))
        obj.foodSearchCriteria = FoodSearchCriteria.constructFromObject(data['foodSearchCriteria']);
      if (data.hasOwnProperty('totalHits'))
        obj.totalHits = ApiClient.convertToType(data['totalHits'], 'Number');
      if (data.hasOwnProperty('currentPage'))
        obj.currentPage = ApiClient.convertToType(data['currentPage'], 'Number');
      if (data.hasOwnProperty('totalPages'))
        obj.totalPages = ApiClient.convertToType(data['totalPages'], 'Number');
      if (data.hasOwnProperty('foods'))
        obj.foods = ApiClient.convertToType(data['foods'], [SearchResultFood]);
    }
    return obj;
  }
}

/**
 * @member {module:model/FoodSearchCriteria} foodSearchCriteria
 */
SearchResult.prototype.foodSearchCriteria = undefined;

/**
 * The total number of foods found matching the search criteria.
 * @member {Number} totalHits
 */
SearchResult.prototype.totalHits = undefined;

/**
 * The current page of results being returned.
 * @member {Number} currentPage
 */
SearchResult.prototype.currentPage = undefined;

/**
 * The total number of pages found matching the search criteria.
 * @member {Number} totalPages
 */
SearchResult.prototype.totalPages = undefined;

/**
 * The list of foods found matching the search criteria. See Food Fields below.
 * @member {Array.<module:model/SearchResultFood>} foods
 */
SearchResult.prototype.foods = undefined;

