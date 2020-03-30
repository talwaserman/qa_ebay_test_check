"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockDeleteRules = exports.mockGetRulesData = void 0;
var mockGetRulesData = {
  productRulesResponseContract: {
    status: 'SUCCESS',
    message: null,
    rules: [{
      identifier: '1',
      source: 'testZiv',
      locale: 'DE',
      language: 'EN',
      tenant: 'EBAY',
      ruleType: 'REMOVE_ATTRIBUTE',
      ruleParams: {
        class: 'com.ebay.catalogs.titans.petracker.common.data.item.aggregationrules.RemoveAttributeAggregationRuleParams',
        attributeName: 'California Prop 65 Warning',
        attributeValues: []
      },
      logicType: 'MODIFY',
      ruleId: 8161,
      description: 'ziv'
    }, {
      identifier: '20',
      source: 'EtlRulesGenerator',
      tenant: 'EBAY',
      locale: 'EN',
      language: 'EN',
      ruleType: 'ADD_ATTRIBUTE',
      ruleParams: {
        class: 'com.ebay.catalogs.titans.petracker.common.data.item.aggregationrules.RemoveAttributeAggregationRuleParams',
        attributeName: 'MERGED_TO',
        attributeValues: ['9000793296', '9000793298', '9000793299']
      },
      logicType: 'MODIFY',
      ruleId: 7916,
      description: 'Added by Rules Generator Component, Etl Name: Dedup_AML_EN_US, Job Id: 1ffdd645-87ce-4910-ae73-a24a9eff8cb6'
    }, {
      identifier: '3',
      source: 'EtlRulesGenerator',
      tenant: 'EBAY',
      locale: 'EN',
      language: 'EN',
      ruleType: 'ADD_ATTRIBUTE',
      ruleParams: {
        class: 'com.ebay.catalogs.titans.petracker.common.data.item.aggregationrules.RemoveAttributeAggregationRuleParams',
        attributeName: 'MERGED_TO',
        attributeValues: ['9000793296', '9000793298', '9000793299']
      },
      logicType: 'MODIFY',
      ruleId: 7916,
      description: 'Added by Rules Generator Component, Etl Name: Dedup_AML_EN_US, Job Id: 1ffdd645-87ce-4910-ae73-a24a9eff8cb6'
    }, {
      identifier: '5',
      source: 'EtlRulesGenerator',
      tenant: 'EBAY',
      locale: 'EN',
      language: 'EN',
      ruleType: 'ADD_ATTRIBUTE',
      ruleParams: {
        class: 'com.ebay.catalogs.titans.petracker.common.data.item.aggregationrules.RemoveAttributeAggregationRuleParams',
        attributeName: 'MERGED_TO',
        attributeValues: ['9000793296', '9000793298', '9000793299']
      },
      logicType: 'MODIFY',
      ruleId: 7916,
      description: 'Added by Rules Generator Component, Etl Name: Dedup_AML_EN_US, Job Id: 1ffdd645-87ce-4910-ae73-a24a9eff8cb6'
    }, {
      identifier: '8',
      source: 'EtlRulesGenerator',
      tenant: 'EBAY',
      locale: 'EN',
      language: 'EN',
      ruleType: 'ADD_ATTRIBUTE',
      ruleParams: {
        class: 'com.ebay.catalogs.titans.petracker.common.data.item.aggregationrules.RemoveAttributeAggregationRuleParams',
        attributeName: 'MERGED_TO',
        attributeValues: ['9000793296', '9000793298', '9000793299']
      },
      logicType: 'MODIFY',
      ruleId: 7916,
      description: 'Added by Rules Generator Component, Etl Name: Dedup_AML_EN_US, Job Id: 1ffdd645-87ce-4910-ae73-a24a9eff8cb6'
    }, {
      identifier: '6',
      source: 'EtlRulesGenerator',
      tenant: 'EBAY',
      locale: 'EN',
      language: 'EN',
      ruleType: 'ADD_ATTRIBUTE',
      ruleParams: {
        class: 'com.ebay.catalogs.titans.petracker.common.data.item.aggregationrules.RemoveAttributeAggregationRuleParams',
        attributeName: 'MERGED_TO',
        attributeValues: ['9000793296', '9000793298', '9000793299']
      },
      logicType: 'MODIFY',
      ruleId: 7916,
      description: 'Added by Rules Generator Component, Etl Name: Dedup_AML_EN_US, Job Id: 1ffdd645-87ce-4910-ae73-a24a9eff8cb6'
    }, {
      identifier: '100',
      source: 'EtlRulesGenerator',
      tenant: 'EBAY',
      locale: 'EN',
      language: 'EN',
      ruleType: 'ADD_ATTRIBUTE',
      ruleParams: {
        class: 'com.ebay.catalogs.titans.petracker.common.data.item.aggregationrules.RemoveAttributeAggregationRuleParams',
        attributeName: 'MERGED_TO',
        attributeValues: ['9000793296', '9000793298', '9000793299']
      },
      logicType: 'MODIFY',
      ruleId: 7916,
      description: 'Added by Rules Generator Component, Etl Name: Dedup_AML_EN_US, Job Id: 1ffdd645-87ce-4910-ae73-a24a9eff8cb6'
    }, {
      identifier: '101',
      source: 'EtlRulesGenerator',
      tenant: 'EBAY',
      locale: 'EN',
      language: 'EN',
      ruleType: 'ADD_ATTRIBUTE',
      ruleParams: {
        class: 'com.ebay.catalogs.titans.petracker.common.data.item.aggregationrules.RemoveAttributeAggregationRuleParams',
        attributeName: 'MERGED_TO',
        attributeValues: ['9000793296', '9000793298', '9000793299']
      },
      logicType: 'MODIFY',
      ruleId: 7916,
      description: 'Added by Rules Generator Component, Etl Name: Dedup_AML_EN_US, Job Id: 1ffdd645-87ce-4910-ae73-a24a9eff8cb6'
    }, {
      identifier: 'd91aef83f6596c488295529e665c377f',
      source: 'EtlRulesGenerator',
      tenant: 'EBAY',
      locale: 'EN',
      language: 'EN',
      ruleType: 'ADD_ATTRIBUTE',
      ruleParams: {
        class: 'com.ebay.catalogs.titans.petracker.common.data.item.aggregationrules.RemoveAttributeAggregationRuleParams',
        attributeName: 'MERGED_TO',
        attributeValues: ['9000793296', '9000793298', '9000793299']
      },
      logicType: 'MODIFY',
      ruleId: 7916,
      description: 'Added by Rules Generator Component, Etl Name: Dedup_AML_EN_US, Job Id: 1ffdd645-87ce-4910-ae73-a24a9eff8cb6'
    }]
  }
};
exports.mockGetRulesData = mockGetRulesData;
var mockDeleteRules = {
  responses: [{
    status: 'SUCCESS',
    message: 'null',
    epid: '1',
    ruleId: '111'
  }, {
    status: 'Failed',
    message: 'null',
    epid: '12',
    ruleId: '1112'
  }]
};
exports.mockDeleteRules = mockDeleteRules;