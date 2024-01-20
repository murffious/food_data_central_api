# FoodDataCentralApi.FDCApi

All URIs are relative to *https://api.nal.usda.gov/fdc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFood**](FDCApi.md#getFood) | **GET** /v1/food/{fdcId} | Fetches details for one food item by FDC ID
[**getFoods**](FDCApi.md#getFoods) | **GET** /v1/foods | Fetches details for multiple food items using input FDC IDs
[**getFoodsList**](FDCApi.md#getFoodsList) | **GET** /v1/foods/list | Returns a paged list of foods, in the &#x27;abridged&#x27; format
[**getFoodsSearch**](FDCApi.md#getFoodsSearch) | **GET** /v1/foods/search | Returns a list of foods that matched search (query) keywords
[**getJsonSpec**](FDCApi.md#getJsonSpec) | **GET** /v1/json-spec | Returns this documentation in JSON format
[**getYamlSpec**](FDCApi.md#getYamlSpec) | **GET** /v1/yaml-spec | Returns this documentation in JSON format
[**postFoods**](FDCApi.md#postFoods) | **POST** /v1/foods | Fetches details for multiple food items using input FDC IDs
[**postFoodsList**](FDCApi.md#postFoodsList) | **POST** /v1/foods/list | Returns a paged list of foods, in the &#x27;abridged&#x27; format
[**postFoodsSearch**](FDCApi.md#postFoodsSearch) | **POST** /v1/foods/search | Returns a list of foods that matched search (query) keywords

<a name="getFood"></a>
# **getFood**
> InlineResponse200 getFood(fdcId, opts)

Fetches details for one food item by FDC ID

Retrieves a single food item by an FDC ID. Optional format and nutrients can be specified.

### Example
```javascript
import {FoodDataCentralApi} from 'food_data_central_api';
let defaultClient = FoodDataCentralApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FoodDataCentralApi.FDCApi();
let fdcId = "fdcId_example"; // String | FDC id of the food to retrieve
let opts = { 
  'format': "format_example", // String | Optional. 'abridged' for an abridged set of elements, 'full' for all elements (default).
  'nutrients': [3.4] // [Number] | Optional. List of up to 25 nutrient numbers. Only the nutrient information for the specified nutrients will be returned. Should be comma separated list (e.g. nutrients=203,204) or repeating parameters (e.g. nutrients=203&nutrients=204). If a food does not have any matching nutrients, the food will be returned with an empty foodNutrients element.
};
apiInstance.getFood(fdcId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fdcId** | **String**| FDC id of the food to retrieve | 
 **format** | **String**| Optional. &#x27;abridged&#x27; for an abridged set of elements, &#x27;full&#x27; for all elements (default). | [optional] 
 **nutrients** | [**[Number]**](Number.md)| Optional. List of up to 25 nutrient numbers. Only the nutrient information for the specified nutrients will be returned. Should be comma separated list (e.g. nutrients&#x3D;203,204) or repeating parameters (e.g. nutrients&#x3D;203&amp;nutrients&#x3D;204). If a food does not have any matching nutrients, the food will be returned with an empty foodNutrients element. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFoods"></a>
# **getFoods**
> [Object] getFoods(fdcIds, opts)

Fetches details for multiple food items using input FDC IDs

Retrieves a list of food items by a list of up to 20 FDC IDs. Optional format and nutrients can be specified. Invalid FDC ID&#x27;s or ones that are not found are omitted and an empty set is returned if there are no matches.

### Example
```javascript
import {FoodDataCentralApi} from 'food_data_central_api';
let defaultClient = FoodDataCentralApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FoodDataCentralApi.FDCApi();
let fdcIds = ["fdcIds_example"]; // [String] | List of multiple FDC ID's. Should be comma separated list (e.g. fdcIds=534358,373052) or repeating parameters (e.g. fdcIds=534358&fdcIds=373052).
let opts = { 
  'format': "format_example", // String | Optional. 'abridged' for an abridged set of elements, 'full' for all elements (default).
  'nutrients': [3.4] // [Number] | Optional. List of up to 25 nutrient numbers. Only the nutrient information for the specified nutrients will be returned. Should be comma separated list (e.g. nutrients=203,204) or repeating parameters (e.g. nutrients=203&nutrients=204). If a food does not have any matching nutrients, the food will be returned with an empty foodNutrients element.
};
apiInstance.getFoods(fdcIds, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fdcIds** | [**[String]**](String.md)| List of multiple FDC ID&#x27;s. Should be comma separated list (e.g. fdcIds&#x3D;534358,373052) or repeating parameters (e.g. fdcIds&#x3D;534358&amp;fdcIds&#x3D;373052). | 
 **format** | **String**| Optional. &#x27;abridged&#x27; for an abridged set of elements, &#x27;full&#x27; for all elements (default). | [optional] 
 **nutrients** | [**[Number]**](Number.md)| Optional. List of up to 25 nutrient numbers. Only the nutrient information for the specified nutrients will be returned. Should be comma separated list (e.g. nutrients&#x3D;203,204) or repeating parameters (e.g. nutrients&#x3D;203&amp;nutrients&#x3D;204). If a food does not have any matching nutrients, the food will be returned with an empty foodNutrients element. | [optional] 

### Return type

**[Object]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFoodsList"></a>
# **getFoodsList**
> [AbridgedFoodItem] getFoodsList(opts)

Returns a paged list of foods, in the &#x27;abridged&#x27; format

Retrieves a paged list of foods. Use the pageNumber parameter to page through the entire result set.

### Example
```javascript
import {FoodDataCentralApi} from 'food_data_central_api';
let defaultClient = FoodDataCentralApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FoodDataCentralApi.FDCApi();
let opts = { 
  'dataType': ["dataType_example"], // [String] | Optional. Filter on a specific data type; specify one or more values in an array.
  'pageSize': 56, // Number | Optional. Maximum number of results to return for the current page. Default is 50.
  'pageNumber': 56, // Number | Optional. Page number to retrieve. The offset into the overall result set is expressed as (pageNumber * pageSize)
  'sortBy': "sortBy_example", // String | Optional. Specify one of the possible values to sort by that field. Note, dataType.keyword will be dataType and lowercaseDescription.keyword will be description in future releases.
  'sortOrder': "sortOrder_example" // String | Optional. The sort direction for the results. Only applicable if sortBy is specified.
};
apiInstance.getFoodsList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataType** | [**[String]**](String.md)| Optional. Filter on a specific data type; specify one or more values in an array. | [optional] 
 **pageSize** | **Number**| Optional. Maximum number of results to return for the current page. Default is 50. | [optional] 
 **pageNumber** | **Number**| Optional. Page number to retrieve. The offset into the overall result set is expressed as (pageNumber * pageSize) | [optional] 
 **sortBy** | **String**| Optional. Specify one of the possible values to sort by that field. Note, dataType.keyword will be dataType and lowercaseDescription.keyword will be description in future releases. | [optional] 
 **sortOrder** | **String**| Optional. The sort direction for the results. Only applicable if sortBy is specified. | [optional] 

### Return type

[**[AbridgedFoodItem]**](AbridgedFoodItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFoodsSearch"></a>
# **getFoodsSearch**
> SearchResult getFoodsSearch(query, opts)

Returns a list of foods that matched search (query) keywords

Search for foods using keywords. Results can be filtered by dataType and there are options for result page sizes or sorting.

### Example
```javascript
import {FoodDataCentralApi} from 'food_data_central_api';
let defaultClient = FoodDataCentralApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FoodDataCentralApi.FDCApi();
let query = "query_example"; // String | One or more search terms.  The string may include [search operators](https://fdc.nal.usda.gov/help.html#bkmk-2)
let opts = { 
  'dataType': ["dataType_example"], // [String] | Optional. Filter on a specific data type; specify one or more values in an array.
  'pageSize': 56, // Number | Optional. Maximum number of results to return for the current page. Default is 50.
  'pageNumber': 56, // Number | Optional. Page number to retrieve. The offset into the overall result set is expressed as (pageNumber * pageSize)
  'sortBy': "sortBy_example", // String | Optional. Specify one of the possible values to sort by that field. Note, dataType.keyword will be dataType and lowercaseDescription.keyword will be description in future releases.
  'sortOrder': "sortOrder_example", // String | Optional. The sort direction for the results. Only applicable if sortBy is specified.
  'brandOwner': "brandOwner_example" // String | Optional. Filter results based on the brand owner of the food. Only applies to Branded Foods
};
apiInstance.getFoodsSearch(query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| One or more search terms.  The string may include [search operators](https://fdc.nal.usda.gov/help.html#bkmk-2) | 
 **dataType** | [**[String]**](String.md)| Optional. Filter on a specific data type; specify one or more values in an array. | [optional] 
 **pageSize** | **Number**| Optional. Maximum number of results to return for the current page. Default is 50. | [optional] 
 **pageNumber** | **Number**| Optional. Page number to retrieve. The offset into the overall result set is expressed as (pageNumber * pageSize) | [optional] 
 **sortBy** | **String**| Optional. Specify one of the possible values to sort by that field. Note, dataType.keyword will be dataType and lowercaseDescription.keyword will be description in future releases. | [optional] 
 **sortOrder** | **String**| Optional. The sort direction for the results. Only applicable if sortBy is specified. | [optional] 
 **brandOwner** | **String**| Optional. Filter results based on the brand owner of the food. Only applies to Branded Foods | [optional] 

### Return type

[**SearchResult**](SearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJsonSpec"></a>
# **getJsonSpec**
> getJsonSpec()

Returns this documentation in JSON format

The OpenAPI 3.0 specification for the FDC API rendered as JSON (JavaScript Object Notation)

### Example
```javascript
import {FoodDataCentralApi} from 'food_data_central_api';
let defaultClient = FoodDataCentralApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FoodDataCentralApi.FDCApi();
apiInstance.getJsonSpec((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getYamlSpec"></a>
# **getYamlSpec**
> getYamlSpec()

Returns this documentation in JSON format

The OpenAPI 3.0 specification for the FDC API rendered as YAML (YAML Ain&#x27;t Markup Language)

### Example
```javascript
import {FoodDataCentralApi} from 'food_data_central_api';
let defaultClient = FoodDataCentralApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FoodDataCentralApi.FDCApi();
apiInstance.getYamlSpec((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="postFoods"></a>
# **postFoods**
> [Object] postFoods(body)

Fetches details for multiple food items using input FDC IDs

Retrieves a list of food items by a list of up to 20 FDC IDs. Optional format and nutrients can be specified. Invalid FDC ID&#x27;s or ones that are not found are omitted and an empty set is returned if there are no matches.

### Example
```javascript
import {FoodDataCentralApi} from 'food_data_central_api';
let defaultClient = FoodDataCentralApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FoodDataCentralApi.FDCApi();
let body = new FoodDataCentralApi.FoodsCriteria(); // FoodsCriteria | 

apiInstance.postFoods(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FoodsCriteria**](FoodsCriteria.md)|  | 

### Return type

**[Object]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postFoodsList"></a>
# **postFoodsList**
> [AbridgedFoodItem] postFoodsList(body)

Returns a paged list of foods, in the &#x27;abridged&#x27; format

Retrieves a paged list of foods. Use the pageNumber parameter to page through the entire result set.

### Example
```javascript
import {FoodDataCentralApi} from 'food_data_central_api';
let defaultClient = FoodDataCentralApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FoodDataCentralApi.FDCApi();
let body = new FoodDataCentralApi.FoodListCriteria(); // FoodListCriteria | 

apiInstance.postFoodsList(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FoodListCriteria**](FoodListCriteria.md)|  | 

### Return type

[**[AbridgedFoodItem]**](AbridgedFoodItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postFoodsSearch"></a>
# **postFoodsSearch**
> SearchResult postFoodsSearch(body)

Returns a list of foods that matched search (query) keywords

Search for foods using keywords. Results can be filtered by dataType and there are options for result page sizes or sorting.

### Example
```javascript
import {FoodDataCentralApi} from 'food_data_central_api';
let defaultClient = FoodDataCentralApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FoodDataCentralApi.FDCApi();
let body = new FoodDataCentralApi.FoodSearchCriteria(); // FoodSearchCriteria | The query string may also include standard [search operators](https://fdc.nal.usda.gov/help.html#bkmk-2)

apiInstance.postFoodsSearch(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FoodSearchCriteria**](FoodSearchCriteria.md)| The query string may also include standard [search operators](https://fdc.nal.usda.gov/help.html#bkmk-2) | 

### Return type

[**SearchResult**](SearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

