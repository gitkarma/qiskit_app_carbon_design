(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Contrast20 = factory());
}(this, (function () { 'use strict';

  var _20 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 20,
      height: 20,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M29.37 11.84a13.6 13.6 0 0 0-1.06-2.51A14.17 14.17 0 0 0 25.9 6.1a14 14 0 1 0 0 19.8 14.17 14.17 0 0 0 2.41-3.23 13.6 13.6 0 0 0 1.06-2.51 14 14 0 0 0 0-8.32zM4 16A12 12 0 0 1 16 4v24A12 12 0 0 1 4 16z',
        },
      },
    ],
    name: 'contrast',
    size: 20,
  };

  return _20;

})));
