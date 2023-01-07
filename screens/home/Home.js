import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'GeneralSansItalic' }}>Home</Text>
      <Button title="Transit" onPress={() => navigation.navigate('Transit')} />
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

export default Home;
