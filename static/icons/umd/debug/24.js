(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Debug24 = factory());
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
            'M29.83 20l.34-2-5.17-.85v-4.38l5.06-1.36-.51-1.93-4.83 1.29A9 9 0 0 0 20 5V2h-2v2.23a8.81 8.81 0 0 0-4 0V2h-2v3a9 9 0 0 0-4.71 5.82L2.46 9.48 2 11.41l5 1.36v4.38L1.84 18l.32 2L7 19.18a8.9 8.9 0 0 0 .82 3.57l-4.53 4.54 1.42 1.42 4.19-4.2a9 9 0 0 0 14.2 0l4.19 4.2 1.42-1.42-4.54-4.54a8.9 8.9 0 0 0 .83-3.57zM15 25.92A7 7 0 0 1 9 19v-6h6zM9.29 11a7 7 0 0 1 13.42 0zM23 19a7 7 0 0 1-6 6.92V13h6z',
        },
      },
    ],
    name: 'debug',
    size: 24,
  };

  return _24;

})));