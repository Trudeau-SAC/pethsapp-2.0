import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { client } from '../../lib/sanity';
import Layout from '../../components/Layout';
import Text from '../../components/Text';
import BackButton from '../../components/BackButton';
import ChipRow from '../../components/ChipRow';
import Chip from '../../components/Chip';

const StudyResources = () => {
  const theme = useTheme();
  const [resources, setResources] = useState([]);

  return <View></View>;
};

export default StudyResources;
