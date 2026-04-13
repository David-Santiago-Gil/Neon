
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
    'index.csr.html': {size: 12712, hash: '0a457fa39b6f3c09e23f1b8a8c6a7c011291beb202a4703cda4a9588fcd55be6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12927, hash: '4fb2b89fa946ef8f8ca284652b6d78b7f8ec01ed2c7c4c8d7d690075520513db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81304, hash: '04a7fd37ebf0d0ec96ef94b63c16884098f088c6ebd6e97d824a4e0ace6401e7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3YGXT526.css': {size: 365, hash: 'gUiPpHVwZy0', text: () => import('./assets-chunks/styles-3YGXT526_css.mjs').then(m => m.default)}
  },
};
