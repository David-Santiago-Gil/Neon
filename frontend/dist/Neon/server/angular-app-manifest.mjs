
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
    'index.csr.html': {size: 12712, hash: 'd63aff0e64daeb666e41ad7a88c9d61c0ae0f78c5d5740fbc27a0010354aa20e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12927, hash: 'd0b56e001c3ed33553a1d9392d419a88cec07069049bcbaf92d7a54f3ad0fc46', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 80451, hash: '68fd3819e2a0bc933fc8545cdda88f4a72d5e2cd1417e852a6798b58ddc942df', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3YGXT526.css': {size: 365, hash: 'gUiPpHVwZy0', text: () => import('./assets-chunks/styles-3YGXT526_css.mjs').then(m => m.default)}
  },
};
