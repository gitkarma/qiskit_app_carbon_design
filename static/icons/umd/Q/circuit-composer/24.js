(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.QCircuitComposer24 = factory());
}(this, (function () { 'use strict';

  var _24 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 24,
      height: 24,
    },
    content: [
      { elem: 'path', attrs: { d: 'M18 9v6h-4V9h-2v14h2v-6h4v6h2V9h-2z' } },
      {
        elem: 'path',
        attrs: {
          d:
            'M30 15h-4V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v9H2v2h4v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9h4zM8 26V6h16v20z',
        },
      },
    ],
    name: 'circuit-composer',
    size: 24,
  };

  return _24;

})));
