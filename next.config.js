const withImages = require('next-images');

module.exports = withImages({
  webpack(config) {
    return config;
  },
  images: {
    // This avoids having issues with img tag src parameter expected types
    disableStaticImages: true,
  },
  eslint: {
    // We don't lint during the build because GitHub actions performs its own lint step
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
});
