(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ZoomIn16 = factory());
}(this, (function () { 'use strict';

  var _16 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 16 16',
      width: 16,
      height: 16,
    },
    content: [
      { elem: 'path', attrs: { d: 'M9 6H7V4H6v2H4v1h2v2h1V7h2z' } },
      {
        elem: 'path',
        attrs: {
          d:
            'M10.7 10c.8-1 1.3-2.2 1.3-3.5C12 3.5 9.5 1 6.5 1S1 3.5 1 6.5 3.5 12 6.5 12c1.3 0 2.5-.5 3.5-1.3l3.8 3.8.7-.7-3.8-3.8zm-4.2 1C4 11 2 9 2 6.5S4 2 6.5 2 11 4 11 6.5 9 11 6.5 11z',
        },
      },
    ],
    name: 'zoom--in',
    size: 16,
  };

  return _16;

})));
