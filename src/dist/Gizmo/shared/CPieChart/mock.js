"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CpiechartDrawData = void 0;
var CpiechartDrawData = {
  label: 'Task Statistics',
  drawingData: {
    innerCircle: {
      data: 6,
      label: 'Total'
    },
    outerCircle: [{
      label: 'In Progress',
      value: 2
    }, {
      label: 'Not Done',
      value: 2
    }, {
      label: 'Done',
      value: 2
    }]
  },
  drawingConfig: {
    color: {
      'In Progress': '#ffe700',
      Done: '#2cd9c5',
      'Not Done': '#edf0f4'
    }
  }
};
exports.CpiechartDrawData = CpiechartDrawData;