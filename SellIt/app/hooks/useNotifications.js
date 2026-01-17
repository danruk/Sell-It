import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-notifications';
import expoPushTokensApi from '../api/expoPushTokens';

const useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();
    if (notificationListener) {
      Notifications.addNotificationReceivedListener(notificationListener);
    }
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const { status } = await Permissions.requestPermissionsAsync();
      if (status !== 'granted') return;

      const token = (await Notifications.getExpoPushTokenAsync()).data;
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log('Error getting the token', error);
    }
  };
};

export default useNotifications;
