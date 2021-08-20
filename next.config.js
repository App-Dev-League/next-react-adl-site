const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
    /* config for next-optimized-images */
    // your config for other plugins or the general next.js here...
    // images: {
    //   path: "/src/assets/image",
    // },
    target: "serverless",
  })
