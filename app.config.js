module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      ...config.extra,
      sanityProjectId: process.env.SANITY_PROJECT_ID,
      sanityDataset: process.env.SANITY_DATASET,
      sanityApiVersion: process.env.SANITY_API_VERSION,
    },
  };
};
