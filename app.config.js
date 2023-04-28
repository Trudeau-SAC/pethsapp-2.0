module.exports = {
  name: 'pethsapp',
  slug: 'pethsapp',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icons/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/icons/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/icons/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  web: {
    favicon: './assets/icons/favicon.png',
  },
  extra: {
    sanityProjectId: process.env.SANITY_PROJECT_ID,
    sanityDataset: process.env.SANITY_DATASET,
  },
};
