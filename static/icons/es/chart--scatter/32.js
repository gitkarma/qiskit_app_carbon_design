export default {
  elem: 'svg',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 32 32',
    width: 32,
    height: 32,
  },
  content: [
    { elem: 'path', attrs: { d: 'M30 30H4a2 2 0 0 1-2-2V2h2v26h26z' } },
    { elem: 'circle', attrs: { cx: '10', cy: '22', r: '2' } },
    { elem: 'circle', attrs: { cx: '14', cy: '15', r: '2' } },
    { elem: 'circle', attrs: { cx: '22', cy: '15', r: '2' } },
    { elem: 'circle', attrs: { cx: '26', cy: '6', r: '2' } },
    { elem: 'circle', attrs: { cx: '14', cy: '8', r: '2' } },
  ],
  name: 'chart--scatter',
  size: 32,
};
