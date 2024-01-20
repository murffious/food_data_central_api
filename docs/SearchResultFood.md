# FoodDataCentralApi.SearchResultFood

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fdcId** | **Number** | Unique ID of the food. | 
**dataType** | **String** | The type of the food data. | [optional] 
**description** | **String** | The description of the food. | 
**foodCode** | **String** | Any A unique ID identifying the food within FNDDS. | [optional] 
**foodNutrients** | [**[AbridgedFoodNutrient]**](AbridgedFoodNutrient.md) |  | [optional] 
**publicationDate** | **String** | Date the item was published to FDC. | [optional] 
**scientificName** | **String** | The scientific name of the food. | [optional] 
**brandOwner** | **String** | Brand owner for the food. Only applies to Branded Foods. | [optional] 
**gtinUpc** | **String** | GTIN or UPC code identifying the food. Only applies to Branded Foods. | [optional] 
**ingredients** | **String** | The list of ingredients (as it appears on the product label). Only applies to Branded Foods. | [optional] 
**ndbNumber** | **Number** | Unique number assigned for foundation foods. Only applies to Foundation and SRLegacy Foods. | [optional] 
**additionalDescriptions** | **String** | Any additional descriptions of the food. | [optional] 
**allHighlightFields** | **String** | allHighlightFields | [optional] 
**score** | **Number** | Relative score indicating how well the food matches the search criteria. | [optional] 
