(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Scale32 = factory());
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
            'M13 17H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm-6 8v-6h6v6z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M19 21v2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v6h2V7h14v14',
        },
      },
    ],
    name: 'scale',
    size: 32,
  };

  return _32;

})));
