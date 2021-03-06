(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Logout32 = factory());
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
          d:
            'M26 30H14a2 2 0 0 1-2-2v-3h2v3h12V4H14v3h-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M11.41 20.59L7.83 17H22v-2H7.83l3.58-3.59L10 10l-6 6 6 6 1.41-1.41z',
        },
      },
    ],
    name: 'logout',
    size: 32,
  };

  return _32;

})));
