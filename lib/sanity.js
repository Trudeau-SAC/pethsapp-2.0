import Constants from 'expo-constants';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '8if5onrn',
  dataset: Constants.expoConfig.extra.sanityDataset,
  apiVersion: '2023-07-01',
  useCdn: true,
});

export const imageBuilder = imageUrlBuilder(client);
