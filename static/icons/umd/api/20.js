(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Api20 = factory());
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
            'M26 22a3.86 3.86 0 0 0-2 .57l-3.09-3.1a6 6 0 0 0 0-6.94L24 9.43a3.86 3.86 0 0 0 2 .57 4 4 0 1 0-4-4 3.86 3.86 0 0 0 .57 2l-3.1 3.09a6 6 0 0 0-6.94 0L9.43 8A3.86 3.86 0 0 0 10 6a4 4 0 1 0-4 4 3.86 3.86 0 0 0 2-.57l3.09 3.1a6 6 0 0 0 0 6.94L8 22.57A3.86 3.86 0 0 0 6 22a4 4 0 1 0 4 4 3.86 3.86 0 0 0-.57-2l3.1-3.09a6 6 0 0 0 6.94 0l3.1 3.09a3.86 3.86 0 0 0-.57 2 4 4 0 1 0 4-4zm0-18a2 2 0 1 1-2 2 2 2 0 0 1 2-2zM4 6a2 2 0 1 1 2 2 2 2 0 0 1-2-2zm2 22a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm10-8a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm10 8a2 2 0 1 1 2-2 2 2 0 0 1-2 2z',
        },
      },
    ],
    name: 'api',
    size: 20,
  };

  return _20;

})));