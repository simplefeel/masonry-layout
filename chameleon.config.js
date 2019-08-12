// 设置静态资源的线上路径
const publicPath = "//www.static.chameleon.com/cml";
// 设置api请求前缀
const apiPrefix = "https://api.chameleon.com";

cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  platforms: ["web", "wx", "alipay"],
  buildInfo: {
    wxAppId: "123456"
  },
  wx: {
    dev: {},
    build: {
      apiPrefix
    },
    export: {
      entry: ["src/components"]
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix
    },
    export: {
      entry: ["src/components"]
    }
  },
  weex: {
    dev: {},
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
});
