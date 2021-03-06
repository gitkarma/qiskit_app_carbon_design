(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Package20 = factory());
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
            'M26 30H6a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h3v2H6v12h20V16h-3v-2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M13 20h6v2h-6zm7.59-11.41L17 12.17V2h-2v10.17l-3.59-3.58L10 10l6 6 6-6-1.41-1.41z',
        },
      },
    ],
    name: 'package',
    size: 20,
  };

  return _20;

})));
