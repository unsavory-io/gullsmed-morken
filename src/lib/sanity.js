import sanity from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import blocksToHtml from '@sanity/block-content-to-html';

const SanityClient = sanity({
  projectId: '3o18olen',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: false,
});

const builder = imageUrlBuilder(SanityClient);
const SanityImage = (source) => builder.image(source);
const SanityBlocks = (options) => blocksToHtml(options);

export { SanityClient, SanityImage, SanityBlocks };
