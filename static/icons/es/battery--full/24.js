export default {
  elem: 'svg',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 32 32',
    width: 24,
    height: 24,
  },
  content: [
    {
      elem: 'path',
      attrs: {
        d:
          'M24 24H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1v1a2 2 0 0 1-2 2zM6 10v12h18v-3h3v-6h-3v-3z',
      },
    },
    { elem: 'path', attrs: { d: 'M22 12v8H8v-8z' } },
  ],
  name: 'battery--full',
  size: 24,
};
