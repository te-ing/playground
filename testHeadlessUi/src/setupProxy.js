const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.dev.myd.world",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );

  app.use(
    "/premise",
    createProxyMiddleware({
      target: "https://c3po-snplab.synology.me:17070",
      changeOrigin: true,
      pathRewrite: {
        "^/premise": "",
      },
    })
  );
};
