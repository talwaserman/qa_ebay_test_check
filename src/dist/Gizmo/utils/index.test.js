"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _index = require("./index");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    mandatoryOnProduct | multiValue | umsAlignedAspect | aspectTypes | umsValues | result\n    ", " | ", " | ", " | ", " | ", " | ", "\n    ", " | ", " | ", " | ", " | ", " | ", "\n    ", " | ", " | ", " | ", " | ", " | ", "\n    ", " | ", " | ", " | ", " | ", " | ", "\n    ", " | ", " | ", " | ", " | ", " | ", "\n    ", " | ", " | ", " | ", " | ", " | ", "\n    ", " | ", " | ", " | ", " | ", " | ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

test('util - copyObject', function () {
  expect(JSON.stringify((0, _index.copyObject)({
    a: 1,
    b: 2
  }))).toBe(JSON.stringify({
    a: 1,
    b: 2
  }));
});
test('util - compareArray', function () {
  expect((0, _index.compareArray)([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).toBe(true);
});
test('util - compareArray when first arr1 is empty and arr2 hasValues', function () {
  expect((0, _index.compareArray)([], ['88', '99'])).toBe(false);
});
test('util - compareArray when arr1 hasValues and arr2 is empty', function () {
  expect((0, _index.compareArray)(['88', '99'], [])).toBe(false);
});
test('util - uuid', function () {
  expect((0, _index.uuid)()).not.toBe((0, _index.uuid)());
});
describe('paramtized on getAspectMetadata function with different data', function () {
  it.each(_templateObject(), true, false, true, [''], [], {
    isRequired: false,
    isRecomended: false,
    isOptional: true,
    levelOfImportance: '[Optional]',
    isMultiValue: false,
    umsAlignedAspect: true,
    isWithUms: false,
    umsValues: []
  }, true, false, true, ['REQUIRED'], [], {
    isRequired: false,
    isRecomended: true,
    isOptional: false,
    levelOfImportance: '[Recomended]',
    isMultiValue: false,
    umsAlignedAspect: true,
    isWithUms: false,
    umsValues: []
  }, true, false, true, ['REQUIREDHARD'], [], {
    isRequired: false,
    isRecomended: false,
    isOptional: false,
    levelOfImportance: '',
    isMultiValue: false,
    umsAlignedAspect: true,
    isWithUms: false,
    umsValues: []
  }, true, false, true, ['REQUIREDHARD', 'REQUIRED'], [], {
    isRequired: true,
    isRecomended: false,
    isOptional: false,
    levelOfImportance: '[Required]',
    isMultiValue: false,
    umsAlignedAspect: true,
    isWithUms: false,
    umsValues: []
  }, true, true, true, ['REQUIREDHARD', 'REQUIRED'], [], {
    isRequired: true,
    isRecomended: false,
    isOptional: false,
    levelOfImportance: '[Required]',
    isMultiValue: true,
    umsAlignedAspect: true,
    isWithUms: false,
    umsValues: []
  }, true, false, false, ['REQUIREDHARD', 'REQUIRED'], [], {
    isRequired: true,
    isRecomended: false,
    isOptional: false,
    levelOfImportance: '[Required]',
    isMultiValue: false,
    umsAlignedAspect: false,
    isWithUms: false,
    umsValues: []
  }, true, false, false, ['REQUIREDHARD', 'REQUIRED'], ['UMS VALUE', 'UMS VALUE2'], {
    isRequired: true,
    isRecomended: false,
    isOptional: false,
    levelOfImportance: '[Required]',
    isMultiValue: false,
    umsAlignedAspect: false,
    isWithUms: true,
    umsValues: ['UMS VALUE', 'UMS VALUE2']
  })('should return => {$result} when {mandatoryOnProduct: $mandatoryOnProduct, multiValue: $multiValue, umsAlignedAspect: $umsAlignedAspect, aspectTypes: $aspectTypes, umsValues: $umsValues}', function (_ref) {
    var mandatoryOnProduct = _ref.mandatoryOnProduct,
        multiValue = _ref.multiValue,
        umsAlignedAspect = _ref.umsAlignedAspect,
        aspectTypes = _ref.aspectTypes,
        umsValues = _ref.umsValues,
        result = _ref.result;
    expect((0, _index.getAspectMetadata)({
      mandatoryOnProduct: mandatoryOnProduct,
      multiValue: multiValue,
      umsAlignedAspect: umsAlignedAspect,
      aspectTypes: aspectTypes,
      umsValues: umsValues
    })).toEqual(result);
  });
});