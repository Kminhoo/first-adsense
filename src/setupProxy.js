const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/common.do',
    createProxyMiddleware({
      target: 'https://www.dhlottery.co.kr',
      // changeOrigin: true,
      // secure: false,
      // pathRewrite: {
      //   '^/common.do': '/common.do',
      // },
    })
  );
};
