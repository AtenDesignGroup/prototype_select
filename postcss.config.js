const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 1,
      features: {
        // Custom properties get poyfilled for IE so no need to process them.
        'custom-properties': false,
      },
    }),
  ],
};
