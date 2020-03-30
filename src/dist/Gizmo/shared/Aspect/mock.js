"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suggestedValues = exports.required_aspect = exports.single_value_aspect = exports.no_ums_aspect = exports.blank_aspect = exports.deleted_aspect = exports.default_aspect = void 0;
var default_aspect = {
  aspectName: 'Color',
  alignedWithSurvivor: true,
  currentValues: [{
    value: 'Black',
    information: {
      umsAlignedValue: true,
      crawlingValue: false
    }
  }, {
    value: 'Yellow',
    information: {
      umsAlignedValue: true,
      crawlingValue: false
    }
  }],
  propertyDecisionContract: {
    suggestedValues: [{
      value: 'Black',
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      }
    }, {
      value: 'Yellow',
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      }
    }],
    changed: true,
    status: null,
    deleteReason: 'NA'
  },
  aspectInformation: {
    mandatoryOnProduct: false,
    multiValue: true,
    umsAlignedAspect: true,
    aspectTypes: ['BUYERTAG', 'SELLERTAG'],
    umsValues: ['Beige', 'Black', 'Blue', 'Brown', 'Clear', 'Gold', 'Gray', 'Green', 'Multi-Color', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'White', 'Yellow']
  },
  crawlingData: {
    values: [{
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      },
      value: 'Pioneer'
    }, {
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      },
      value: 'Panasonic'
    }],
    urls: []
  }
};
exports.default_aspect = default_aspect;
var deleted_aspect = {
  aspectName: 'Color',
  alignedWithSurvivor: true,
  currentValues: [{
    value: 'Black',
    information: {
      umsAlignedValue: true,
      crawlingValue: false
    }
  }, {
    value: 'Yellow',
    information: {
      umsAlignedValue: true,
      crawlingValue: false
    }
  }],
  propertyDecisionContract: {
    suggestedValues: [{
      value: 'Black',
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      }
    }, {
      value: 'Yellow',
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      }
    }],
    changed: true,
    status: 'DELETED',
    deleteReason: 'NA'
  },
  aspectInformation: {
    mandatoryOnProduct: false,
    multiValue: true,
    umsAlignedAspect: true,
    aspectTypes: ['BUYERTAG', 'SELLERTAG'],
    umsValues: ['Beige', 'Black', 'Blue', 'Brown', 'Clear', 'Gold', 'Gray', 'Green', 'Multi-Color', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'White', 'Yellow']
  },
  crawlingData: {
    values: [{
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      },
      value: 'Pioneer'
    }, {
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      },
      value: 'Panasonic'
    }],
    urls: []
  }
};
exports.deleted_aspect = deleted_aspect;
var blank_aspect = {
  aspectName: 'Color',
  alignedWithSurvivor: false,
  currentValues: [{
    value: 'Black',
    information: {
      umsAlignedValue: true,
      crawlingValue: false
    }
  }, {
    value: 'Yellow',
    information: {
      umsAlignedValue: true,
      crawlingValue: false
    }
  }],
  propertyDecisionContract: {
    suggestedValues: [{
      value: 'Black',
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      }
    }, {
      value: 'Yellow',
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      }
    }],
    changed: true,
    status: null,
    deleteReason: 'NA'
  },
  aspectInformation: {
    mandatoryOnProduct: false,
    multiValue: true,
    umsAlignedAspect: true,
    aspectTypes: ['BUYERTAG', 'SELLERTAG'],
    umsValues: ['Beige', 'Black', 'Blue', 'Brown', 'Clear', 'Gold', 'Gray', 'Green', 'Multi-Color', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'White', 'Yellow']
  },
  crawlingData: {
    values: [{
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      },
      value: 'Pioneer'
    }, {
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      },
      value: 'Panasonic'
    }],
    urls: []
  }
};
exports.blank_aspect = blank_aspect;
var no_ums_aspect = {
  aspectName: 'Color',
  currentValues: [{
    value: 'Black',
    information: {
      umsAlignedValue: true,
      crawlingValue: false
    }
  }, {
    value: 'Yellow',
    information: {
      umsAlignedValue: true,
      crawlingValue: false
    }
  }],
  propertyDecisionContract: {
    suggestedValues: [{
      value: 'Black',
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      }
    }, {
      value: 'Yellow',
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      }
    }],
    changed: false,
    status: 'NONE',
    deleteReason: null
  },
  aspectInformation: {
    mandatoryOnProduct: false,
    multiValue: true,
    umsAlignedAspect: true,
    aspectTypes: ['BUYERTAG', 'SELLERTAG'],
    umsValues: []
  },
  crawlingData: {
    values: [{
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      },
      value: 'Pioneer'
    }, {
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      },
      value: 'Panasonic'
    }],
    urls: []
  }
};
exports.no_ums_aspect = no_ums_aspect;
var single_value_aspect = {
  aspectName: 'Color',
  currentValues: [{
    value: 'Black',
    information: {
      umsAlignedValue: true,
      crawlingValue: false
    }
  }],
  propertyDecisionContract: {
    suggestedValues: [{
      value: 'Black',
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      }
    }],
    changed: false,
    status: 'NONE',
    deleteReason: null
  },
  aspectInformation: {
    mandatoryOnProduct: false,
    multiValue: false,
    umsAlignedAspect: true,
    aspectTypes: ['BUYERTAG', 'SELLERTAG'],
    umsValues: ['Beige', 'Black', 'Blue', 'Brown', 'Clear', 'Gold', 'Gray', 'Green', 'Multi-Color', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'White', 'Yellow']
  },
  crawlingData: {
    values: [{
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      },
      value: 'Pioneer'
    }, {
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      },
      value: 'Panasonic'
    }],
    urls: []
  }
};
exports.single_value_aspect = single_value_aspect;
var suggestedValues = [{
  value: 'Black',
  information: {
    umsAlignedValue: true,
    crawlingValue: false
  }
}];
exports.suggestedValues = suggestedValues;
var required_aspect = {
  aspectName: 'Color',
  currentValues: [{
    value: 'Black',
    information: {
      umsAlignedValue: true,
      crawlingValue: false
    }
  }, {
    value: 'Yellow',
    information: {
      umsAlignedValue: true,
      crawlingValue: false
    }
  }],
  propertyDecisionContract: {
    suggestedValues: [{
      value: 'Black',
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      }
    }, {
      value: 'Yellow',
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      }
    }],
    changed: false,
    status: 'NONE',
    deleteReason: null
  },
  aspectInformation: {
    mandatoryOnProduct: false,
    multiValue: true,
    umsAlignedAspect: true,
    aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIREDHARD', 'REQUIRED'],
    umsValues: ['Beige', 'Black', 'Blue', 'Brown', 'Clear', 'Gold', 'Gray', 'Green', 'Multi-Color', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'White', 'Yellow']
  },
  crawlingData: {
    values: [{
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      },
      value: 'Pioneer'
    }, {
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      },
      value: 'Panasonic'
    }],
    urls: []
  }
};
exports.required_aspect = required_aspect;