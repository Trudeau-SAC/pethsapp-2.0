import { PortableText } from '@portabletext/react-native';

const components = {};

export default function RichText({ value }) {
  return <PortableText value={value} components={components} />;
}
