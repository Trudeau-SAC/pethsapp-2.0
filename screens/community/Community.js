import { StyleSheet, View, Button } from 'react-native';
import RectangleCard from '../../components/RectangleCard';
import Text from '../../components/Text';

const Community = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text variant="heading1" color="text">
        Community
      </Text>
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
