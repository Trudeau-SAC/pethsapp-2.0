import Constants from 'expo-constants';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { useEffect, useState } from 'react';

export const client = createClient({
  projectId: '8if5onrn',
  dataset: Constants.expoConfig.extra.sanityDataset,
  apiVersion: '2023-07-01',
  useCdn: true,
});

export const imageBuilder = imageUrlBuilder(client);

/**
 * Returns the data requested from Sanity
 *
 * @param {string} query Sanity query
 * @returns The data requested from Sanity
 */
export const useSanityData = (query, params) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await client.fetch(query, params);
      if (!ignore) {
        setData(result);
      }
    }
    fetchData();

    return () => {
      ignore = true;
    };
  }, [query, params]);

  return data;
};

/**
 * Returns the data requested from Sanity, and updates it in realtime
 *
 * @param {string} query Sanity query
 * @param {object} params Sanity query parameters
 * @returns The data requested from Sanity
 */
export const useSanityDataRealtime = (query, params) => {
  const initialData = useSanityData(query, params);
  const [data, setData] = useState(initialData);

  // Set the initial data
  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  useEffect(() => {
    const subscription = client.listen(query, params).subscribe((update) => {
      // Update data based on mutation transition
      switch (update.transition) {
        case 'update':
          setData((data) => {
            const index = data.findIndex((d) => d._id === update.documentId);
            if (index === -1) return data;
            let newData = [...data];
            newData[index] = update.result;
            return newData;
          });
          break;
        case 'appear':
          setData((data) => [update.result, ...data]);
          break;
        case 'disappear':
          setData((data) => {
            return data.filter((d) => d._id !== update.documentId);
          });
          break;
        default:
          console.warn('Unknown mutation transition');
          break;
      }
    });

    return () => subscription.unsubscribe();
  }, [query, params]);

  return data;
};
