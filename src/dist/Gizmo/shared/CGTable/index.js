"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CGTable;

require("antd/es/table/style/css");

var _table = _interopRequireDefault(require("antd/es/table"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OrderBy = _interopRequireDefault(require("../CTable/OrderBy"));

var _OrderType = _interopRequireDefault(require("../CTable/OrderType"));

require("./style.less");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CGTable(_ref) {
  var columnConfig = _ref.columnConfig,
      tableData = _ref.tableData,
      size = _ref.size,
      loadingData = _ref.loadingData,
      onSortInfoChange = _ref.onSortInfoChange,
      initialOrderBy = _ref.initialOrderBy,
      initialOrderType = _ref.initialOrderType,
      reloadTable = _ref.reloadTable,
      defaultPageSize = _ref.defaultPageSize,
      rowSelection = _ref.rowSelection,
      expandedRowRender = _ref.expandedRowRender;

  var _useState = (0, _react.useState)(1),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = (0, _react.useState)({
    columnKey: initialOrderBy,
    order: initialOrderType
  }),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      sortInfoData = _useState4[0],
      setSortInfoData = _useState4[1];

  var tableLoading = {
    spinning: loadingData,
    size: 'large',
    indicator: _react.default.createElement(_icon.default, {
      type: "loading"
    })
  };
  (0, _react.useEffect)(function () {
    onSortInfoChange(sortInfoData);
  }, [sortInfoData, onSortInfoChange]);
  return _react.default.createElement("div", {
    className: "cgtable-wrapper"
  }, _react.default.createElement("div", {
    className: "filter-wrapper"
  }, _react.default.createElement("label", null, "Order By:"), _react.default.createElement(_OrderBy.default, {
    options: columnConfig,
    orderByChange: onChangeOrderBy,
    defaultValue: initialOrderBy
  }), _react.default.createElement("label", null, "Order Type:"), _react.default.createElement(_OrderType.default, {
    orderTypeChange: onChangeOrderType,
    defaultValue: initialOrderType,
    width: 100,
    ascendValue: 'ascend',
    descendValue: 'descend'
  }), _react.default.createElement("div", {
    className: "reload-table-button"
  }, _react.default.createElement(_button.default, {
    icon: "reload",
    onClick: reloadTable
  }))), _react.default.createElement(_table.default, {
    columns: columnConfig,
    expandedRowRender: expandedRowRender,
    dataSource: tableData.map(function (item, index) {
      return _objectSpread({}, item, {}, {
        id: index
      });
    }),
    bordered: true,
    loading: tableLoading,
    size: size,
    rowKey: 'id',
    pagination: {
      defaultPageSize: defaultPageSize,
      total: tableData.length,
      current: currentPage,
      onChange: onPageChange
    },
    onChange: handleChange,
    rowSelection: rowSelection
  }));

  function onPageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function onChangeOrderType(value) {
    setSortInfoData({
      columnKey: sortInfoData.columnKey,
      order: value
    });
    onSortInfoChange(sortInfoData);
  }

  function onChangeOrderBy(value) {
    setSortInfoData({
      columnKey: value,
      order: sortInfoData.order
    });
    onSortInfoChange(sortInfoData);
  }

  function handleChange(pagination, filters, sorter) {
    onSortInfoChange(sorter);
  }
}

CGTable.propTypes = {
  /** columnConfig - column configuration for table */
  columnConfig: _propTypes.default.array.isRequired,

  /** tableData - hold the data object for rendering the table */
  tableData: _propTypes.default.array.isRequired,

  /** size - antD prop which hold the size of the table (can be Large or Small ) */
  size: _propTypes.default.string.isRequired,

  /** loadingData - boolean field which state when loading data is started and finished */
  loadingData: _propTypes.default.bool.isRequired,

  /** onSortInfoChange - update external data for sorting info */
  onSortInfoChange: _propTypes.default.func.isRequired,

  /** initialOrderBy - initializion value for OrderBy component */
  initialOrderBy: _propTypes.default.string.isRequired,

  /** initialOrderType - initializion value for OrderType component */
  initialOrderType: _propTypes.default.string.isRequired,

  /** reloadTable - callback function for reloading the table */
  reloadTable: _propTypes.default.func.isRequired,

  /** defaultPageSize - the number of rows for the table */
  defaultPageSize: _propTypes.default.number,

  /** rowSelection - used to indeicate which rows where selected in the table */
  rowSelection: _propTypes.default.object
};
CGTable.defaultProps = {
  defaultPageSize: 15,
  rowSelection: false
};