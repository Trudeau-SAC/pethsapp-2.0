import { useTheme } from '@react-navigation/native';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

const Expander = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();

  const styles = StyleSheet.create({
    expander: {
      borderRadius: 16,
      backgroundColor: theme.colors.background,
      paddingVertical: 18,
      paddingHorizontal: 20,
      borderWidth: 1,
    },
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: isExpanded ? 18 : 0,
    },
  });

  const handlePressed = () => {
    setIsExpanded(!isExpanded);
    console.log(`Expanded: ${!isExpanded}`);
  };

  return (
    <Pressable onPress={handlePressed} style={styles.expander}>
      <View style={styles.topRow}>
        <Text variant="heading7" color="text">
          {title}
        </Text>
        <Feather name="maximize-2" size={20} color="black" />
      </View>
      {isExpanded && children}
    </Pressable>
  );
};
export default Expander;
