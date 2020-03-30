"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockSupervisor = exports.mockAgent = exports.mockJobHeader = exports.mockConfigurationWithoutHeaders = exports.mockConfigurationNotEditable = exports.mockConfigurationNotEditableAndWithoutHeaders = exports.mockConfigurationAllEnabled = exports.realMockData = exports.mockVictimArray = exports.mockSurvivorData = void 0;
var mockSurvivorData = {
  product: {
    rowId: '5db54071a22dbd1eb810ee81',
    productDefinition: {
      siteId: '0',
      entityId: '7000728892',
      productTitle: 'iphone 7',
      prpUrl: 'http://www.ebay.com/p/7000728892',
      categories: {
        currentValues: [{
          categoryId: 14,
          categoryBreadcrumb: 'Pottery & Glass(870)>Glass(50693)>Glassware(13)>Other Glassware(14)'
        }],
        newValues: [{
          categoryId: 14,
          categoryBreadcrumb: 'Pottery & Glass(870)>Glass(50693)>Glassware(13)>Other Glassware(14)'
        }],
        categoryId: '14'
      },
      images: {
        originalImages: [{
          imageUrl: 'https://i.qa.ebayimg.com/images/g/PbEAAOSwXOVdLdUv/s-l640.jpg',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }, {
          imageUrl: 'https://i.qa.ebayimg.com/images/g/n2IAAOSwjyddLYcj/s-l640.jpg',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }, {
          imageUrl: 'https://i.qa.ebayimg.com/images/g/qoYAAOSwGeJdsayu/s-l640.png',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }],
        newImages: [{
          imageUrl: 'https://i.qa.ebayimg.com/images/g/PbEAAOSwXOVdLdUv/s-l640.jpg',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: []
          }
        }, {
          imageUrl: 'https://i.qa.ebayimg.com/images/g/n2IAAOSwjyddLYcj/s-l640.jpg',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }, {
          imageUrl: 'https://i.qa.ebayimg.com/images/g/qoYAAOSwGeJdsayu/s-l640.png',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }],
        changed: false
      }
    },
    groupToAspectsMap: {
      Identifiers: [{
        aspectName: 'Brand',
        currentValues: [{
          value: 'apples',
          information: {
            umsAlignedValue: true,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'apples',
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
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
          umsValues: ['Deschem']
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
      }, {
        aspectName: 'MPN',
        alignedWithSurvivor: true,
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
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
      }, {
        aspectName: 'UPC',
        currentValues: [{
          value: '0531266444685',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }, {
          value: '2436467467467',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }, {
          value: '7445226363463',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }, {
          value: '6648745463456',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }, {
          value: '6456757464664',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }, {
          value: '3399854355445',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }, {
          value: '059650349503',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }, {
          value: '982938424244',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: '0531266444685',
            information: {
              umsAlignedValue: false,
              crawlingValue: false
            }
          }],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
          umsValues: []
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }],
      'Both aspects': [{
        aspectName: 'Color',
        currentValues: [{
          value: 'green',
          information: {
            umsAlignedValue: true,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'green',
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
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Beige', 'Black', 'Blue', 'Brown', 'Clear', 'Gold', 'Gray', 'Green', 'Ivory', 'Multi-Color', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'White', 'Yellow']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Glassmaking Technique',
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Engraved', 'Etched', 'Filigree/Canework', 'Fused', 'Hand Blown', 'Lampwork', 'Millefiori', 'Murrine', 'Sommerso', 'Stained Glass']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Object Type',
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIREDHARD', 'REQUIRED'],
          umsValues: ['Ashtray', 'Basket', 'Bead', 'Bookend', 'Bottle', 'Bowl', 'Butter Dish', 'Cake Stand', 'Candle Holder', 'Candy Dish', 'Carafe/Pitcher', 'Champagne Glass', 'Character/Toby Jug', 'Clock', 'Coaster', 'Coffee/Tea Set', 'Creamer', 'Cruet', 'Cup & Saucer', 'Decanter', 'Decorative Bell', 'Decorative Shoe', 'Dinner Set', 'Drinkware/Stemware', 'Figurine', 'Flask', 'Gravy/Sauce Boat', 'Ice Bucket', 'Jewelry', 'Keyring', 'Lamp', 'Mask', 'Mirror', 'Mug', 'Ornament', 'Paperweight', 'Plate', 'Platter', 'Salt & Pepper Shaker', 'Sconce', 'Sculpture', 'Shot Glass', 'Suncatcher', 'Teapot', 'Tray', 'Trinket Dish', 'Tumbler', 'Urn', 'Vase', 'Window Panel', 'Wine Glass']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Original/Reproduction',
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Antique Original', 'Antique Reproduction', 'Contemporary Original', 'Contemporary Reproduction', 'Unknown', 'Vintage Original', 'Vintage Reproduction']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Style',
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['American Directoire', 'American Empire', 'Art Deco', 'Art Nouveau', 'Arts & Crafts/Mission Style', 'Baroque', 'Biedermeier', 'Carolean', 'Chippendale', 'Cromwellian', 'Directoire', 'Dutch Colonial', 'Early Federal', 'Eclectic', 'Edwardian', 'Edward VII', 'Elizabethan', 'Elizabeth II', 'Empire', 'Federal', 'George IV', 'George V', 'Georgian', 'Gothic', 'Henry IV', 'Jacobean', 'Jugendstil', 'Later Federal', 'Liberty', 'Louis III', 'Louis XIV', 'Louis XV', 'Louis XVI', 'Mid-Century Modern', 'NeoClassical', 'Post-War Design', 'Queen Anne', 'Regence', 'Renaissance', 'Restoration', 'Retro', 'Rivivale', 'Rococo', 'Sheraton', 'Tudor', 'Victorian', 'William & Mary', 'William III', 'William IV']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Type of Glass',
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Amethyst', 'Carnival', 'Cobalt', 'Commemorative Ware', 'Crackle Glass', 'Cranberry', 'Crystal', 'Cut Glass', 'Cut-to-Clear', 'Depression Glass', 'Elegant Glass', 'Favrile', 'Milk Glass', 'Opalescent Glass', 'Opaline', 'Pressed Glass', 'Ruby', 'Uranium', 'Vaseline/Pearline']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }],
      'SellerTag aspects': [{
        aspectName: 'California Prop 65 Warning',
        currentValues: [{
          value: 'Ghj',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }, {
          value: 'K',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'Ghj',
            information: {
              umsAlignedValue: false,
              crawlingValue: false
            }
          }, {
            value: 'K',
            information: {
              umsAlignedValue: false,
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
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Model',
        currentValues: [{
          value: 'dfgdfg',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'dfgdfg',
            information: {
              umsAlignedValue: false,
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
          values: [],
          urls: []
        }
      }],
      'Additional aspects': [{
        aspectName: 'internal_pe_snapshot_with_images',
        currentValues: [{
          value: 'true',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'true',
            information: {
              umsAlignedValue: false,
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
          umsAlignedAspect: false,
          aspectTypes: ['NOENTITYTYPE'],
          umsValues: []
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }],
      Title: [{
        aspectName: 'Title',
        currentValues: [{
          value: 'iphone 7',
          information: {
            umsAlignedValue: true,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'iphone 7',
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
          mandatoryOnProduct: true,
          multiValue: false,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
          umsValues: []
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }]
    },
    productStatus: {
      status: null,
      comment: '',
      urls: []
    },
    additionalInformation: {
      additionalInformationDataList: [{
        name: 'Mandatory Field 1',
        value: null,
        mandatory: true
      }, {
        name: 'Mandatory Field 2',
        value: null,
        mandatory: false
      }, {
        name: 'Mandatory Field 3',
        value: null,
        mandatory: true
      }, {
        name: 'Mandatory Field 4',
        value: null,
        mandatory: false
      }]
    },
    escalationInfo: null,
    siteId: '0',
    categoryId: 14
  }
};
exports.mockSurvivorData = mockSurvivorData;
var mockVictimArray = [{
  product: {
    rowId: '5db54071a22dbd1eb810ee11',
    productDefinition: {
      siteId: '0',
      entityId: '7000728811',
      productTitle: 'iphone 7',
      prpUrl: 'http://www.ebay.com/p/7000728892',
      categories: {
        currentValues: [{
          categoryId: 14,
          categoryBreadcrumb: 'Pottery & Glass(870)>Glass(50693)>Glassware(13)>Other Glassware(victim1)'
        }],
        newValues: [{
          categoryId: 14,
          categoryBreadcrumb: 'Pottery & Glass(870)>Glass(50693)>Glassware(13)>Other Glassware(victim1)'
        }],
        categoryId: '14'
      },
      images: {
        originalImages: [{
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6vzUYgCyfTElMMYMrxFr-yIqjI2pbB-VbYsX9zlWmYHfJAV2J',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }, {
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAFsnEW76weg9b-lPqIk6Dvu0WD3JDZ8AEINpVkM1YN_C47u04',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }, {
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfi6pkCJAsTrC3B6kQKhuE38EXJk7J3InQEXy5vhBaqwB4b1XC',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }],
        newImages: [{
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6vzUYgCyfTElMMYMrxFr-yIqjI2pbB-VbYsX9zlWmYHfJAV2J',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }, {
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAFsnEW76weg9b-lPqIk6Dvu0WD3JDZ8AEINpVkM1YN_C47u04',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }, {
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfi6pkCJAsTrC3B6kQKhuE38EXJk7J3InQEXy5vhBaqwB4b1XC',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }],
        changed: false
      }
    },
    groupToAspectsMap: {
      Identifiers: [{
        aspectName: 'Brand',
        currentValues: [{
          value: 'apple',
          information: {
            umsAlignedValue: true,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'apple',
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
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
          umsValues: ['Deschem']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'MPN',
        alignedWithSurvivor: false,
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
          umsValues: []
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'UPC',
        alignedWithSurvivor: true,
        currentValues: [{
          value: '0531266444685',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: '0531266444685',
            information: {
              umsAlignedValue: false,
              crawlingValue: false
            }
          }],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
          umsValues: []
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }],
      'Both aspects': [{
        aspectName: 'Color',
        alignedWithSurvivor: true,
        currentValues: [{
          value: 'orange',
          information: {
            umsAlignedValue: true,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'orange',
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
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Beige', 'Black', 'Blue', 'Brown', 'Clear', 'Gold', 'Gray', 'Green', 'Ivory', 'Multi-Color', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'White', 'Yellow']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Glassmaking Technique',
        alignedWithSurvivor: true,
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Engraved', 'Etched', 'Filigree/Canework', 'Fused', 'Hand Blown', 'Lampwork', 'Millefiori', 'Murrine', 'Sommerso', 'Stained Glass']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Object Type',
        alignedWithSurvivor: true,
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIREDHARD', 'REQUIRED'],
          umsValues: ['Ashtray', 'Basket', 'Bead', 'Bookend', 'Bottle', 'Bowl', 'Butter Dish', 'Cake Stand', 'Candle Holder', 'Candy Dish', 'Carafe/Pitcher', 'Champagne Glass', 'Character/Toby Jug', 'Clock', 'Coaster', 'Coffee/Tea Set', 'Creamer', 'Cruet', 'Cup & Saucer', 'Decanter', 'Decorative Bell', 'Decorative Shoe', 'Dinner Set', 'Drinkware/Stemware', 'Figurine', 'Flask', 'Gravy/Sauce Boat', 'Ice Bucket', 'Jewelry', 'Keyring', 'Lamp', 'Mask', 'Mirror', 'Mug', 'Ornament', 'Paperweight', 'Plate', 'Platter', 'Salt & Pepper Shaker', 'Sconce', 'Sculpture', 'Shot Glass', 'Suncatcher', 'Teapot', 'Tray', 'Trinket Dish', 'Tumbler', 'Urn', 'Vase', 'Window Panel', 'Wine Glass']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Original/Reproduction',
        alignedWithSurvivor: true,
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Antique Original', 'Antique Reproduction', 'Contemporary Original', 'Contemporary Reproduction', 'Unknown', 'Vintage Original', 'Vintage Reproduction']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Style',
        alignedWithSurvivor: true,
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['American Directoire', 'American Empire', 'Art Deco', 'Art Nouveau', 'Arts & Crafts/Mission Style', 'Baroque', 'Biedermeier', 'Carolean', 'Chippendale', 'Cromwellian', 'Directoire', 'Dutch Colonial', 'Early Federal', 'Eclectic', 'Edwardian', 'Edward VII', 'Elizabethan', 'Elizabeth II', 'Empire', 'Federal', 'George IV', 'George V', 'Georgian', 'Gothic', 'Henry IV', 'Jacobean', 'Jugendstil', 'Later Federal', 'Liberty', 'Louis III', 'Louis XIV', 'Louis XV', 'Louis XVI', 'Mid-Century Modern', 'NeoClassical', 'Post-War Design', 'Queen Anne', 'Regence', 'Renaissance', 'Restoration', 'Retro', 'Rivivale', 'Rococo', 'Sheraton', 'Tudor', 'Victorian', 'William & Mary', 'William III', 'William IV']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Type of Glass',
        alignedWithSurvivor: true,
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Amethyst', 'Carnival', 'Cobalt', 'Commemorative Ware', 'Crackle Glass', 'Cranberry', 'Crystal', 'Cut Glass', 'Cut-to-Clear', 'Depression Glass', 'Elegant Glass', 'Favrile', 'Milk Glass', 'Opalescent Glass', 'Opaline', 'Pressed Glass', 'Ruby', 'Uranium', 'Vaseline/Pearline']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }],
      'SellerTag aspects': [{
        aspectName: 'California Prop 65 Warning',
        alignedWithSurvivor: true,
        currentValues: [{
          value: 'Ghj',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }, {
          value: 'K',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'Ghj',
            information: {
              umsAlignedValue: false,
              crawlingValue: false
            }
          }, {
            value: 'K',
            information: {
              umsAlignedValue: false,
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
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Model',
        alignedWithSurvivor: true,
        currentValues: [{
          value: 'dfgdfg',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'dfgdfg',
            information: {
              umsAlignedValue: false,
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
          values: [],
          urls: []
        }
      }],
      'Additional aspects': [{
        aspectName: 'internal_pe_snapshot_with_images',
        alignedWithSurvivor: true,
        currentValues: [{
          value: 'true',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'true',
            information: {
              umsAlignedValue: false,
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
          umsAlignedAspect: false,
          aspectTypes: ['NOENTITYTYPE'],
          umsValues: []
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }],
      Title: [{
        aspectName: 'Title',
        alignedWithSurvivor: true,
        currentValues: [{
          value: 'iphone 7',
          information: {
            umsAlignedValue: true,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'iphone 7',
            information: {
              umsAlignedValue: false,
              crawlingValue: false
            }
          }],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: false,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
          umsValues: []
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }]
    },
    productStatus: {
      status: null,
      comment: '',
      urls: []
    },
    additionalInformation: {
      additionalInformationDataList: [{
        name: 'Mandatory Field 1',
        value: null,
        mandatory: true
      }, {
        name: 'Mandatory Field 2',
        value: null,
        mandatory: false
      }, {
        name: 'Mandatory Field 3',
        value: null,
        mandatory: true
      }, {
        name: 'Mandatory Field 4',
        value: null,
        mandatory: false
      }]
    },
    escalationInfo: null,
    siteId: '0',
    categoryId: 14
  }
}, {
  nextRowContract: {
    rowId: '5db54071a22dbd1eb810ee22',
    productDefinition: {
      siteId: '0',
      entityId: '7000728822',
      productTitle: 'victim 2',
      prpUrl: 'http://www.ebay.com/p/7000728892',
      categories: {
        currentValues: [{
          categoryId: 14,
          categoryBreadcrumb: 'Pottery & Glass(870)>Glass(50693)>Glassware(13)>Other Glassware(victim2)'
        }],
        newValues: [{
          categoryId: 14,
          categoryBreadcrumb: 'Pottery & Glass(870)>Glass(50693)>Glassware(13)>Other Glassware(victim2)'
        }],
        categoryId: '14'
      },
      images: {
        originalImages: [{
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRN4tOXwYvRrIALFvTuP5QT0x0ZeG6bwZ7cRW7QaltQM0cw_iBF',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }, {
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQT6rB84NFzdEraUA6czCzruBPWtZe2cTmnDbxPWkZ5G0VS1eOx',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: []
          }
        }, {
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCCVdfR3-h9zimzlVQJVxByrTAgr-VPvN4w1h8y0toaIXiSEo8',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }],
        newImages: [{
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRN4tOXwYvRrIALFvTuP5QT0x0ZeG6bwZ7cRW7QaltQM0cw_iBF',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }, {
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQT6rB84NFzdEraUA6czCzruBPWtZe2cTmnDbxPWkZ5G0VS1eOx',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }, {
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCCVdfR3-h9zimzlVQJVxByrTAgr-VPvN4w1h8y0toaIXiSEo8',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }],
        changed: false
      }
    },
    groupToAspectsMap: {
      Identifiers: [{
        aspectName: 'Brand',
        alignedWithSurvivor: true,
        currentValues: [{
          value: 'sumsung',
          information: {
            umsAlignedValue: true,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'sumsung',
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
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
          umsValues: ['Deschem']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'MPN',
        alignedWithSurvivor: false,
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
          umsValues: []
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'UPC',
        alignedWithSurvivor: true,
        currentValues: [{
          value: '0531266444685',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: '0531266444685',
            information: {
              umsAlignedValue: false,
              crawlingValue: false
            }
          }],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
          umsValues: []
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }],
      'Both aspects': [{
        aspectName: 'Color',
        currentValues: [{
          value: 'Blue',
          information: {
            umsAlignedValue: true,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'Blue',
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
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Beige', 'Black', 'Blue', 'Brown', 'Clear', 'Gold', 'Gray', 'Green', 'Ivory', 'Multi-Color', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'White', 'Yellow']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Glassmaking Technique',
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Engraved', 'Etched', 'Filigree/Canework', 'Fused', 'Hand Blown', 'Lampwork', 'Millefiori', 'Murrine', 'Sommerso', 'Stained Glass']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Object Type',
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIREDHARD', 'REQUIRED'],
          umsValues: ['Ashtray', 'Basket', 'Bead', 'Bookend', 'Bottle', 'Bowl', 'Butter Dish', 'Cake Stand', 'Candle Holder', 'Candy Dish', 'Carafe/Pitcher', 'Champagne Glass', 'Character/Toby Jug', 'Clock', 'Coaster', 'Coffee/Tea Set', 'Creamer', 'Cruet', 'Cup & Saucer', 'Decanter', 'Decorative Bell', 'Decorative Shoe', 'Dinner Set', 'Drinkware/Stemware', 'Figurine', 'Flask', 'Gravy/Sauce Boat', 'Ice Bucket', 'Jewelry', 'Keyring', 'Lamp', 'Mask', 'Mirror', 'Mug', 'Ornament', 'Paperweight', 'Plate', 'Platter', 'Salt & Pepper Shaker', 'Sconce', 'Sculpture', 'Shot Glass', 'Suncatcher', 'Teapot', 'Tray', 'Trinket Dish', 'Tumbler', 'Urn', 'Vase', 'Window Panel', 'Wine Glass']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Original/Reproduction',
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Antique Original', 'Antique Reproduction', 'Contemporary Original', 'Contemporary Reproduction', 'Unknown', 'Vintage Original', 'Vintage Reproduction']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Style',
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['American Directoire', 'American Empire', 'Art Deco', 'Art Nouveau', 'Arts & Crafts/Mission Style', 'Baroque', 'Biedermeier', 'Carolean', 'Chippendale', 'Cromwellian', 'Directoire', 'Dutch Colonial', 'Early Federal', 'Eclectic', 'Edwardian', 'Edward VII', 'Elizabethan', 'Elizabeth II', 'Empire', 'Federal', 'George IV', 'George V', 'Georgian', 'Gothic', 'Henry IV', 'Jacobean', 'Jugendstil', 'Later Federal', 'Liberty', 'Louis III', 'Louis XIV', 'Louis XV', 'Louis XVI', 'Mid-Century Modern', 'NeoClassical', 'Post-War Design', 'Queen Anne', 'Regence', 'Renaissance', 'Restoration', 'Retro', 'Rivivale', 'Rococo', 'Sheraton', 'Tudor', 'Victorian', 'William & Mary', 'William III', 'William IV']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Type of Glass',
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Amethyst', 'Carnival', 'Cobalt', 'Commemorative Ware', 'Crackle Glass', 'Cranberry', 'Crystal', 'Cut Glass', 'Cut-to-Clear', 'Depression Glass', 'Elegant Glass', 'Favrile', 'Milk Glass', 'Opalescent Glass', 'Opaline', 'Pressed Glass', 'Ruby', 'Uranium', 'Vaseline/Pearline']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }],
      'SellerTag aspects': [{
        aspectName: 'California Prop 65 Warning',
        currentValues: [{
          value: 'Ghj',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }, {
          value: 'K',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'Ghj',
            information: {
              umsAlignedValue: false,
              crawlingValue: false
            }
          }, {
            value: 'K',
            information: {
              umsAlignedValue: false,
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
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Model',
        currentValues: [{
          value: 'dfgdfg',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'dfgdfg',
            information: {
              umsAlignedValue: false,
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
          values: [],
          urls: []
        }
      }],
      'Additional aspects': [{
        aspectName: 'internal_pe_snapshot_with_images',
        currentValues: [{
          value: 'true',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'true',
            information: {
              umsAlignedValue: false,
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
          umsAlignedAspect: false,
          aspectTypes: ['NOENTITYTYPE'],
          umsValues: []
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }],
      Title: [{
        aspectName: 'Title',
        currentValues: [{
          value: 'iphone 7',
          information: {
            umsAlignedValue: true,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'iphone 7',
            information: {
              umsAlignedValue: false,
              crawlingValue: false
            }
          }],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: false,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
          umsValues: []
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }]
    },
    productStatus: {
      status: null,
      comment: '',
      urls: []
    },
    additionalInformation: {
      additionalInformationDataList: [{
        name: 'Mandatory Field 1',
        value: null,
        mandatory: true
      }, {
        name: 'Mandatory Field 2',
        value: null,
        mandatory: false
      }, {
        name: 'Mandatory Field 3',
        value: null,
        mandatory: true
      }, {
        name: 'Mandatory Field 4',
        value: null,
        mandatory: false
      }]
    },
    escalationInfo: null,
    siteId: '0',
    categoryId: 14
  }
}, {
  nextRowContract: {
    rowId: '5db54071a22dbd1eb810ee33',
    productDefinition: {
      siteId: '0',
      entityId: '7000728892',
      productTitle: 'victim 3',
      prpUrl: 'http://www.ebay.com/p/7000728892',
      categories: {
        currentValues: [{
          categoryId: 14,
          categoryBreadcrumb: 'Pottery & Glass(870)>Glass(50693)>Glassware(13)>Other Glassware(victim3)'
        }],
        newValues: [{
          categoryId: 14,
          categoryBreadcrumb: 'Pottery & Glass(870)>Glass(50693)>Glassware(13)>Other Glassware(victim3)'
        }],
        categoryId: '14'
      },
      images: {
        originalImages: [{
          imageUrl: 'https://i.qa.ebayimg.com/images/g/PbEAAOSwXOVdLdUv/s-l640.jpg',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }, {
          imageUrl: 'https://i.qa.ebayimg.com/images/g/n2IAAOSwjyddLYcj/s-l640.jpg',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: []
          }
        }, {
          imageUrl: 'https://i.qa.ebayimg.com/images/g/qoYAAOSwGeJdsayu/s-l640.png',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }],
        newImages: [{
          imageUrl: 'https://i.qa.ebayimg.com/images/g/PbEAAOSwXOVdLdUv/s-l640.jpg',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }, {
          imageUrl: 'https://i.qa.ebayimg.com/images/g/n2IAAOSwjyddLYcj/s-l640.jpg',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }, {
          imageUrl: 'https://i.qa.ebayimg.com/images/g/qoYAAOSwGeJdsayu/s-l640.png',
          copyright: 'Ebay Seller Provided',
          subcopyright: null,
          imageSizeContract: {
            widthSize: 150,
            heightSize: 221
          },
          imageDecisionContract: {
            rejectReasons: [],
            action: ''
          }
        }],
        changed: false
      }
    },
    groupToAspectsMap: {
      Identifiers: [{
        aspectName: 'Brand',
        currentValues: [{
          value: 'sumsung2',
          information: {
            umsAlignedValue: true,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'sumsung2',
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
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
          umsValues: ['Deschem']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'MPN',
        alignedWithSurvivor: false,
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
          umsValues: []
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'UPC',
        currentValues: [{
          value: '0531266444685',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: '0531266444685',
            information: {
              umsAlignedValue: false,
              crawlingValue: false
            }
          }],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
          umsValues: []
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }],
      'Both aspects': [{
        aspectName: 'Color',
        currentValues: [{
          value: 'red',
          information: {
            umsAlignedValue: true,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'red',
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
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Beige', 'Black', 'Blue', 'Brown', 'Clear', 'Gold', 'Gray', 'Green', 'Ivory', 'Multi-Color', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'White', 'Yellow']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Glassmaking Technique',
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Engraved', 'Etched', 'Filigree/Canework', 'Fused', 'Hand Blown', 'Lampwork', 'Millefiori', 'Murrine', 'Sommerso', 'Stained Glass']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Object Type',
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIREDHARD', 'REQUIRED'],
          umsValues: ['Ashtray', 'Basket', 'Bead', 'Bookend', 'Bottle', 'Bowl', 'Butter Dish', 'Cake Stand', 'Candle Holder', 'Candy Dish', 'Carafe/Pitcher', 'Champagne Glass', 'Character/Toby Jug', 'Clock', 'Coaster', 'Coffee/Tea Set', 'Creamer', 'Cruet', 'Cup & Saucer', 'Decanter', 'Decorative Bell', 'Decorative Shoe', 'Dinner Set', 'Drinkware/Stemware', 'Figurine', 'Flask', 'Gravy/Sauce Boat', 'Ice Bucket', 'Jewelry', 'Keyring', 'Lamp', 'Mask', 'Mirror', 'Mug', 'Ornament', 'Paperweight', 'Plate', 'Platter', 'Salt & Pepper Shaker', 'Sconce', 'Sculpture', 'Shot Glass', 'Suncatcher', 'Teapot', 'Tray', 'Trinket Dish', 'Tumbler', 'Urn', 'Vase', 'Window Panel', 'Wine Glass']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Original/Reproduction',
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Antique Original', 'Antique Reproduction', 'Contemporary Original', 'Contemporary Reproduction', 'Unknown', 'Vintage Original', 'Vintage Reproduction']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Style',
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['American Directoire', 'American Empire', 'Art Deco', 'Art Nouveau', 'Arts & Crafts/Mission Style', 'Baroque', 'Biedermeier', 'Carolean', 'Chippendale', 'Cromwellian', 'Directoire', 'Dutch Colonial', 'Early Federal', 'Eclectic', 'Edwardian', 'Edward VII', 'Elizabethan', 'Elizabeth II', 'Empire', 'Federal', 'George IV', 'George V', 'Georgian', 'Gothic', 'Henry IV', 'Jacobean', 'Jugendstil', 'Later Federal', 'Liberty', 'Louis III', 'Louis XIV', 'Louis XV', 'Louis XVI', 'Mid-Century Modern', 'NeoClassical', 'Post-War Design', 'Queen Anne', 'Regence', 'Renaissance', 'Restoration', 'Retro', 'Rivivale', 'Rococo', 'Sheraton', 'Tudor', 'Victorian', 'William & Mary', 'William III', 'William IV']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Type of Glass',
        currentValues: [],
        propertyDecisionContract: {
          suggestedValues: [],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: true,
          umsAlignedAspect: true,
          aspectTypes: ['BUYERTAG', 'SELLERTAG'],
          umsValues: ['Amethyst', 'Carnival', 'Cobalt', 'Commemorative Ware', 'Crackle Glass', 'Cranberry', 'Crystal', 'Cut Glass', 'Cut-to-Clear', 'Depression Glass', 'Elegant Glass', 'Favrile', 'Milk Glass', 'Opalescent Glass', 'Opaline', 'Pressed Glass', 'Ruby', 'Uranium', 'Vaseline/Pearline']
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }],
      'SellerTag aspects': [{
        aspectName: 'California Prop 65 Warning',
        currentValues: [{
          value: 'Ghj',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }, {
          value: 'K',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'Ghj',
            information: {
              umsAlignedValue: false,
              crawlingValue: false
            }
          }, {
            value: 'K',
            information: {
              umsAlignedValue: false,
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
          values: [],
          urls: []
        }
      }, {
        aspectName: 'Model',
        currentValues: [{
          value: 'dfgdfg',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'dfgdfg',
            information: {
              umsAlignedValue: false,
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
          values: [],
          urls: []
        }
      }],
      'Additional aspects': [{
        aspectName: 'internal_pe_snapshot_with_images',
        currentValues: [{
          value: 'true',
          information: {
            umsAlignedValue: false,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'true',
            information: {
              umsAlignedValue: false,
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
          umsAlignedAspect: false,
          aspectTypes: ['NOENTITYTYPE'],
          umsValues: []
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }],
      Title: [{
        aspectName: 'Title',
        currentValues: [{
          value: 'iphone 7',
          information: {
            umsAlignedValue: true,
            crawlingValue: false
          }
        }],
        propertyDecisionContract: {
          suggestedValues: [{
            value: 'iphone 7',
            information: {
              umsAlignedValue: false,
              crawlingValue: false
            }
          }],
          changed: false,
          status: 'NONE',
          deleteReason: null
        },
        aspectInformation: {
          mandatoryOnProduct: true,
          multiValue: false,
          umsAlignedAspect: true,
          aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
          umsValues: []
        },
        crawlingData: {
          values: [],
          urls: []
        }
      }]
    },
    productStatus: {
      status: null,
      comment: null,
      urls: []
    },
    additionalInformation: {
      additionalInformationDataList: [{
        name: 'Mandatory Field 1',
        value: null,
        mandatory: true
      }, {
        name: 'Mandatory Field 2',
        value: null,
        mandatory: false
      }, {
        name: 'Mandatory Field 3',
        value: null,
        mandatory: true
      }, {
        name: 'Mandatory Field 4',
        value: null,
        mandatory: false
      }]
    },
    escalationInfo: null,
    siteId: '0',
    categoryId: 14
  }
}];
exports.mockVictimArray = mockVictimArray;
var realMockData = {
  nextRowContract: {
    rowId: '5dece28c6146da8b4f70771f',
    entities: [{
      product: {
        productDefinition: {
          siteId: '0',
          entityId: '54861558',
          productTitle: 'Nokia 2600 classic - Midnight Blue (Unlocked) Cellular Phone ',
          prpUrl: 'http://www.ebay.com/p/54861558',
          categories: {
            currentValues: [{
              categoryId: 9355,
              categoryBreadcrumb: 'Cell Phones & Accessories(15032)>Cell Phones & Smartphones(9355)'
            }],
            newValues: [{
              categoryId: 9355,
              categoryBreadcrumb: 'Cell Phones & Accessories(15032)>Cell Phones & Smartphones(9355)'
            }],
            categoryId: '9355'
          },
          images: {
            originalImages: [{
              imageUrl: 'https://i.ebayimg.com/00/$(KGrHqF,!lsE4mnL(H61BOVSrEwFwQ~~_57.JPG?set_id=89040003C1',
              copyright: 'CNET (de_DE)',
              subcopyright: null
            }, {
              imageUrl: 'https://i.ebayimg.com/00/$(KGrHqN,!h0E4qRDB16lBOVSrOLIJQ~~_57.JPG?set_id=89040003C1',
              copyright: 'CNET (de_DE)',
              subcopyright: null
            }, {
              imageUrl: 'https://i.ebayimg.com/00/$(KGrHqZ,!l4E4lVyoI21BOVSrYV)z!~~_57.JPG?set_id=89040003C1',
              copyright: 'CNET (de_DE)',
              subcopyright: null
            }],
            newImages: [{
              imageUrl: 'https://i.ebayimg.com/00/$(KGrHqF,!lsE4mnL(H61BOVSrEwFwQ~~_57.JPG?set_id=89040003C1',
              copyright: 'CNET (de_DE)',
              subcopyright: null
            }, {
              imageUrl: 'https://i.ebayimg.com/00/$(KGrHqN,!h0E4qRDB16lBOVSrOLIJQ~~_57.JPG?set_id=89040003C1',
              copyright: 'CNET (de_DE)',
              subcopyright: null
            }, {
              imageUrl: 'https://i.ebayimg.com/00/$(KGrHqZ,!l4E4lVyoI21BOVSrYV)z!~~_57.JPG?set_id=89040003C1',
              copyright: 'CNET (de_DE)',
              subcopyright: null
            }],
            changed: false
          }
        },
        groupToAspectsMap: {
          Identifiers: [{
            aspectName: 'Brand',
            alignedWithSurvivor: true,
            currentValues: [{
              value: 'Nokia',
              information: {
                umsAlignedValue: true,
                crawlingValue: false
              }
            }],
            propertyDecisionContract: {
              suggestedValues: [{
                value: 'Nokia',
                information: {
                  umsAlignedValue: false,
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
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'MPN',
            alignedWithSurvivor: true,
            currentValues: [{
              value: '002D378',
              information: {
                umsAlignedValue: false,
                crawlingValue: false
              }
            }],
            propertyDecisionContract: {
              suggestedValues: [{
                value: '002D378',
                information: {
                  umsAlignedValue: false,
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
              aspectTypes: ['SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }],
          'Both aspects': [{
            aspectName: 'Camera Resolution',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Color',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Contract',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Features',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Lock Status',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Manufacturer Color',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Model',
            alignedWithSurvivor: true,
            currentValues: [{
              value: '2600 classic',
              information: {
                umsAlignedValue: false,
                crawlingValue: false
              }
            }],
            propertyDecisionContract: {
              suggestedValues: [{
                value: '2600 classic',
                information: {
                  umsAlignedValue: false,
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
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Model Number',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Network',
            alignedWithSurvivor: true,
            currentValues: [{
              value: 'Unlocked',
              information: {
                umsAlignedValue: true,
                crawlingValue: false
              }
            }],
            propertyDecisionContract: {
              suggestedValues: [{
                value: 'Unlocked',
                information: {
                  umsAlignedValue: false,
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
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Operating System',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Processor',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'RAM',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Screen Size',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'SIM Card Slot',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Storage Capacity',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Style',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Memory Card Type',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Country/Region of Manufacture',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Connectivity',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Cellular Band',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }],
          'SellerTag aspects': [{
            aspectName: 'Unit Type',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'HideEntityAspect'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Unit Quantity',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'HideEntityAspect'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Manufacturer Warranty',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Custom Bundle',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'California Prop 65 Warning',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Bundle Description',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }],
          'Additional aspects': [],
          Title: [{
            aspectName: 'Title',
            alignedWithSurvivor: true,
            currentValues: [{
              value: 'Nokia 2600 classic - Midnight Blue (Unlocked) Cellular Phone ',
              information: {
                umsAlignedValue: true,
                crawlingValue: false
              }
            }],
            propertyDecisionContract: {
              suggestedValues: [{
                value: 'Nokia 2600 classic - Midnight Blue (Unlocked) Cellular Phone ',
                information: {
                  umsAlignedValue: false,
                  crawlingValue: false
                }
              }],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: true,
              multiValue: false,
              umsAlignedAspect: true,
              aspectTypes: ['NOENTITYTYPE'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }]
        }
      },
      entityId: '54861558',
      prodDec: null
    }, {
      product: {
        productDefinition: {
          siteId: '15',
          entityId: '12000633803',
          productTitle: 'Convair Multi Directional Turbo Fan - Grey/silver',
          prpUrl: 'http://www.ebay.com.au/p/12000633803',
          categories: {
            currentValues: [{
              categoryId: 20612,
              categoryBreadcrumb: 'Home Appliances(20710)>Heating, Cooling & Air(69197)>Indoor Air Quality & Fans(185114)>Portable Fans(20612)'
            }],
            newValues: [{
              categoryId: 20612,
              categoryBreadcrumb: 'Home Appliances(20710)>Heating, Cooling & Air(69197)>Indoor Air Quality & Fans(185114)>Portable Fans(20612)'
            }],
            categoryId: '20612'
          },
          images: {
            originalImages: [],
            newImages: [],
            changed: false
          }
        },
        groupToAspectsMap: {
          Identifiers: [{
            aspectName: 'Brand',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
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
          }, {
            aspectName: 'MPN',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIREDHARD', 'REQUIRED'],
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
          }],
          'Both aspects': [{
            aspectName: 'Camera Resolution',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
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
          }, {
            aspectName: 'Color',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [{
                information: {
                  umsAlignedValue: true,
                  crawlingValue: true
                },
                value: 'Pioneer'
              }, {
                information: {
                  umsAlignedValue: true,
                  crawlingValue: true
                },
                value: 'Panasonic'
              }],
              urls: []
            }
          }, {
            aspectName: 'Contract',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [{
                information: {
                  umsAlignedValue: true,
                  crawlingValue: true
                },
                value: 'Pioneer'
              }, {
                information: {
                  umsAlignedValue: true,
                  crawlingValue: true
                },
                value: 'Panasonic'
              }],
              urls: []
            }
          }, {
            aspectName: 'Features',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
                  crawlingValue: true
                },
                value: 'Pioneer'
              }, {
                information: {
                  umsAlignedValue: true,
                  crawlingValue: true
                },
                value: 'Panasonic'
              }],
              urls: []
            }
          }, {
            aspectName: 'Lock Status',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [{
                information: {
                  umsAlignedValue: true,
                  crawlingValue: true
                },
                value: 'Pioneer'
              }, {
                information: {
                  umsAlignedValue: true,
                  crawlingValue: true
                },
                value: 'Panasonic'
              }],
              urls: []
            }
          }, {
            aspectName: 'Manufacturer Color',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Model',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [{
                information: {
                  umsAlignedValue: true,
                  crawlingValue: true
                },
                value: 'Pioneer'
              }, {
                information: {
                  umsAlignedValue: true,
                  crawlingValue: true
                },
                value: 'Panasonic'
              }],
              urls: []
            }
          }, {
            aspectName: 'Model Number',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Network',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Operating System',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Processor',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'RAM',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Screen Size',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'SIM Card Slot',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Storage Capacity',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Style',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Memory Card Type',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Country/Region of Manufacture',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Connectivity',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Cellular Band',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }],
          'SellerTag aspects': [{
            aspectName: 'Unit Type',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Unit Quantity',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Manufacturer Warranty',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Custom Bundle',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'California Prop 65 Warning',
            alignedWithSurvivor: false,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: false,
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Bundle Description',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }],
          'Additional aspects': [{
            aspectName: 'BRAND',
            alignedWithSurvivor: true,
            currentValues: [{
              value: 'Convair',
              information: {
                umsAlignedValue: false,
                crawlingValue: false
              }
            }],
            propertyDecisionContract: {
              suggestedValues: [{
                value: 'Convair',
                information: {
                  umsAlignedValue: false,
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
              umsAlignedAspect: false,
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'UPC',
            alignedWithSurvivor: true,
            currentValues: [{
              value: '0000093121712',
              information: {
                umsAlignedValue: false,
                crawlingValue: false
              }
            }],
            propertyDecisionContract: {
              suggestedValues: [{
                value: '0000093121712',
                information: {
                  umsAlignedValue: false,
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
              aspectTypes: [],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Modification Description',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Power Source',
            alignedWithSurvivor: true,
            currentValues: [{
              value: 'Electric',
              information: {
                umsAlignedValue: true,
                crawlingValue: false
              }
            }],
            propertyDecisionContract: {
              suggestedValues: [{
                value: 'Electric',
                information: {
                  umsAlignedValue: false,
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Housing Material',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Wattage',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Number of Speeds',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Smart Home Compatibility',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Colour',
            alignedWithSurvivor: true,
            currentValues: [{
              value: 'Grey',
              information: {
                umsAlignedValue: true,
                crawlingValue: false
              }
            }],
            propertyDecisionContract: {
              suggestedValues: [{
                value: 'Grey',
                information: {
                  umsAlignedValue: false,
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
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Control Style',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Blade Orientation',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Lead Length',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Voltage',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Height',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Mounting Style',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Modified Item',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
              changed: false,
              status: 'NONE',
              deleteReason: null
            },
            aspectInformation: {
              mandatoryOnProduct: false,
              multiValue: true,
              umsAlignedAspect: true,
              aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Time Control',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Recommended Environment',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Number of Blades',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Fan Style',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }, {
            aspectName: 'Smart Home Protocol',
            alignedWithSurvivor: true,
            currentValues: [],
            propertyDecisionContract: {
              suggestedValues: [],
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
              values: [],
              urls: []
            }
          }],
          Title: [{
            aspectName: 'Title',
            alignedWithSurvivor: true,
            currentValues: [{
              value: 'Convair Multi Directional Turbo Fan - Grey/silver',
              information: {
                umsAlignedValue: true,
                crawlingValue: false
              }
            }],
            propertyDecisionContract: {
              suggestedValues: [{
                value: 'Convair Multi Directional Turbo Fan - Grey/silver',
                information: {
                  umsAlignedValue: false,
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
              aspectTypes: ['NOENTITYTYPE'],
              umsValues: []
            },
            crawlingData: {
              values: [],
              urls: []
            }
          }]
        }
      },
      entityId: '12000633803',
      prodDec: {
        productDuplicateAction: 'NON_DUPLICATES',
        decisionContract: {
          reason: 'Different Attribute',
          reasonDetails: null,
          comment: 'I am different Attribute Comment',
          urls: [{
            name: 'url1',
            url: ''
          }, {
            name: 'url2',
            url: ''
          }]
        }
      }
    }],
    escalationInfo: {
      escalatedBy: 'Oded Goldberg is the king',
      escalatedByUserName: 'ogoldberg',
      isEscalated: true,
      escalationReason: 'I was just testing it',
      escalatedAt: '2020/1/10'
    },
    doneRowsContract: {
      totalDone: 0,
      totalDoneToday: 0
    }
  }
};
exports.realMockData = realMockData;
var mockConfigurationAllEnabled = {
  taskConfiguration: {
    taskId: '5df2319db8c61b334ca22f48',
    name: 'Dup Test Config',
    type: 'Duplicates'
  },
  configurationResponse: {
    mainMandatoryFields: [{
      fieldName: 'test aspect',
      mandatory: false,
      fieldType: 'Free Text',
      values: []
    }, {
      fieldName: 'test aspect 2',
      mandatory: true,
      fieldType: 'Dropdown',
      values: ['aa', 'bb']
    }],
    hiddenFieldsGroups: [{
      groupName: 'NOENTITYTYPE',
      displayName: 'Non UMS aspects',
      message: 'Non UMS aspects',
      hide: false
    }, {
      groupName: 'HideEntityAspect',
      displayName: 'Hidden GH aspects',
      message: 'Hidden GH aspects',
      hide: false
    }, {
      groupName: 'AspectUsage',
      displayName: 'Listing related aspects',
      message: 'Listing related aspects',
      hide: false
    }],
    sourceInformation: {
      vendor: 'eBay SDO',
      sourceType: 'SDO Enrichment',
      sourcingMethod: 'Vendors',
      track: 'Top Products',
      allowComparison: true,
      sendFullSnapshot: true
    },
    clusterStrategy: 'None',
    updatePlatformRedirect: true,
    updatePlatformProduct: true,
    enableProductCuration: true,
    survivorProvided: true,
    addCrawling: false,
    onlyLive: true
  }
};
exports.mockConfigurationAllEnabled = mockConfigurationAllEnabled;
var mockConfigurationNotEditable = {
  taskConfiguration: {
    taskId: '5df2319db8c61b334ca22f48',
    name: 'Dup Test Config',
    type: 'Duplicates'
  },
  configurationResponse: {
    mainMandatoryFields: [{
      fieldName: 'test aspect',
      mandatory: false,
      fieldType: 'Free Text',
      values: []
    }, {
      fieldName: 'test aspect 2',
      mandatory: true,
      fieldType: 'Dropdown',
      values: ['aa', 'bb']
    }],
    hiddenFieldsGroups: [{
      groupName: 'NOENTITYTYPE',
      displayName: 'Non UMS aspects',
      message: 'Non UMS aspects',
      hide: false
    }, {
      groupName: 'HideEntityAspect',
      displayName: 'Hidden GH aspects',
      message: 'Hidden GH aspects',
      hide: false
    }, {
      groupName: 'AspectUsage',
      displayName: 'Listing related aspects',
      message: 'Listing related aspects',
      hide: false
    }],
    sourceInformation: {
      vendor: 'eBay SDO',
      sourceType: 'SDO Enrichment',
      sourcingMethod: 'Vendors',
      track: 'Top Products',
      allowComparison: true,
      sendFullSnapshot: true
    },
    clusterStrategy: 'None',
    updatePlatformRedirect: true,
    updatePlatformProduct: true,
    enableProductCuration: false,
    survivorProvided: true,
    addCrawling: false,
    onlyLive: true
  }
};
exports.mockConfigurationNotEditable = mockConfigurationNotEditable;
var mockConfigurationWithoutHeaders = {
  taskConfiguration: {
    taskId: '5df2319db8c61b334ca22f48',
    name: 'Dup Test Config',
    type: 'Duplicates'
  },
  configurationResponse: {
    mainMandatoryFields: [{
      fieldName: 'test aspect',
      mandatory: false,
      fieldType: 'Free Text',
      values: []
    }, {
      fieldName: 'test aspect 2',
      mandatory: true,
      fieldType: 'Dropdown',
      values: ['aa', 'bb']
    }],
    hiddenFieldsGroups: [{
      groupName: 'NOENTITYTYPE',
      displayName: 'Non UMS aspects',
      message: 'Non UMS aspects',
      hide: false
    }, {
      groupName: 'HideEntityAspect',
      displayName: 'Hidden GH aspects',
      message: 'Hidden GH aspects',
      hide: false
    }, {
      groupName: 'AspectUsage',
      displayName: 'Listing related aspects',
      message: 'Listing related aspects',
      hide: false
    }],
    sourceInformation: {
      vendor: 'eBay SDO',
      sourceType: 'SDO Enrichment',
      sourcingMethod: 'Vendors',
      track: 'Top Products',
      allowComparison: true,
      sendFullSnapshot: true
    },
    clusterStrategy: 'None',
    updatePlatformRedirect: true,
    updatePlatformProduct: true,
    enableProductCuration: true,
    survivorProvided: false,
    addCrawling: false,
    onlyLive: true
  }
};
exports.mockConfigurationWithoutHeaders = mockConfigurationWithoutHeaders;
var mockConfigurationNotEditableAndWithoutHeaders = {
  taskConfiguration: {
    taskId: '5df2319db8c61b334ca22f48',
    name: 'Dup Test Config',
    type: 'Duplicates'
  },
  configurationResponse: {
    mainMandatoryFields: [{
      fieldName: 'test aspect',
      mandatory: false,
      fieldType: 'Free Text',
      values: []
    }, {
      fieldName: 'test aspect 2',
      mandatory: true,
      fieldType: 'Dropdown',
      values: ['aa', 'bb']
    }],
    hiddenFieldsGroups: [{
      groupName: 'NOENTITYTYPE',
      displayName: 'Non UMS aspects',
      message: 'Non UMS aspects',
      hide: false
    }, {
      groupName: 'HideEntityAspect',
      displayName: 'Hidden GH aspects',
      message: 'Hidden GH aspects',
      hide: false
    }, {
      groupName: 'AspectUsage',
      displayName: 'Listing related aspects',
      message: 'Listing related aspects',
      hide: false
    }],
    sourceInformation: {
      vendor: 'eBay SDO',
      sourceType: 'SDO Enrichment',
      sourcingMethod: 'Vendors',
      track: 'Top Products',
      allowComparison: true,
      sendFullSnapshot: true
    },
    clusterStrategy: 'None',
    updatePlatformRedirect: true,
    updatePlatformProduct: true,
    enableProductCuration: false,
    survivorProvided: false,
    addCrawling: false,
    onlyLive: true
  }
};
exports.mockConfigurationNotEditableAndWithoutHeaders = mockConfigurationNotEditableAndWithoutHeaders;
var mockJobHeader = {
  jobHeaderContract: {
    jobId: '3164',
    name: 'tal - dup 73',
    description: '',
    type: 'Duplicates',
    state: 'Open',
    dueDate: null,
    priority: 'None',
    owners: ['5acc6015fa1dad062a4adc86'],
    assignees: [{
      id: 0,
      displayName: 'eBay : Classification',
      dropDownDisplayName: 'Classification',
      vendorTeamLeaders: ['59db20197b651913627144ad'],
      locales: null,
      organization: '1',
      epids: null,
      groups: ['6e0bd6ed-dd30-43d3-8a54-e0f6710de2f5'],
      assigneeType: 'assignee'
    }],
    triages: [{
      id: 0,
      displayName: 'eBay : Classification',
      dropDownDisplayName: 'Classification',
      vendorTeamLeaders: ['59db20197b651913627144ad'],
      locales: null,
      organization: '1',
      epids: null,
      groups: ['6e0bd6ed-dd30-43d3-8a54-e0f6710de2f5'],
      assigneeType: 'assignee'
    }],
    dataOptions: 'none',
    tags: null,
    qaSampleSize: 0,
    dmQaSampleSize: 0,
    cancelationInfo: null,
    numberOfComments: null,
    jiraTicket: ''
  },
  typeConfiguration: {
    fileName: 'duplicates test file - staging2.tsv',
    selectedDuplicateConfigurationId: '5df2319db8c61b334ca22f48'
  }
};
exports.mockJobHeader = mockJobHeader;
var mockAgent = {
  display: 'Roy Agent',
  userId: '59e46dc5b9d7f33225eec311',
  userName: 'rbenenosh',
  firstName: 'Roy',
  lastName: 'Agent',
  role: 'Agent',
  rank: 2147483647,
  groups: [{
    organizationId: 0,
    organizationName: null,
    groupId: 'cff42ee8-d5d4-42be-83a5-2ab3612741a4',
    groupName: null
  }],
  email: 'rbenenosh@ebay.com',
  languages: 5[('English', 'French', 'Spanish', 'German', 'Italian')],
  tmsAuthorizations: false,
  createTmsUser: null,
  organization: 1,
  organizationName: null,
  groupIds: ['cff42ee8-d5d4-42be-83a5-2ab3612741a4'],
  active: false,
  isUserSupervisor: false
};
exports.mockAgent = mockAgent;
var mockSupervisor = {
  display: 'Roy Admin',
  userId: '59e46dc5b9d7f33225eec311',
  userName: 'rbenenosh',
  firstName: 'Roy',
  lastName: 'Admin',
  role: 'Administrator',
  rank: 2147483647,
  groups: [{
    organizationId: 0,
    organizationName: null,
    groupId: 'cff42ee8-d5d4-42be-83a5-2ab3612741a4',
    groupName: null
  }],
  email: 'rbenenosh@ebay.com',
  languages: 5[('English', 'French', 'Spanish', 'German', 'Italian')],
  tmsAuthorizations: false,
  createTmsUser: null,
  organization: 1,
  organizationName: null,
  groupIds: ['cff42ee8-d5d4-42be-83a5-2ab3612741a4'],
  active: false,
  isUserSupervisor: true
};
exports.mockSupervisor = mockSupervisor;