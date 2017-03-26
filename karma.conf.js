const path = require('path');
const webpackConfig = require('./webpack.config');
const ENV = process.env.npm_lifecycle_event;
const isTestWatch = ENV === 'test-watch';

module.exports = function (config) {
  const _config = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: './karma-shim.js', watched: false }
    ],
    exclude: [],
    preprocessors: {
      './karma-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },
    reporters: ["mocha"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  };

  if (!isTestWatch) {
    _config.reporters.push("coverage");

    _config.coverageReporter = {
      dir: 'coverage/',
      reporters: [{
        type: 'json',
        dir: 'coverage',
        subdir: 'json',
        file: 'coverage-final.json'
      }]
    };
  }

  config.set(_config);

};
