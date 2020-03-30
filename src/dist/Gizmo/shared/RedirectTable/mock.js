"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockGetRedirectFilteredRows = void 0;
var mockGetRedirectFilteredRows = {
  totalCount: {
    totalRows: 2,
    totalPages: 1
  },
  selectOptions: {
    users: [{
      name: 'Doron',
      value: '1234'
    }, {
      name: 'Ziv',
      value: '5555'
    }],
    status: [{
      name: 'partial',
      value: 'PARTIAL'
    }, {
      name: 'failed',
      value: 'FAILED'
    }]
  },
  redirectHeaderContracts: [{
    redirectHeaderId: '5d8768e437f7c516540b0db2',
    scope: 'red',
    creationDate: 1568888900038,
    userName: 'Doron Admin1',
    status: 'PARTIAL',
    total: 2,
    success: 1,
    failed: 1
  }, {
    redirectHeaderId: '5d821edb37f7c53444fef9a9',
    scope: 'test2222',
    creationDate: 1568808667057,
    userName: '',
    status: 'FAIL',
    total: 2,
    success: 0,
    failed: 2
  }, {
    redirectHeaderId: '5d8768e437f7c516540b0db1',
    scope: 'red',
    creationDate: 1568888900038,
    userName: 'Doron Admin2',
    status: 'PARTIAL',
    total: 2,
    success: 1,
    failed: 1
  }, {
    redirectHeaderId: '5d821edb37f7c53444fef9a2',
    scope: 'test2222',
    creationDate: 1568808667057,
    userName: '',
    status: 'FAIL',
    total: 2,
    success: 0,
    failed: 2
  }, {
    redirectHeaderId: '5d8768e437f7c516540b0dbb',
    scope: 'red',
    creationDate: 1568888900038,
    userName: 'Doron Admin3',
    status: 'PARTIAL',
    total: 2,
    success: 1,
    failed: 1
  }]
};
exports.mockGetRedirectFilteredRows = mockGetRedirectFilteredRows;