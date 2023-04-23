import { PortableText } from '@portabletext/react-native';

import Text from './Text';

const components = {
  block: {
    h1: ({ children }) => (
      <Text color="text" variant="heading5">
        {children}
      </Text>
    ),
    normal: ({ children }) => (
      <Text color="text" variant="body1">
        {children}
      </Text>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <Text style={{ fontWeight: 'bold' }}>{children}</Text>
    ),
    em: ({ children }) => {
      return (
        <Text style={{ fontFamily: 'GeneralSansItalic' }}>{children}</Text>
      );
    },
  },
};

export default function RichText({ value }) {
  return <PortableText value={value} components={components} />;
}
