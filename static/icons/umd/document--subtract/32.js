(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.DocumentSubtract32 = factory());
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
            'M25.7 9.3l-7-7A.91.91 0 0 0 18 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10a.91.91 0 0 0-.3-.7zM18 4.4l5.6 5.6H18zM24 28H8V4h8v6a2 2 0 0 0 2 2h6z',
        },
      },
      { elem: 'path', attrs: { d: 'M11 19h10v2H11z' } },
    ],
    name: 'document--subtract',
    size: 32,
  };

  return _32;

})));
