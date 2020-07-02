"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageContextProvider = exports.ETPageContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _socketio = _interopRequireDefault(require("../../../socketio"));

var _utils = require("../../../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  aspectList: [],
  lastSavedAspects: [],
  totalUsAspects: 0,
  candidateList: null,
  selectedLocal: 'US',
  isLocked: false,
  relevantSites: [],
  assignedSites: []
};

var ETPageContext = _react.default.createContext(initialState);

exports.ETPageContext = ETPageContext;

var aspectListReducer = function aspectListReducer(state, action) {
  var temp;

  switch (action.type) {
    case 'update':
      return action.payload;

    case 'update-existing-aspect':
      var loggedInUser = (0, _utils.getLoggedInUser)();

      _socketio.default.emit('transmit', {
        type: 'et-update',
        payload: {
          user: loggedInUser,
          ETData: _objectSpread(_objectSpread({}, action.payload), {}, {
            isLocked: false
          })
        }
      });

      return action.payload;

    case 'update-local':
      temp = (0, _cloneDeep.default)(state);
      temp.selectedLocal = action.payload.currentLocal;
      return temp;

    case 'update-candidate-list':
      temp = (0, _cloneDeep.default)(state);
      temp.candidateList = action.payload.candidateList;
      return temp;

    default:
      throw new Error();
  }
};

var PageContextProvider = function PageContextProvider(props) {
  var _useReducer = (0, _react.useReducer)(aspectListReducer, initialState),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      contextState = _useReducer2[0],
      updateContext = _useReducer2[1];

  return /*#__PURE__*/_react.default.createElement(ETPageContext.Provider, {
    value: {
      contextState: contextState,
      updateContext: updateContext
    }
  }, props.children);
};

exports.PageContextProvider = PageContextProvider;