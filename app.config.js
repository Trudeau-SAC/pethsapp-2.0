let Config = {
  name: 'pethsapp (Dev)',
  ios: {
    googleServicesFile: process.env.DEV_GOOGLE_SERVICES_PLIST,
    bundleIdentifier: 'com.trudeausac.pethsapp.dev',
  },
  android: {
    googleServicesFile: process.env.DEV_GOOGLE_SERVICES_JSON,
    package: 'com.trudeausac.pethsapp.dev',
  },
  extra: {
    sanityDataset: 'development',
  },
};

if (process.env.APP_ENV === 'production') {
  Config = {
    name: 'pethsapp',
    ios: {
      googleServicesFile: process.env.PROD_GOOGLE_SERVICES_PLIST,
      bundleIdentifier: 'com.trudeausac.pethsapp',
    },
    android: {
      googleServicesFile: process.env.PROD_GOOGLE_SERVICES_JSON,
      package: 'com.trudeausac.pethsapp',
    },
    extra: {
      sanityDataset: 'production',
    },
  };
} else if (process.env.APP_ENV === 'staging') {
  Config = {
    name: 'pethsapp (Staging)',
    ios: {
      googleServicesFile: process.env.STAGING_GOOGLE_SERVICES_PLIST,
      bundleIdentifier: 'com.trudeausac.pethsapp.staging',
    },
    android: {
      googleServicesFile: process.env.STAGING_GOOGLE_SERVICES_JSON,
      package: 'com.trudeausac.pethsapp.staging',
    },
    extra: {
      sanityDataset: 'staging',
    },
  };
}

const config = {
  name: Config.name,
  owner: 'trudeausac',
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
    googleServicesFile: Config.ios.googleServicesFile,
    supportsTablet: true,
    config: {
      usesNonExemptEncryption: false,
    },
    bundleIdentifier: Config.ios.bundleIdentifier,
    infoPlist: {
      UIBackgroundModes: ['fetch', 'remote-notification'],
      UIViewControllerBasedStatusBarAppearance: true,
    },
  },
  android: {
    googleServicesFile: Config.android.googleServicesFile,
    package: Config.android.package,
    adaptiveIcon: {
      foregroundImage: './assets/icons/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  web: {
    favicon: './assets/icons/favicon.png',
  },
  plugins: [
    '@react-native-firebase/app',
    [
      'expo-build-properties',
      {
        ios: {
          useFrameworks: 'static',
        },
      },
    ],
  ],
  extra: {
    ...Config.extra,
    eas: {
      projectId: '7925a464-a7a6-435b-8852-f8b67f661ac7',
    },
  },
};

export default config;
