(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Upload32 = factory());
}(this, (function () { 'use strict';

  var _32 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 32,
      height: 32,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d: 'M6 17l1.41 1.41L15 10.83V30h2V10.83l7.59 7.58L26 17 16 7 6 17z',
        },
      },
      {
        elem: 'path',
        attrs: { d: 'M6 8V4h20v4h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4z' },
      },
    ],
    name: 'upload',
    size: 32,
  };

  return _32;

})));
