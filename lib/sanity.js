import Constants from 'expo-constants';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';

// CDN client
export const client = createClient({
  projectId: '8if5onrn',
  dataset: Constants.expoConfig.extra.sanityDataset,
  apiVersion: '2023-07-01',
  useCdn: true,
});

// Client that always gets the latest data, but is more expensive
export const latestDataClient = createClient({
  projectId: '8if5onrn',
  dataset: Constants.expoConfig.extra.sanityDataset,
  apiVersion: '2021-07-01',
  useCdn: false,
});

export const imageBuilder = imageUrlBuilder(client);

/**
 * Returns the data requested from Sanity
 *
 * @param {string} query Sanity query
 * @returns The data requested from Sanity
 */
export const useSanityData = (query, params, useCdn = true) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      let result;
      console.log('Fetching data!');
      if (useCdn) {
        result = await client.fetch(query, params);
      } else {
        result = await latestDataClient.fetch(query, params);
      }
      if (!ignore) {
        setData(result);
      }
    }
    setData(null);
    fetchData();

    return () => {
      ignore = true;
    };
  }, [query, params, useCdn]);

  return data;
};
