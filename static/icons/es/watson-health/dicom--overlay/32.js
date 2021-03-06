export default {
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
          'M28 6v20H4V6h24m0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z',
      },
    },
    { elem: 'path', attrs: { d: 'M6 8h10v2H6zm0 4h10v2H6zm0 4h6v2H6z' } },
  ],
  name: 'dicom--overlay',
  size: 32,
};
