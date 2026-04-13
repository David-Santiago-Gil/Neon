
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
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
    'index.csr.html': {size: 12712, hash: '3e1577504f393ce376df4df4aa4a7b3bf7b37983de4967c6d19fcd9bcb9ed736', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12927, hash: 'ef0d2e028038ef841fb64df78a190a0e3abc48d82d7691c3e50db0ee6c60281d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81304, hash: 'abebfb8811d83880306c765ac03a32e03d55558bdb2926e2268d74ee15cbd2dd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3YGXT526.css': {size: 365, hash: 'gUiPpHVwZy0', text: () => import('./assets-chunks/styles-3YGXT526_css.mjs').then(m => m.default)}
  },
};
