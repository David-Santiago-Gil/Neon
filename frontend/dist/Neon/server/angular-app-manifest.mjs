
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
    'index.csr.html': {size: 12817, hash: 'f9b1ff23c4530c9e3976d72b9307ed68422517cfa1ff77d95a5e851e0a94e209', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13033, hash: '88f98edcee77d20fde11f24c9ed79933e458a70cbcbc3a371c3d84f1bc7c47ec', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81409, hash: '9d1595364983b0367b300a1f63794cf061d6a450d74faac44fb3329f961842a4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3YGXT526.css': {size: 365, hash: 'gUiPpHVwZy0', text: () => import('./assets-chunks/styles-3YGXT526_css.mjs').then(m => m.default)}
  },
};
