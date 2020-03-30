"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suggestedimageListMock = exports.imageListMock = exports.productDataMock = void 0;
var productDataMock = {
  category: 'cats & cartoons (15032)>Smart',
  title: 'Cat for sale',
  brand: 'Grafild',
  color: 'Orange'
};
exports.productDataMock = productDataMock;
var imageListMock = [{
  imageUrl: 'https://www.denverpost.com/wp-content/uploads/2016/05/20120419__20120422_E1_AE22SCPIRATESp1.jpg?w=600',
  copyright: '1',
  subcopyright: null,
  imageSizeContract: {
    widthSize: 50,
    heightSize: 221
  },
  imageDecisionContract: {
    rejectReasons: [],
    action: ''
  }
}, {
  imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/811KEbZlORL.png',
  copyright: '2',
  subcopyright: null,
  imageSizeContract: {
    widthSize: 140,
    heightSize: 1221
  },
  imageDecisionContract: {
    rejectReasons: [],
    action: ''
  }
}, {
  imageUrl: 'https://i.pinimg.com/originals/ba/ef/3e/baef3e34539a8a745517fd1e2ba1bf8c.jpg',
  copyright: '3',
  subcopyright: null,
  imageSizeContract: {
    widthSize: 550,
    heightSize: 1190
  },
  imageDecisionContract: {
    rejectReasons: [],
    action: ''
  }
}];
exports.imageListMock = imageListMock;
var suggestedimageListMock = [{
  imageUrl: 'https://tickets.hopewelltheater.com/uplimage/looneytunes300x300.jpg',
  copyright: '1',
  subcopyright: null,
  imageSizeContract: {
    widthSize: 15,
    heightSize: 621
  },
  imageDecisionContract: {
    rejectReasons: ['Box'],
    action: 'DELETED'
  }
}, {
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Simpsons_FamilyPicture.png/220px-Simpsons_FamilyPicture.png',
  copyright: '2',
  subcopyright: null,
  imageSizeContract: {
    widthSize: 1540,
    heightSize: 21
  },
  imageDecisionContract: {
    rejectReasons: ['Background'],
    action: 'DELETED'
  }
}, {
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Woody_Woodpecker.png/220px-Woody_Woodpecker.png',
  copyright: '3',
  subcopyright: null,
  imageSizeContract: {
    widthSize: 57,
    heightSize: 880
  },
  imageDecisionContract: {
    rejectReasons: ['Background', 'Box'],
    action: 'DELETED'
  }
}, {
  imageUrl: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/10/26/1319648577_9444/539w.jpg',
  copyright: '4',
  subcopyright: null,
  imageSizeContract: {
    widthSize: 1235,
    heightSize: 6673
  },
  imageDecisionContract: {
    rejectReasons: ['Background', 'Box'],
    action: 'DELETED'
  }
}];
exports.suggestedimageListMock = suggestedimageListMock;