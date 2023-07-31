import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';

const StudentServices = () => {
  return (
    <>
      <StatusBar style="light" />

      <WebView
        source={{
          uri: 'https://sharp-mcclintock-f1dbd1.netlify.app/resources/services.md',
        }}
      />
    </>
  );
};

export default StudentServices;
