"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockTableData = void 0;
var mockTableData = [{
  type: 'externalTask',
  activity: 'activity ended',
  users: [{
    id: 'userId',
    display: 'Adam'
  }, {
    id: 'userId2',
    display: ''
  }]
}, {
  type: 'curation',
  activity: 'activity1 ended',
  users: [{
    id: 'userId',
    display: 'BigBoss'
  }, {
    id: 'userId3',
    display: 'Mister Corona'
  }]
}, {
  type: 'valueApproval',
  activity: 'activity2 ended',
  users: [{
    id: 'userId',
    display: 'Admin2'
  }, {
    id: '5745aa02437fd1caebf2309b',
    display: 'Admin1'
  }]
}];
exports.mockTableData = mockTableData;