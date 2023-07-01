import Text from './Text';
import LinkChip from './LinkChip';
import { useTheme } from '@react-navigation/native';
import RichText from './RichText';
import { View } from 'react-native';

const Resource = ({ name, description, link }) => {
  const theme = useTheme();

  return (
    <View>
      {/* Title */}
      <Text
        variant="heading5"
        color="text"
        style={{ marginBottom: theme.spacing.s3 }}
      >
        {name}
      </Text>

      {/* Description */}
      <View style={{ marginBottom: theme.spacing.s8 }}>
        <RichText value={description} />
      </View>

      {/* Link */}
      <LinkChip text={'Visit Website'} link={link} />
    </View>
  );
};

export default Resource;
