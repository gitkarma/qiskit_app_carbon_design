(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Temperature32 = factory());
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
            'M13 17.26V6a4 4 0 0 0-8 0v11.26a7 7 0 1 0 8 0zM9 4a2 2 0 0 1 2 2v7H7V6a2 2 0 0 1 2-2zm0 24a5 5 0 0 1-2.5-9.33l.5-.28V15h4v3.39l.5.28A5 5 0 0 1 9 28zM20 4h10v2H20zm0 6h7v2h-7zm0 6h10v2H20zm0 6h7v2h-7z',
        },
      },
    ],
    name: 'temperature',
    size: 32,
  };

  return _32;

})));
