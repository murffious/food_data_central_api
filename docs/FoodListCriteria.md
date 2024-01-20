# FoodDataCentralApi.FoodListCriteria

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataType** | **[String]** | Optional. Filter on a specific data type; specify one or more values in an array. | [optional] 
**pageSize** | **Number** | Optional. Maximum number of results to return for the current page. Default is 50. | [optional] 
**pageNumber** | **Number** | Optional. Page number to retrieve. The offset into the overall result set is expressed as (pageNumber * pageSize) | [optional] 
**sortBy** | **String** | Optional. Specify one of the possible values to sort by that field. Note, dataType.keyword will be dataType and lowercaseDescription.keyword will be description in future releases. | [optional] 
**sortOrder** | **String** | Optional. The sort direction for the results. Only applicable if sortBy is specified. | [optional] 

<a name="[DataTypeEnum]"></a>
## Enum: [DataTypeEnum]

* `branded` (value: `"Branded"`)
* `foundation` (value: `"Foundation"`)
* `surveyFNDDS` (value: `"Survey (FNDDS)"`)
* `sRLegacy` (value: `"SR Legacy"`)


<a name="SortByEnum"></a>
## Enum: SortByEnum

* `dataTypeKeyword` (value: `"dataType.keyword"`)
* `lowercaseDescriptionKeyword` (value: `"lowercaseDescription.keyword"`)
* `fdcId` (value: `"fdcId"`)
* `publishedDate` (value: `"publishedDate"`)


<a name="SortOrderEnum"></a>
## Enum: SortOrderEnum

* `asc` (value: `"asc"`)
* `desc` (value: `"desc"`)

