import Constants from 'expo-constants';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: Constants.expoConfig.extra.sanityProjectId,
  dataset: Constants.expoConfig.extra.sanityDataset,
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2023-04-21', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export const imageBuilder = imageUrlBuilder(client);
