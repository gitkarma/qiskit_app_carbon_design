(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.FolderDetails32 = factory());
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
      { elem: 'path', attrs: { d: 'M16 20h14v2H16zm0 4h14v2H16zm0 4h7v2h-7z' } },
      {
        elem: 'path',
        attrs: {
          d:
            'M14 26H4V6h7.17l3.42 3.41.58.59H28v8h2v-8a2 2 0 0 0-2-2H16l-3.41-3.41A2 2 0 0 0 11.17 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10z',
        },
      },
    ],
    name: 'folder--details',
    size: 32,
  };

  return _32;

})));
