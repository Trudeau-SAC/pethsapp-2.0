import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';

const ClubFunding = () => {
  return (
    <>
      <StatusBar style="light" />
      <WebView source={{ uri: 'https://www.tsac.ca/clubs/promotion' }} />
    </>
  );
};

export default ClubFunding;
