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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FoodDataCentralApi);
  }
}(this, function(expect, FoodDataCentralApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('SurveyFoodItem', function() {
      beforeEach(function() {
        instance = new FoodDataCentralApi.SurveyFoodItem();
      });

      it('should create an instance of SurveyFoodItem', function() {
        // TODO: update the code to test SurveyFoodItem
        expect(instance).to.be.a(FoodDataCentralApi.SurveyFoodItem);
      });

      it('should have the property fdcId (base name: "fdcId")', function() {
        // TODO: update the code to test the property fdcId
        expect(instance).to.have.property('fdcId');
        // expect(instance.fdcId).to.be(expectedValueLiteral);
      });

      it('should have the property datatype (base name: "datatype")', function() {
        // TODO: update the code to test the property datatype
        expect(instance).to.have.property('datatype');
        // expect(instance.datatype).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property endDate (base name: "endDate")', function() {
        // TODO: update the code to test the property endDate
        expect(instance).to.have.property('endDate');
        // expect(instance.endDate).to.be(expectedValueLiteral);
      });

      it('should have the property foodClass (base name: "foodClass")', function() {
        // TODO: update the code to test the property foodClass
        expect(instance).to.have.property('foodClass');
        // expect(instance.foodClass).to.be(expectedValueLiteral);
      });

      it('should have the property foodCode (base name: "foodCode")', function() {
        // TODO: update the code to test the property foodCode
        expect(instance).to.have.property('foodCode');
        // expect(instance.foodCode).to.be(expectedValueLiteral);
      });

      it('should have the property publicationDate (base name: "publicationDate")', function() {
        // TODO: update the code to test the property publicationDate
        expect(instance).to.have.property('publicationDate');
        // expect(instance.publicationDate).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "startDate")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

      it('should have the property foodAttributes (base name: "foodAttributes")', function() {
        // TODO: update the code to test the property foodAttributes
        expect(instance).to.have.property('foodAttributes');
        // expect(instance.foodAttributes).to.be(expectedValueLiteral);
      });

      it('should have the property foodPortions (base name: "foodPortions")', function() {
        // TODO: update the code to test the property foodPortions
        expect(instance).to.have.property('foodPortions');
        // expect(instance.foodPortions).to.be(expectedValueLiteral);
      });

      it('should have the property inputFoods (base name: "inputFoods")', function() {
        // TODO: update the code to test the property inputFoods
        expect(instance).to.have.property('inputFoods');
        // expect(instance.inputFoods).to.be(expectedValueLiteral);
      });

      it('should have the property wweiaFoodCategory (base name: "wweiaFoodCategory")', function() {
        // TODO: update the code to test the property wweiaFoodCategory
        expect(instance).to.have.property('wweiaFoodCategory');
        // expect(instance.wweiaFoodCategory).to.be(expectedValueLiteral);
      });

    });
  });

}));
