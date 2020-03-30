"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockReasons = exports.mockDecision = exports.mockDecisions = void 0;
var mockDecisions = [{
  survivorEpid: '123',
  victimEpid: '456',
  selectedOption: null,
  decisionInfo: {
    reason: {
      value: 'Only Identical UPI(s)',
      mandatory: false
    },
    comment: {
      value: 'Some comment...',
      mandatory: true
    },
    urls: [{
      name: 'URL 1',
      url: 'http://mock-url1.com'
    }, {
      name: 'URL 2',
      url: 'http://mock-url1.com'
    }],
    additionalInfo: [{
      name: 'Info Name 1',
      value: 'Info Value 1',
      mandatory: true
    }, {
      name: 'Info Name 2',
      value: 'Info value 2',
      mandatory: false
    }],
    sendToSupervisor: false
  }
}, {
  survivorEpid: '1234',
  victimEpid: '4567',
  selectedOption: null,
  decisionInfo: {
    reason: {
      value: 'testing...',
      mandatory: true
    },
    comment: {
      value: '',
      mandatory: true
    },
    urls: [{
      label: 'url1',
      url: ''
    }, {
      label: 'url2',
      url: ''
    }],
    additionalInfo: [{
      name: 'info1',
      value: '',
      mandatory: true
    }, {
      name: 'info2',
      value: '',
      mandatory: false
    }],
    sendToSupervisor: false
  }
}, {
  survivorEpid: '123456',
  victimEpid: '7777',
  selectedOption: null,
  decisionInfo: {
    reason: {
      value: '',
      mandatory: false
    },
    comment: {
      value: '',
      mandatory: true
    },
    urls: [{
      label: 'url1',
      url: ''
    }, {
      label: 'url2',
      url: ''
    }],
    additionalInfo: [{
      name: 'info1',
      value: '',
      mandatory: true
    }, {
      name: 'info2',
      value: '',
      mandatory: false
    }],
    sendToSupervisor: false
  }
}];
exports.mockDecisions = mockDecisions;
var mockReasons = {
  option1: ['Only Identical UPI(s)', 'Only Identical Title', 'Only Identical DATA'],
  option2: ['Cant Validate - prod1', 'Cant Validate - prod2', 'Cant Validate - both products', 'Insufficient - prod1', 'Insufficient - prod2', 'Merged - prod1', 'Merged - prod2', 'Merged - Both products', 'Deleted - prod1', 'Deleted - prod2', 'Deleted - Both products'],
  option3: ['Different Attribute', 'Different Products', 'Different Granularity', 'Conflict Data - prod1', 'Conflict Data - prod2', 'Conflict Data - both products', 'Mixed Results - prod1', 'Mixed Results - prod2', 'Mixed Results - Both Products', 'Invalid - prod1', 'Invalid - prod2', 'Invalid - Both products']
};
exports.mockReasons = mockReasons;
var mockDecision = {
  survivorEpid: '123',
  victimEpid: '456',
  selectedOption: 'op-1',
  decisionInfo: {
    reason: {
      value: 'bla bla 2',
      mandatory: true
    },
    comment: {
      value: 'comment information2',
      mandatory: true
    },
    urls: [{
      name: 'url1',
      url: 'http://mock-url1.com'
    }, {
      name: 'url2',
      url: 'http://mock-url2.com'
    }],
    additionalInfo: [{
      name: 'url1',
      value: 'http://ebay.com',
      mandatory: true
    }, {
      name: 'url1',
      value: 'http://ebay.com',
      mandatory: false
    }],
    sendToSupervisor: false
  }
};
exports.mockDecision = mockDecision;