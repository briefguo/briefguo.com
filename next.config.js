// next.config.js
'use strict';

const { pick } = require('lodash');

const config = {
  distDir: 'build/next',

  // 注入到next的环境变量、跟node环境的变量不同，这些会随build打到page里去
  // https://nextjs.org/blog/next-8/#build-time-environment-configuration
  env: pick(process.env, ['PORT', 'SUNMI_ENV', 'SUNMI_PROD_URL', 'BUILD_TAG']),
  // https://github.com/zeit/next-plugins/tree/master/packages/next-bundle-analyzer
};

// README: next-typescript 始终格式化成 ['ts','tsx']
// config.pageExtensions = ['tsx'];

module.exports = config;
