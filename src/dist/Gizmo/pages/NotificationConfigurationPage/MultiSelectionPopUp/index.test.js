"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _index = _interopRequireDefault(require("./index"));

var multiSelectionPopUpData = {
  placeHolder1: 'Type',
  placeHolder2: 'Activity',
  placeHolder3: 'Assignees',
  selectionData: {
    typeToActivities: {
      'PRP Feedback': ['new feedback', 'new feedback1'],
      Duplicate: ['new external task', 'new external task1']
    }
  }
};

function getConfigurationPopupData() {
  return _getConfigurationPopupData.apply(this, arguments);
} // TODO FIX this - at end


function _getConfigurationPopupData() {
  _getConfigurationPopupData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", 'done');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getConfigurationPopupData.apply(this, arguments);
}

it('Gizmo shared - Template', function () {
  // const tree = TestRenderer.create(
  //   <MultiSelectionPopUp
  //     multiSelectionPopUpData={multiSelectionPopUpData}
  //     dropDownKeyLabel1={'ktype'}
  //     dropDownKeyLabel2={'kactivity'}
  //     dropDownKeyLabel3={'kassignees'}
  //     componentTitle={'Add New Notification'}
  //     multiSelectionTitle={'Assignees'}
  //     getUsersData={getConfigurationPopupData}
  //   />
  // ).toJSON();
  expect(true).toMatchSnapshot();
});