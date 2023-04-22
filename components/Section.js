import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';

/**
 * A section is a container for a group of components with consistent spacing between them.
 */
export default function Section({ children }) {
  const theme = useTheme();

  return (
    <View>
      {children.map((child, index) => (
        <View
          key={index}
          style={{
            marginBottom: index === children.length - 1 ? 0 : theme.spacing.s4,
          }}
        >
          {child}
        </View>
      ))}
    </View>
  );
}
