"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.treeData = void 0;
var treeData = {
  siteToCategoryNodeContracts: [{
    nodeName: 'US',
    nodeId: '0',
    doneProducts: '3',
    totalProducts: '6',
    children: [{
      nodeName: 'Cell Phones & Accessories',
      nodeId: '15032',
      doneProducts: '4',
      totalProducts: '6',
      children: [{
        nodeName: 'Cell Phones & Smartphones',
        nodeId: '9355',
        doneProducts: '0',
        totalProducts: '6',
        children: []
      }, {
        nodeName: 'Cell Phones',
        nodeId: '1234',
        doneProducts: '0',
        totalProducts: '6',
        children: []
      }]
    }, {
      nodeName: 'Pottery & Glass',
      nodeId: '870',
      doneProducts: '0',
      totalProducts: '1',
      children: [{
        nodeName: 'Glass',
        nodeId: '50693',
        doneProducts: '0',
        totalProducts: '1',
        children: []
      }]
    }]
  }, {
    nodeName: 'DE',
    nodeId: '77',
    doneProducts: '0',
    totalProducts: '1',
    children: [{
      nodeName: 'Bücher',
      nodeId: 267,
      doneProducts: 1,
      totalProducts: 1,
      children: [{
        nodeName: 'Kinder- & Jugendliteratur',
        nodeId: 182882,
        doneProducts: 0,
        totalProducts: 1,
        children: [{
          nodeName: 'Romane & Erzählungen',
          nodeId: 171219,
          doneProducts: 0,
          totalProducts: 1,
          children: []
        }]
      }]
    }]
  }]
};
exports.treeData = treeData;