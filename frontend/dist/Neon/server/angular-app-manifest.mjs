
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
    'index.csr.html': {size: 919, hash: '28be255629261bbe4f4235960044c0b9538c5247910a8bb63fe122683f27ec16', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1459, hash: '72d1152c5ecc9823f338a709d97ddc61922f38065d16b57d8e59819fe7510c7f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 79852, hash: '7bcf8bb64714d11de7d3432e77cbcb49d9a06ac6801a759f1be07367dc66f363', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
