(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.AddComment32 = factory());
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
            'M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84z',
        },
      },
      { elem: 'path', attrs: { d: 'M17 9h-2v4h-4v2h4v4h2v-4h4v-2h-4V9z' } },
    ],
    name: 'add-comment',
    size: 32,
  };

  return _32;

})));
