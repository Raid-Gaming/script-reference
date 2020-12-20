/* eslint-disable no-param-reassign */

const appName = 'Scripting API - Raid Gaming';

module.exports = {
  publicPath: '/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = appName;
      return args;
    });
  },
  pwa: {
    name: appName,
    themeColor: '#d4183b',
    msTileColor: '#d4183b',
    appleMobileWebAppCapable: 'yes',
  },
};
