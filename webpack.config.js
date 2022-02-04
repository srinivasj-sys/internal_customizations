const baseConfigFunction = require('@stratum/framework/webpack/webpack-base.config.js');
// const path = require('path');
const merge = require('webpack-merge');

module.exports = env => {
  const baseConfig = baseConfigFunction(env, __dirname);
  const mergedConfig = merge(baseConfig, {
    devServer: {
      // Port 3000 is configured as part of the OIDC redirect_uri, so it must be used when not using mock data
      port: process.env.MOCK === 'true' ? undefined : 3000,
      host: 'localhost',
      proxy: {
        '/SASRiskGovernanceFramework/rest': {
          target: process.env.RGF_MICRO_PROXY,
          changeOrigin: true
        },
        '/SASRiskCirrusBuilder/rest': {
          target: process.env.UI_MICRO_PROXY,
          changeOrigin: true
        }
      }
    },
    watchOptions: {
      aggregateTimeout: Number(process.env.WEBPACK_WATCH_AGGREGATE_TIMEOUT) || 300
    }
    // `components` entry is used for sample custom components
    // resolve: {
    //   alias: {
    //     components: path.join(__dirname, './components')
    //   }
    // }
  });
  // mergedConfig.modules.rules = mergedConfig.module.rules.map(rule => {
  //   if (
  //     Array.isArray(rule.include) &&
  //     rule.include.length > 0 &&
  //     rule.include.some(inc => inc.test('gen'))
  //   ) {
  //     // this should be our codegen rule
  //     return {
  //       ...rule,
  //       include: [...rule.include, /components/];
  //     }
  //   } else {
  //     return rule;
  //   }
  // });
  return mergedConfig;
};
