(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ListBulleted32 = factory());
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
      { elem: 'circle', attrs: { cx: '7', cy: '9', r: '3' } },
      { elem: 'circle', attrs: { cx: '7', cy: '23', r: '3' } },
      { elem: 'path', attrs: { d: 'M16 22h14v2H16zm0-14h14v2H16z' } },
    ],
    name: 'list--bulleted',
    size: 32,
  };

  return _32;

})));
