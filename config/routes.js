const { createProxyMiddleware } = require('http-proxy-middleware');

const routes = [
  {
    path: '/listings',
    target: 'http://localhost:3000',
    rewrite: { '^/listings': '/listings' },
  },
  {
    path: '/listings-query',
    target: 'http://localhost:3000',
    rewrite: { '^/listings-query': '/listings' },
  },
  {
    path: '/stays',
    target: 'http://localhost:3000',
    rewrite: { '^/stays': '/stays' },
  },
];

const setupProxies = (app) => {
  routes.forEach(({ path, target, rewrite }) => {
    app.use(
      path,
      createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: rewrite,
      })
    );
  });
};

module.exports = setupProxies;
