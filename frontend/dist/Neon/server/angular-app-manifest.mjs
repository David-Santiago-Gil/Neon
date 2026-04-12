
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 813, hash: '52c4d8496c1c46266306c851817c1aaafbbb248de161dc38851c36af110abd6e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1353, hash: '5acf581fb93f77c2f50d8f61ed1f425246d27cf80455f4e31a47c2e3cc4ba038', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81660, hash: '966ea63726bcdf8bd342cc48a0ccee33e1c994e0ab06a9b67a5ca4fc7e674894', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
