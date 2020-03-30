"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowsByJob = void 0;
var getRowsByJob = {
  totalCount: {
    totalRows: 3,
    totalPages: 1
  },
  filteredRows: [{
    rowId: '5e1737b9b06964451d9c43cd',
    survivorEpid: '11000700544',
    survivorTitle: 'Apple iphone 7 Black SONY',
    victimEpid: '17000701346',
    victimTitle: 'Apple iphone 7 Black SONY',
    decision: 'DUPLICATES',
    assignee: 'Tal Admin'
  }, {
    rowId: '5e1737b9b06964451d9c43ce',
    survivorEpid: '170087765',
    survivorTitle: 'LG G2 D801 - 16GB - Black (Wind Mobile) Smartphone',
    victimEpid: '162321749',
    victimTitle: 'Apple iPhone SE - 128GB - Silver (Fido) (CA)',
    decision: 'DUPLICATES',
    assignee: 'Tal Admin'
  }, {
    rowId: '5e1737b9b06964451d9c43cc',
    survivorEpid: '1703474934',
    survivorTitle: '#',
    victimEpid: '228382037',
    victimTitle: 'Apple iPhone 7 Plus - 256GB - Black (Rogers Wireless) A1784 (GSM) (CA)',
    decision: 'DUPLICATES',
    assignee: 'Tal Admin'
  }],
  selectOptions: {
    productDuplicateActions: [{
      name: 'DUPLICATES',
      value: 'DUPLICATES'
    }, {
      name: 'NON_DUPLICATES',
      value: 'NON_DUPLICATES'
    }, {
      name: 'SKIP',
      value: 'SKIP'
    }],
    users: [{
      name: 'Tal Admin',
      value: '5d4c0b5f3dbda31c6cf0fc8a'
    }]
  }
};
exports.getRowsByJob = getRowsByJob;