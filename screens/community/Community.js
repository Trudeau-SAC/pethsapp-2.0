import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Card from '../../components/Card';

const Community = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'GeneralSansItalic' }}>Community</Text>
      <Button
        title="Clubs List"
        onPress={() => navigation.navigate('Clubs List')}
      />
      <Card title="Clubs List" />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Community;
