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
      borderColor: theme.colors.border,
      borderRadius: 16,
      backgroundColor: theme.colors.background,
      paddingVertical: theme.spacing.s4_5,
      paddingHorizontal: theme.spacing.s5,
      borderWidth: 1,
    },
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: isExpanded ? theme.spacing.s4_5 : 0,
      gap: theme.spacing.s5,
    },
  });

  const handlePressed = () => {
    setIsExpanded(!isExpanded);
    console.log(`Expanded: ${!isExpanded}`);
  };

  return (
    <Pressable onPress={handlePressed} style={styles.expander}>
      <View style={styles.topRow}>
        <View style={{ flex: 1 }}>
          <Text variant="heading7" color="text">
            {title}
          </Text>
        </View>
        <Feather name="maximize-2" size={20} color={theme.colors.text} />
      </View>
      {isExpanded && children}
    </Pressable>
  );
};
export default Expander;
