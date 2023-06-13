import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wsb.app',
  appName: 'front-app',
  webDir: 'dist/font-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
