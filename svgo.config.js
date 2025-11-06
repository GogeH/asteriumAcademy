module.exports = {
  multipass: true,
  plugins: [
    'removeDoctype',
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEmptyAttrs',
    'removeEmptyText',
    'removeEmptyContainers',
    'cleanupAttrs',
    'convertStyleToAttrs',
    'removeDimensions',
    'removeAttrs',
  ],
};
