"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Duplicates;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/notification/style/css");

var _notification2 = _interopRequireDefault(require("antd/es/notification"));

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/switch/style/css");

var _switch = _interopRequireDefault(require("antd/es/switch"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/divider/style/css");

var _divider = _interopRequireDefault(require("antd/es/divider"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DecisionMaker = _interopRequireDefault(require("../../../shared/DecisionMaker"));

var _DecisionPopOver = _interopRequireDefault(require("../../../shared/DecisionPopOver"));

var _GenericModal = _interopRequireDefault(require("../../../shared/GenericModal"));

var _utils = require("../../../utils");

var _EscalatedField = _interopRequireDefault(require("../../../shared/EscalatedField"));

var _shared = require("../../../shared");

require("./style.less");

require("../../../global-styles.less");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Duplicates(_ref) {
  var survivorData = _ref.survivorData,
      victimArray = _ref.victimArray,
      escalatedInfo = _ref.escalatedInfo,
      rowsDone = _ref.rowsDone,
      decisions = _ref.decisions,
      reasons = _ref.reasons,
      rowId = _ref.rowId,
      saveTask = _ref.saveTask,
      changeCategory = _ref.changeCategory,
      jobId = _ref.jobId,
      jobTypeConfiguration = _ref.jobTypeConfiguration,
      workMode = _ref.workMode,
      loggedInUser = _ref.loggedInUser;
  var showSendToSupervisor = workMode !== 'edit' && !loggedInUser.isUserSupervisor;
  var isSurvivorProvided = (0, _get.default)(jobTypeConfiguration, "configurationResponse.survivorProvided", true);
  var isEnabledForCuration = (0, _get.default)(jobTypeConfiguration, "configurationResponse.enableProductCuration", true);

  var _useState = (0, _react.useState)(victimArray),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      vArray = _useState2[0],
      setVarray = _useState2[1];

  var _useState3 = (0, _react.useState)(survivorData),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      sData = _useState4[0],
      setSdata = _useState4[1];

  var _useState5 = (0, _react.useState)(decisions),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      decisionsData = _useState6[0],
      setDecisionsData = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      isSupervisorNewAspectModalOpen = _useState8[0],
      setSupervisorNewAspectModalOpenVisibility = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      isVictimNewAspectModalOpen = _useState10[0],
      setVictimNewAspectModalOpenVisibility = _useState10[1];

  var page = 0; //remove this when the cluster page navigation returns, and use this --> const [page, setPage] = useState(0);

  /** Survivor data */

  var survivor_P_Def = sData.product.productDefinition;

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      showSuggestions = _useState12[0],
      setShowSuggestions = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      showOriginalValues = _useState14[0],
      setShowOriginalValues = _useState14[1];

  var s_newCategoyBreadcrumb = survivor_P_Def.categories.newValues[0];
  var s_leafCategory = (0, _get.default)(survivor_P_Def, 'categories.newValues[0].categoryBreadcrumb', '> ').substring(s_newCategoyBreadcrumb.categoryBreadcrumb.lastIndexOf('>') + 1);
  var s_aspects = sData.product.groupToAspectsMap;
  var s_newImages = survivor_P_Def.images.newImages;
  var s_entityId = survivor_P_Def.entityId;
  var s_entityUrl = survivor_P_Def.prpUrl;
  var s_aspectKeys = Object.keys(s_aspects);
  s_aspectKeys = [s_aspectKeys.pop()].concat((0, _toConsumableArray2.default)(s_aspectKeys)); // needed to make title aspect first

  var s_isDeleted = sData.product.productStatus.status === 'DELETE'; // delete reason

  var _useState15 = (0, _react.useState)(false),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      shouldBeVisibleSurvivor = _useState16[0],
      updateShouldBeVisibleSurvivor = _useState16[1]; // hash map of aspect values


  var s_hash = createReadHash(s_aspects);
  var s_title = getAspectValue('Title', s_hash);
  /** Victim data */

  var victim_P_Def = vArray[page].product.productDefinition;
  var v_newImages = victim_P_Def.images.newImages;
  var v_newCategoyBreadcrumb = victim_P_Def.categories.newValues[0];
  var v_leafCategory = (0, _get.default)(victim_P_Def, 'categories.newValues[0].categoryBreadcrumb', '> ').substring(v_newCategoyBreadcrumb.categoryBreadcrumb.lastIndexOf('>') + 1);
  var v_isDeleted = vArray[page].product.productStatus.status === 'DELETE'; //delete reason

  var _useState17 = (0, _react.useState)(false),
      _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
      shouldBeVisibleVictim = _useState18[0],
      updateShouldBeVisibleVictim = _useState18[1];

  var v_aspects = vArray[page].product.groupToAspectsMap; // hash map of aspect values

  var v_hash = createReadHash(v_aspects);
  var v_title = getAspectValue('Title', v_hash);
  var v_entityId = victim_P_Def.entityId;
  var v_entityUrl = victim_P_Def.prpUrl;
  var v_aspectKeys = Object.keys(v_aspects);
  v_aspectKeys = [v_aspectKeys.pop()].concat((0, _toConsumableArray2.default)(v_aspectKeys)); // needed to make title be first aspect

  var isTitleDifferent = checkIfTitleIsDifferent();
  var isCategoryPathDifferent = checkCategoryPath();

  var _useState19 = (0, _react.useState)({}),
      _useState20 = (0, _slicedToArray2.default)(_useState19, 2),
      hightHash = _useState20[0],
      updateHightHash = _useState20[1]; // needed to communicate the required hight between correlated aspects


  var aspectsHightHash = Object.keys(hightHash).length > 0 ? hightHash : createHightHash(s_hash, v_hash); // needed to save hight of aspects between renders, use of useState will create a bug

  return _react.default.createElement("div", {
    className: "duplicates-wrapper"
  }, _react.default.createElement(_shared.CBreadcrumb, {
    path: ['Duplications']
  }), _react.default.createElement("section", {
    className: "title-section"
  }, _react.default.createElement("div", null, rowsDone && _react.default.createElement(_shared.TotalRowsDone, {
    today: rowsDone.totalDoneToday,
    total: rowsDone.totalDone
  })), _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "edit-mode"
  }, workMode === 'edit' ? 'Work Edit Mode' : ''), escalatedInfo && _react.default.createElement(_EscalatedField.default, {
    escalator: escalatedInfo.escalatedByUserName
  }))), _react.default.createElement("div", {
    className: "side-by-side-wrapper"
  }, _react.default.createElement("div", {
    className: "product-wrapper"
  }, s_isDeleted && _react.default.createElement("div", {
    className: "deleted-product"
  }, "Deleted"), _react.default.createElement("div", {
    className: "item-surviving-title-wrapper"
  }, _react.default.createElement("div", {
    className: "item-surviving-title"
  }, _react.default.createElement("strong", null, "Product"), isSurvivorProvided && _react.default.createElement("span", null, " (Survivor)"))), _react.default.createElement(_shared.RegularField, {
    label: 'Title',
    value: s_title,
    isChanged: false,
    isDifferentValue: isTitleDifferent,
    updateValue: function updateValue() {}
  }), _react.default.createElement(_shared.ImageList, {
    imageList: s_newImages.filter(function (image) {
      return !deletedImage(image);
    }),
    isChanged: false,
    isDifferentValue: false,
    suggestedImagesData: s_newImages.filter(function (image) {
      return deletedImage(image);
    }),
    productData: {
      category: s_newCategoyBreadcrumb.categoryBreadcrumb,
      title: s_title,
      brand: getAspectValue('Brand', s_hash),
      color: getAspectValue('Color', s_hash)
    },
    handleSelectedImages: handleSurvivorSelectedImages,
    isEditable: isEnabledForCuration
  }), _react.default.createElement(_shared.LinkField, {
    label: "EPID",
    value: s_entityId,
    url: s_entityUrl,
    isDifferentValue: false
  }), _react.default.createElement(_shared.RegularField, {
    label: 'Site',
    value: (0, _utils.getSiteById)(victim_P_Def.siteId).name,
    isChanged: false,
    isDifferentValue: survivor_P_Def.siteId !== victim_P_Def.siteId,
    updateValue: function updateValue() {}
  }), _react.default.createElement(_shared.EditField, {
    label: "Category",
    value: s_leafCategory,
    tooltipValue: s_newCategoyBreadcrumb.categoryBreadcrumb,
    updateValue: updateSupervisorCategoryPath,
    isChanged: false,
    isDifferentValue: isCategoryPathDifferent,
    modalTitle: 'Edit category path',
    isEditable: isEnabledForCuration,
    modalContent: _react.default.createElement(_shared.EditCategoryPath, {
      currentCategory: s_newCategoyBreadcrumb.categoryBreadcrumb,
      siteId: survivor_P_Def.siteId
    })
  }), isEnabledForCuration && _react.default.createElement(_divider.default, null), isEnabledForCuration && _react.default.createElement("div", {
    className: "add-aspect-button-wrapper"
  }, _react.default.createElement(_button.default, {
    shape: "circle",
    size: "large",
    icon: "plus",
    onClick: function onClick(e) {
      return setSupervisorNewAspectModalOpenVisibility(true);
    }
  })), isEnabledForCuration && _react.default.createElement("div", null, s_aspectKeys.map(function (key) {
    return s_aspects[key].map(function (aspectData, index) {
      return _react.default.createElement(_shared.Aspect, {
        key: "survivor-aspect-".concat(index),
        aspect: aspectData,
        placeholder: '',
        isMultiSelect: true,
        showSuggestions: showSuggestions,
        showOriginalValues: showOriginalValues,
        onAspectChange: onAspectChangeSurvivor,
        aspectIdentifier: key,
        differentValues: checkDiffValues(aspectData, key),
        clusterPage: page,
        handleCopy: handleCopySurvivor,
        hightHash: hightHash,
        updateAspectHights: updateAspectHights
      });
    });
  })), !isEnabledForCuration && _react.default.createElement("div", null, s_aspectKeys.map(function (key) {
    return s_aspects[key].map(function (aspectData) {
      return _react.default.createElement("div", {
        className: "attributes-read-only-section"
      }, _react.default.createElement(_shared.FieldWithExtraInformation, {
        label: aspectData.aspectName,
        value: aspectData.currentValues.map(function (v) {
          return v.value;
        }).join(', '),
        isChanged: false,
        isDifferentValue: checkDiffValues(aspectData, key),
        updateValue: function updateValue() {},
        metadata: aspectData.aspectInformation
      }));
    });
  })), _react.default.createElement("section", {
    className: "actions-section"
  }, isEnabledForCuration && !s_isDeleted && _react.default.createElement("div", {
    className: "toggles-wrapper"
  }, _react.default.createElement("div", {
    className: "toggle-btn"
  }, _react.default.createElement(_switch.default, {
    checked: showSuggestions,
    onChange: handleShowSuggestions
  }), _react.default.createElement("label", null, "Show Suggestions")), _react.default.createElement("div", {
    className: "toggle-btn"
  }, _react.default.createElement(_switch.default, {
    checked: showOriginalValues,
    onChange: handleShowOriginals
  }), _react.default.createElement("label", null, "Show Original values"))), isEnabledForCuration && _react.default.createElement(_popover.default, {
    content: _react.default.createElement(_DecisionPopOver.default, {
      comment: sData.product.productStatus.comment,
      handleClose: handleCloseDeleteSurvivor,
      handleSaveClick: handleSaveDeleteSurvivor
    }),
    trigger: "click",
    visible: shouldBeVisibleSurvivor
  }, _react.default.createElement(_button.default, {
    className: "delete-left-side",
    onClick: handleDeleteSupervisor
  }, !s_isDeleted ? "Delete" : "Undo Delete")))), _react.default.createElement("div", {
    className: "product-wrapper"
  }, v_isDeleted && _react.default.createElement("div", {
    className: "deleted-product"
  }, "Deleted"), _react.default.createElement("div", {
    className: "item-surviving-title-wrapper"
  }, _react.default.createElement("div", {
    className: "item-surviving-title"
  }, _react.default.createElement("strong", null, "Product"), isSurvivorProvided && _react.default.createElement("span", null, " (Victim)"))), _react.default.createElement(_shared.RegularField, {
    label: 'Title',
    value: v_title,
    isChanged: false,
    isDifferentValue: isTitleDifferent,
    updateValue: handleVTitleChange
  }), _react.default.createElement(_shared.ImageList, {
    imageList: v_newImages.filter(function (image) {
      return !deletedImage(image);
    }),
    isChanged: false,
    isDifferentValue: false,
    suggestedImagesData: v_newImages.filter(function (image) {
      return deletedImage(image);
    }),
    productData: {
      category: v_newCategoyBreadcrumb.categoryBreadcrumb,
      title: s_title,
      brand: getAspectValue('Brand', v_hash),
      color: getAspectValue('Color', v_hash)
    },
    handleSelectedImages: handleVictimSelectedImages,
    isEditable: isEnabledForCuration
  }), _react.default.createElement(_shared.LinkField, {
    label: "EPID",
    value: v_entityId,
    url: v_entityUrl,
    isDifferentValue: false
  }), _react.default.createElement(_shared.RegularField, {
    label: 'Site',
    value: (0, _utils.getSiteById)(survivor_P_Def.siteId).name,
    isChanged: false,
    isDifferentValue: survivor_P_Def.siteId !== victim_P_Def.siteId,
    updateValue: function updateValue() {}
  }), _react.default.createElement(_shared.EditField, {
    label: "Category",
    value: v_leafCategory,
    tooltipValue: v_newCategoyBreadcrumb.categoryBreadcrumb,
    updateValue: updateVictimCategoryPath,
    isChanged: false,
    isDifferentValue: isCategoryPathDifferent,
    modalTitle: 'Edit category path',
    isEditable: isEnabledForCuration,
    modalContent: _react.default.createElement(_shared.EditCategoryPath, {
      currentCategory: s_newCategoyBreadcrumb.categoryBreadcrumb,
      siteId: victim_P_Def.siteId
    })
  }), isEnabledForCuration && _react.default.createElement(_divider.default, null), isEnabledForCuration && _react.default.createElement("div", {
    className: "add-aspect-button-wrapper"
  }, _react.default.createElement(_button.default, {
    shape: "circle",
    size: "large",
    icon: "plus",
    onClick: function onClick(e) {
      return setVictimNewAspectModalOpenVisibility(true);
    }
  })), isEnabledForCuration && _react.default.createElement("div", null, v_aspectKeys.map(function (key) {
    return v_aspects[key].map(function (aspectData, index) {
      return _react.default.createElement(_shared.Aspect, {
        key: "victim-aspect-".concat(index),
        aspect: aspectData,
        placeholder: '',
        isMultiSelect: true,
        showSuggestions: showSuggestions,
        showOriginalValues: showOriginalValues,
        onAspectChange: onAspectChangeVictim,
        aspectIdentifier: key,
        differentValues: checkDiffValues(aspectData, key),
        clusterPage: page,
        handleCopy: handleCopyVictim,
        hightHash: hightHash,
        updateAspectHights: updateAspectHights
      });
    });
  })), !isEnabledForCuration && _react.default.createElement("div", null, v_aspectKeys.map(function (key) {
    return v_aspects[key].map(function (aspectData) {
      return _react.default.createElement("div", {
        className: "attributes-read-only-section"
      }, _react.default.createElement(_shared.FieldWithExtraInformation, {
        label: aspectData.aspectName,
        value: aspectData.currentValues.map(function (v) {
          return v.value;
        }).join(', '),
        isChanged: false,
        isDifferentValue: checkDiffValues(aspectData, key),
        updateValue: function updateValue() {},
        metadata: aspectData.aspectInformation
      }));
    });
  })), _react.default.createElement("section", {
    className: "actions-section"
  }, _react.default.createElement(_DecisionMaker.default, {
    option1Title: 'Duplicate',
    option2Title: 'Skip',
    option3Title: 'Not Duplicate',
    reasons: reasons,
    decision: decisionsData[page],
    survivorEpid: s_entityId,
    updateDecisions: updateDecisions,
    buttonsToDisable: s_isDeleted || v_isDeleted ? ['Duplicate', 'Skip'] : [],
    showSendToSupervisor: showSendToSupervisor
  }), isEnabledForCuration && _react.default.createElement(_popover.default, {
    content: _react.default.createElement(_DecisionPopOver.default, {
      comment: vArray[page].product.productStatus.comment,
      handleClose: handleCloseDeleteVictim,
      handleSaveClick: handleSaveDeleteVictim
    }),
    trigger: "click",
    visible: shouldBeVisibleVictim
  }, _react.default.createElement(_button.default, {
    onClick: handleDeleteVictim
  }, !v_isDeleted ? "Delete" : "Undo Delete"))))), _react.default.createElement("div", {
    className: "submit-wrapper"
  }, _react.default.createElement(_popover.default, {
    placement: "left",
    content: decisionsData[page].selectedOption === null ? 'Decision should be selected before submit' : 'Submit decision and curation'
  }, _react.default.createElement(_button.default, {
    type: "primary",
    disabled: decisionsData[page].selectedOption === null || vArray[page].prodDec.productDuplicateAction !== 'NON_DUPLICATES' && s_isDeleted || vArray[page].prodDec.productDuplicateAction !== 'NON_DUPLICATES' && v_isDeleted,
    onClick: handleSubmitDuplication
  }, "Submit"))), _react.default.createElement(_GenericModal.default, {
    modalVisibleState: isSupervisorNewAspectModalOpen,
    modalTitle: 'Add New Aspect',
    modalContent: _react.default.createElement(_shared.AddNewAspect, {
      isNewAspectModalOpen: isSupervisorNewAspectModalOpen,
      checkAspectIsUnique: checkAspectIsUnique_s
    }),
    width: 500,
    onCancel: function onCancel(e) {
      return setSupervisorNewAspectModalOpenVisibility(false);
    },
    onOk: addNewAspectToSurvivor,
    okText: 'Add Aspect',
    isOkDisabledInitialValue: true
  }), _react.default.createElement(_GenericModal.default, {
    modalVisibleState: isVictimNewAspectModalOpen,
    modalTitle: 'Add New Aspect',
    modalContent: _react.default.createElement(_shared.AddNewAspect, {
      isNewAspectModalOpen: isVictimNewAspectModalOpen,
      checkAspectIsUnique: checkAspectIsUnique_v
    }),
    width: 500,
    onCancel: function onCancel(e) {
      return setVictimNewAspectModalOpenVisibility(false);
    },
    onOk: addNewAspectToVictim,
    okText: 'Add Aspect',
    isOkDisabledInitialValue: true
  }));

  function openNotificationWithIcon(type, title, message) {
    _notification2.default[type]({
      message: title,
      description: message
    });
  }

  function handleSubmitDuplication() {
    saveTask({
      comparedEntityRowContract: {
        rowId: rowId,
        entities: [sData].concat((0, _toConsumableArray2.default)(vArray)),
        sendToSupervisor: decisionsData[page].decisionInfo.sendToSupervisor,
        additionalInformationContract: {
          additionalInformationDataList: decisionsData[page].decisionInfo.additionalInfo
        }
      }
    });
    window.scrollTo(0, 0);
  }

  function checkAspectIsUnique_s(newAspectName) {
    var aspectsArray = sData.product.groupToAspectsMap;
    var allAspectKeys = Object.keys(aspectsArray).map(function (aspectGroupKey) {
      return aspectsArray[aspectGroupKey].map(function (aspectInfo) {
        return aspectInfo.aspectName;
      });
    }).flat(1);
    return allAspectKeys.includes(newAspectName);
  }

  function checkAspectIsUnique_v(newAspectName) {
    var aspectsArray = vArray[page].product.groupToAspectsMap;
    var allAspectKeys = Object.keys(aspectsArray).map(function (aspectGroupKey) {
      return aspectsArray[aspectGroupKey].map(function (aspectInfo) {
        return aspectInfo.aspectName;
      });
    }).flat(1);
    return allAspectKeys.includes(newAspectName);
  }

  function addNewAspectToSurvivor(newAspectData) {
    var tempSupervisorData = Object.assign({}, sData);
    var aspectsArray = tempSupervisorData.product.groupToAspectsMap;

    if (aspectsArray['Additional aspects'] === undefined) {
      aspectsArray['Additional aspects'] = [];
    }

    aspectsArray['Additional aspects'].push({
      aspectName: newAspectData.aspectName,
      alignedWithSurvivor: true,
      currentValues: [],
      propertyDecisionContract: {
        suggestedValues: newAspectData.aspectValues.map(function (aspectValue) {
          return {
            value: aspectValue,
            information: {
              umsAlignedValue: false,
              crawlingValue: false
            }
          };
        }),
        changed: true,
        status: 'ADDED',
        deleteReason: null
      },
      aspectInformation: {
        mandatoryOnProduct: false,
        multiValue: true,
        umsAlignedAspect: false,
        aspectTypes: [],
        umsValues: []
      },
      crawlingData: {
        values: [],
        urls: []
      }
    });
    setSdata(tempSupervisorData);
    setSupervisorNewAspectModalOpenVisibility(false);
  }

  function addNewAspectToVictim(newAspectData) {
    var tempVArray = Object.assign({}, vArray);
    var aspectsArray = tempVArray[page].product.groupToAspectsMap;

    if (aspectsArray['Additional aspects'] === undefined) {
      aspectsArray['Additional aspects'] = [];
    }

    aspectsArray['Additional aspects'].push({
      aspectName: newAspectData.aspectName,
      alignedWithSurvivor: true,
      currentValues: [],
      propertyDecisionContract: {
        suggestedValues: newAspectData.aspectValues.map(function (aspectValue) {
          return {
            value: aspectValue,
            information: {
              umsAlignedValue: false,
              crawlingValue: false
            }
          };
        }),
        changed: true,
        status: 'ADDED',
        deleteReason: null
      },
      aspectInformation: {
        mandatoryOnProduct: false,
        multiValue: true,
        umsAlignedAspect: false,
        aspectTypes: [],
        umsValues: []
      },
      crawlingData: {
        values: [],
        urls: []
      }
    });
    setVarray(tempVArray);
    setVictimNewAspectModalOpenVisibility(false);
  }

  function checkIfTitleIsDifferent() {
    var v_title = vArray[page].product.groupToAspectsMap.Title[0].currentValues.map(function (item) {
      return item.value;
    }).join(', ');
    var s_title = s_aspects.Title[0].currentValues.map(function (item) {
      return item.value;
    }).join(', ');
    return v_title !== s_title;
  }

  function checkCategoryPath() {
    var v_categoryBreadcrumb = vArray[page].product.productDefinition.categories.currentValues[0].categoryBreadcrumb;
    var s_categoryBreadcrumb = sData.product.productDefinition.categories.newValues[0].categoryBreadcrumb;
    return v_categoryBreadcrumb !== s_categoryBreadcrumb;
  }

  function updateVictimCategoryPath(updatedPath) {
    var tempArray = Object.assign([], vArray);
    var data = JSON.parse(updatedPath.key);
    tempArray[page].product.productDefinition.categories.categoryId = data.categoryId.toString();
    tempArray[page].product.productDefinition.categories.newValues[0].categoryBreadcrumb = data.categoryBreadcrumb;
    tempArray[page].product.productDefinition.categories.newValues[0].categoryId = Number(data.categoryId);
    changeCategory({
      comparedEntityRowContract: {
        rowId: rowId,
        entities: [sData].concat((0, _toConsumableArray2.default)(vArray))
      },
      changedEpid: tempArray[page].product.productDefinition.entityId,
      jobId: Number(jobId)
    });
    window.scrollTo(0, 0);
  }

  function updateSupervisorCategoryPath(updatedPath) {
    var tempSupervisor = Object.assign({}, sData);
    var data = JSON.parse(updatedPath.key);
    tempSupervisor.product.productDefinition.categories.categoryId = data.categoryId.toString();
    tempSupervisor.product.productDefinition.categories.newValues[0].categoryBreadcrumb = data.categoryBreadcrumb;
    tempSupervisor.product.productDefinition.categories.newValues[0].categoryId = Number(data.categoryId);
    changeCategory({
      comparedEntityRowContract: {
        rowId: rowId,
        entities: [sData].concat((0, _toConsumableArray2.default)(vArray))
      },
      changedEpid: tempSupervisor.product.productDefinition.entityId,
      jobId: Number(jobId)
    });
    window.scrollTo(0, 0);
  }

  function handleSurvivorSelectedImages(updatedImageList) {
    var tempSupervisor = Object.assign({}, sData);
    tempSupervisor.product.productDefinition.images.newImages = updatedImageList;
    tempSupervisor.product.productDefinition.images.changed = true;
    setSdata(tempSupervisor);
  }

  function handleVictimSelectedImages(updatedImageList) {
    var tempArray = Object.assign([], vArray);
    tempArray[page].product.productDefinition.images.newImages = updatedImageList;
    tempArray[page].product.productDefinition.images.changed = true;
    setVarray(tempArray);
  }

  function checkDiffValues(aspectData, aspectIdentifier) {
    // victim original aspect
    var vAspect = vArray[page].product.groupToAspectsMap[aspectIdentifier].find(function (item) {
      return item.aspectName === aspectData.aspectName;
    });
    if (!vAspect) return false; // victim original values

    var vAspectValues = vAspect.currentValues.map(function (item) {
      return item.value;
    }); // survivor original aspect

    var sAspect = survivorData.product.groupToAspectsMap[aspectIdentifier].find(function (item) {
      return item.aspectName === aspectData.aspectName;
    });
    if (!sAspect) return false; // survivor original valus

    var sAspectValues = sAspect.currentValues.map(function (item) {
      return item.value;
    });
    return !compareArray(sAspectValues, vAspectValues);
  } // check if there is difference between two arrays
  // return true if they are similar or if one is empty and the orher is not


  function compareArray(arr1, arr2) {
    var flag = true;

    if (!arr1 || !arr2) {
      flag = false;
    }

    if (arr1.length !== arr2.length) {
      if (arr1.length === 0 && arr2.length > 0 || arr2.length === 0 && arr1.length > 0) {
        flag = true;
      } else {
        flag = false;
      }
    }

    if (arr1.length > 0 && arr2.length > 0) {
      arr1.forEach(function (item) {
        if (!arr2.includes(item)) {
          flag = false;
        }
      });
    }

    return flag;
  }

  function handleDeleteVictim() {
    var tempArray = Object.assign([], vArray);
    tempArray[page].product.productStatus.comment = '';
    tempArray[page].product.productStatus.status = v_isDeleted ? null : 'DELETE';
    setVarray(tempArray);
    updateShouldBeVisibleVictim(!v_isDeleted);
  }

  function handleDeleteSupervisor() {
    var tempSurvivorData = Object.assign({}, sData);
    tempSurvivorData.product.productStatus.comment = '';
    tempSurvivorData.product.productStatus.status = s_isDeleted ? null : 'DELETE';
    setSdata(tempSurvivorData);
    updateShouldBeVisibleSurvivor(!s_isDeleted);
  }

  function handleSaveDeleteSurvivor(updatedComment) {
    var tempSurvivorData = Object.assign({}, sData);
    tempSurvivorData.product.productStatus.comment = updatedComment;
    tempSurvivorData.product.productStatus.status = 'DELETE';
    setSdata(tempSurvivorData);
    updateShouldBeVisibleSurvivor(false);
  }

  function handleSaveDeleteVictim(updatedComment) {
    var tempArray = Object.assign([], vArray);
    tempArray[page].product.productStatus.comment = updatedComment;
    tempArray[page].product.productStatus.status = 'DELETE';
    setVarray(tempArray);
    updateShouldBeVisibleVictim(false);
  }

  function handleCloseDeleteVictim() {
    updateShouldBeVisibleVictim(false);
  }

  function handleCloseDeleteSurvivor() {
    updateShouldBeVisibleSurvivor(false);
  }

  function getAspectValue(aspectName, readHashMap) {
    var values = (0, _get.default)(readHashMap[aspectName], 'propertyDecisionContract.suggestedValues', []);

    if (values.length === 0) {
      return '';
    }

    return values.map(function (item) {
      return item.value;
    }).join(', ');
  }

  function createReadHash(data) {
    var readHash = {};
    var temp = Object.keys(data).map(function (item) {
      return data[item];
    });
    temp.flat(1).forEach(function (item) {
      readHash[item.aspectName] = item;
    });
    return readHash;
  }

  function createHightHash(s_hash, v_hash) {
    var hightHash = {};
    Object.keys(s_hash).forEach(function (key) {
      hightHash[key] = 59;
    });
    Object.keys(v_hash).forEach(function (key) {
      hightHash[key] = 59;
    });
    return hightHash;
  }

  function handleVTitleChange(newValue) {
    var tempArray = Object.assign([], vArray);
    tempArray[page].product.groupToAspectsMap.productTitle = newValue;
    setVarray(tempArray);
  }

  function updateDecisions(updatedDecision) {
    var updatedCluster = decisionsData.map(function (item) {
      return item.victimEpid === updatedDecision.victimEpid ? updatedDecision : item;
    });
    setDecisionsData(updatedCluster);
    var reasonHash = {
      'op-1': 'DUPLICATES',
      'op-2': 'SKIP',
      'op-3': 'NON_DUPLICATES'
    };
    var tempArray = Object.assign([], vArray);
    tempArray[page].prodDec = {
      productDuplicateAction: reasonHash[updatedCluster[page].selectedOption],
      decisionContract: {
        reason: updatedCluster[page].decisionInfo.reason.value,
        reasonDetails: '',
        comment: updatedCluster[page].decisionInfo.comment.value,
        urls: updatedCluster[page].decisionInfo.urls.map(function (item) {
          return {
            name: item.name,
            url: item.url
          };
        }),
        additionalInfo: updatedCluster[page].decisionInfo.additionalInfo.map(function (item) {
          return {
            name: item.label,
            value: item.value,
            mandatory: item.mandatory
          };
        })
      }
    };
    setVarray(tempArray);
  }

  function updateAspectHights(aspectName, newHight) {
    if (aspectsHightHash[aspectName] < newHight) {
      var temp = Object.assign({}, aspectsHightHash);
      temp[aspectName] = newHight;
      aspectsHightHash[aspectName] = newHight;
      updateHightHash(_objectSpread({}, temp));
    }
  }

  function onAspectChangeVictim(aspectData, aspectIdentifer) {
    var tempVictimArray = Object.assign([], vArray);
    var arr = tempVictimArray[page].product.groupToAspectsMap[aspectIdentifer];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].aspectName === aspectData.aspectName) {
        arr[i] = aspectData;
      }
    }

    setVarray(tempVictimArray);
  }

  function onAspectChangeSurvivor(aspectData, aspectIdentifer) {
    var tempSurvivorData = Object.assign({}, sData);
    var arr = tempSurvivorData.product.groupToAspectsMap[aspectIdentifer];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].aspectName === aspectData.aspectName) {
        arr[i] = aspectData;
      }
    }

    setSdata(tempSurvivorData);
  }

  function handleShowSuggestions(checked, e) {
    setShowSuggestions(checked);
  }

  function handleShowOriginals(checked, e) {
    setShowOriginalValues(checked);
  }

  function handleCopySurvivor(aspectValue, aspectName, group) {
    var tempArray = Object.assign([], vArray);
    var aspectGroup = (0, _get.default)(tempArray, "[".concat(page, "].product.groupToAspectsMap[").concat(group, "]"), '');
    var indentifierIndex = aspectGroup.map(function (item) {
      return item.aspectName;
    }).indexOf(aspectName);
    var suggestedValues = (0, _get.default)(aspectGroup, "[".concat(indentifierIndex, "].propertyDecisionContract.suggestedValues"), '');

    if (suggestedValues.map(function (i) {
      return i.value;
    }).indexOf(aspectValue) !== -1) {
      openNotificationWithIcon('info', 'Value unique restriction', "".concat(aspectValue, " already selected"));
      return;
    }

    suggestedValues.push({
      value: aspectValue,
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      }
    });
    return setVarray(tempArray);
  }

  function handleCopyVictim(aspectValue, aspectName, group) {
    var tempArray = Object.assign({}, sData);
    var aspectGroup = (0, _get.default)(tempArray, "product.groupToAspectsMap[".concat(group, "]"), '');
    var indentifierIndex = aspectGroup.map(function (item) {
      return item.aspectName;
    }).indexOf(aspectName);
    var suggestedValues = (0, _get.default)(aspectGroup, "[".concat(indentifierIndex, "].propertyDecisionContract.suggestedValues"), '');

    if (suggestedValues.map(function (i) {
      return i.value;
    }).indexOf(aspectValue) !== -1) {
      openNotificationWithIcon('info', 'Value unique restriction', "".concat(aspectValue, " already selected"));
      return;
    }

    suggestedValues.push({
      value: aspectValue,
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      }
    });
    return setSdata(tempArray);
  }

  function deletedImage(image) {
    return image.imageDecisionContract && (0, _get.default)(image, 'imageDecisionContract.action', null) && (0, _get.default)(image, 'imageDecisionContract.action', '') === 'DELETED';
  }
}

