(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Headphones24 = factory());
}(this, (function () { 'use strict';

  var _24 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 24,
      height: 24,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M25 16v-1a9 9 0 0 0-18 0v1a5 5 0 0 0 0 10h2V15a7 7 0 0 1 14 0v11h2a5 5 0 0 0 0-10zM4 21a3 3 0 0 1 3-3v6a3 3 0 0 1-3-3zm21 3v-6a3 3 0 0 1 0 6z',
        },
      },
    ],
    name: 'headphones',
    size: 24,
  };

  return _24;

})));
