import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Resources = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'GeneralSansItalic' }}>Resources</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Resources;
