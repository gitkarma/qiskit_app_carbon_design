(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextSubscript20 = factory());
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
          d: 'M26 25h-6v-6h4v-2h-4v-2h6v6h-4v2h4v2zM5 7v2h7v16h2V9h7V7H5z',
        },
      },
    ],
    name: 'text--subscript',
    size: 20,
  };

  return _20;

})));
