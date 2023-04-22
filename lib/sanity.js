import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '8if5onrn',
  dataset: 'production',
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2023-04-21', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getAnnouncements() {
  const announcements = await client.fetch('*[_type == "announcement"]');
  return announcements;
}
