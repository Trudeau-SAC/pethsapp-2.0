import { StyleSheet, Text, View, Button } from 'react-native';
import RectangleCard from '../../components/RectangleCard';

const Community = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'GeneralSansItalic' }}>Community</Text>
      <RectangleCard
        title="Clubs List"
        subtitle="Clubs Fair, TSAC Event, Soccer Team Tryouts, DECA Meeting..."
        supertitle="Sept. 19"
        navigateTo="Clubs List"
        imageSource={require('../../assets/graphics/clubs-list.png')}
      />
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

export default Community;
