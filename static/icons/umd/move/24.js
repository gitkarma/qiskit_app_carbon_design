(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Move24 = factory());
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
            'M25 11l-1.41 1.41L26.17 15H17V5.83l2.59 2.58L21 7l-5-5-5 5 1.41 1.41L15 5.83V15H5.83l2.58-2.59L7 11l-5 5 5 5 1.41-1.41L5.83 17H15v9.17l-2.59-2.58L11 25l5 5 5-5-1.41-1.41L17 26.17V17h9.17l-2.58 2.59L25 21l5-5-5-5z',
        },
      },
    ],
    name: 'move',
    size: 24,
  };

  return _24;

})));
