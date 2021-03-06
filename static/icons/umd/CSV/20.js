(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Csv20 = factory());
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
            'M28 9l-2 13-2-13h-2l2.516 14h2.968L30 9h-2zM18 23h-6v-2h6v-4h-4a2.002 2.002 0 0 1-2-2v-4a2.002 2.002 0 0 1 2-2h6v2h-6v4h4a2.002 2.002 0 0 1 2 2v4a2.002 2.002 0 0 1-2 2zm-8 0H4a2.002 2.002 0 0 1-2-2V11a2.002 2.002 0 0 1 2-2h6v2H4v10h6z',
        },
      },
    ],
    name: 'CSV',
    size: 20,
  };

  return _20;

})));
