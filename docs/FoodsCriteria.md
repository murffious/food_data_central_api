# FoodDataCentralApi.FoodsCriteria

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fdcIds** | **[Number]** | List of multiple FDC ID&#x27;s | [optional] 
**format** | **String** | Optional. &#x27;abridged&#x27; for an abridged set of elements, &#x27;full&#x27; for all elements (default). | [optional] 
**nutrients** | **[Number]** | Optional. List of up to 25 nutrient numbers. Only the nutrient information for the specified nutrients will be returned.  If a food does not have any matching nutrients, the food will be returned with an empty foodNutrients element. | [optional] 

<a name="FormatEnum"></a>
## Enum: FormatEnum

* `abridged` (value: `"abridged"`)
* `full` (value: `"full"`)

