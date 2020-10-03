/* eslint-disable no-param-reassign */

module.exports = {
  publicPath: '/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Scripting API - Raid Gaming';
      return args;
    });
  },
};
