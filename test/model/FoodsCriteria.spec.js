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
    describe('FoodsCriteria', function() {
      beforeEach(function() {
        instance = new FoodDataCentralApi.FoodsCriteria();
      });

      it('should create an instance of FoodsCriteria', function() {
        // TODO: update the code to test FoodsCriteria
        expect(instance).to.be.a(FoodDataCentralApi.FoodsCriteria);
      });

      it('should have the property fdcIds (base name: "fdcIds")', function() {
        // TODO: update the code to test the property fdcIds
        expect(instance).to.have.property('fdcIds');
        // expect(instance.fdcIds).to.be(expectedValueLiteral);
      });

      it('should have the property format (base name: "format")', function() {
        // TODO: update the code to test the property format
        expect(instance).to.have.property('format');
        // expect(instance.format).to.be(expectedValueLiteral);
      });

      it('should have the property nutrients (base name: "nutrients")', function() {
        // TODO: update the code to test the property nutrients
        expect(instance).to.have.property('nutrients');
        // expect(instance.nutrients).to.be(expectedValueLiteral);
      });

    });
  });

}));