Duplicates.propTypes = {
  /** survivorData - data object for the survivor  */
  survivorData: _propTypes.default.object.isRequired,

  /** victimArray - array of object for the victims , currently we only have one victim in the array */
  victimArray: _propTypes.default.array.isRequired,

  /** rowsDone - object representing total rows done and total done today */
  rowsDone: _propTypes.default.object.isRequired,

  /** decisions - array of decisions taken for each duplication in the cluster, currently there is only on dicision in a cluster */
  decisions: _propTypes.default.array.isRequired,

  /** reasons - set of reasons for duplicate page, currently supporting duplicate, skip and not duplicate */
  reasons: _propTypes.default.object.isRequired,

  /** rowId - represent the id of the row of the task */
  rowId: _propTypes.default.string.isRequired,

  /** saveTask - callback function used to save the updated/curated products */
  saveTask: _propTypes.default.func.isRequired,

  /** changeCategory - callback function used to change the product category */
  changeCategory: _propTypes.default.func.isRequired,

  /** jobId - the job id of the task */
  jobId: _propTypes.default.number.isRequired,

  /** jobTypeConfiguration - the configuration that was used when the task was created */
  jobTypeConfiguration: _propTypes.default.object.isRequired,

  /** workMode - string variable that indicate page mode */
  workMode: _propTypes.default.string,

  /** escalatedInfo - object used to show or hide the escelated by string */
  escalatedInfo: _propTypes.default.object,

  /** loggedInUser - logged in user data */
  loggedInUser: _propTypes.default.object.isRequired
};
Duplicates.defaultProps = {
  workMode: 'regular',
  escalatedInfo: null,
  loggedInUser: {
    isUserSupervisor: false
  }
};