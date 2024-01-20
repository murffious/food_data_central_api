# FoodDataCentralApi.FoodSearchCriteria

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **String** | Search terms to use in the search. The string may also include standard [search operators](https://fdc.nal.usda.gov/help.html#bkmk-2) | [optional] 
**dataType** | **[String]** | Optional. Filter on a specific data type; specify one or more values in an array. | [optional] 
**pageSize** | **Number** | Optional. Maximum number of results to return for the current page. Default is 50. | [optional] 
**pageNumber** | **Number** | Optional. Page number to retrieve. The offset into the overall result set is expressed as (pageNumber * pageSize) | [optional] 
**sortBy** | **String** | Optional. Specify one of the possible values to sort by that field. Note, dataType.keyword will be dataType and description.keyword will be description in future releases. | [optional] 
**sortOrder** | **String** | Optional. The sort direction for the results. Only applicable if sortBy is specified. | [optional] 
**brandOwner** | **String** | Optional. Filter results based on the brand owner of the food. Only applies to Branded Foods. | [optional] 
**tradeChannel** | **[String]** | Optional. Filter foods containing any of the specified trade channels. | [optional] 
**startDate** | **String** | Filter foods published on or after this date. Format: YYYY-MM-DD | [optional] 
**endDate** | **String** | Filter foods published on or before this date. Format: YYYY-MM-DD | [optional] 

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


<a name="[TradeChannelEnum]"></a>
## Enum: [TradeChannelEnum]

* `CHILD_NUTRITION_FOOD_PROGRAMS` (value: `"CHILD_NUTRITION_FOOD_PROGRAMS"`)
* `DRUG` (value: `"DRUG"`)
* `FOOD_SERVICE` (value: `"FOOD_SERVICE"`)
* `GROCERY` (value: `"GROCERY"`)
* `MASS_MERCHANDISING` (value: `"MASS_MERCHANDISING"`)
* `MILITARY` (value: `"MILITARY"`)
* `ONLINE` (value: `"ONLINE"`)
* `VENDING` (value: `"VENDING"`)

