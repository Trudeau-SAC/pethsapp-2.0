import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

/**
 * Sets up push notifications
 */
export function setupPushNotifications() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

export async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Please enable notifications in your settings.');
      return null;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert('Must use physical device for Push Notifications');
    return null;
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

/**
 * Send a request to the server to register the device's push token
 *
 * @param {string} token
 * @param {object} notificationSettings
 */
export async function registerDevicePushTokenAsync(
  token,
  notificationSettings
) {
  const body = {
    expoPushToken: token,
    settings: notificationSettings,
  };

  try {
    const res = await fetch(
      'https://3b81-99-229-189-51.ngrok-free.app/api/pethsapp/registerUser',
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Accept-encoding': 'gzip, deflate',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );
    console.log(res);
  } catch (error) {
    console.error('Error registering device push token: ', error);
  }
}
