(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ListDropdown32 = factory());
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
        attrs: { d: 'M26 6V2H2v10h9v18h19V6zM4 10V4h20v2H11v4zm24 18H13V8h15z' },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M15 11h2v2h-2zm4 0h7v2h-7zm-4 6h2v2h-2zm4 0h7v2h-7zm-4 6h2v2h-2zm4 0h7v2h-7z',
        },
      },
    ],
    name: 'list--dropdown',
    size: 32,
  };

  return _32;

})));
