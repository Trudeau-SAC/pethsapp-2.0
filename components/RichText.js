import { PortableText } from '@portabletext/react-native';
import { fonts } from '../constants/themes';
import { Image } from 'expo-image';
import { builder } from '../lib/sanity';
import { getImageDimensions } from '@sanity/asset-utils';

import Text from './Text';

const components = {
  types: {
    image: ({ value }) => {
      const { width, height } = getImageDimensions(value);

      return (
        <Image
          style={{
            width: '100%',
            aspectRatio: width / height,
            borderRadius: 16,
          }}
          source={builder.image(value).url()}
        />
      );
    },
  },
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
      <Text style={{ fontFamily: fonts.bold }}>{children}</Text>
    ),
    em: ({ children }) => (
      <Text style={{ fontFamily: fonts.italic }}>{children}</Text>
    ),
  },
};

export default function RichText({ value }) {
  return <PortableText value={value} components={components} />;
}
