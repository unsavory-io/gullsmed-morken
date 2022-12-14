import sanity from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { toHTML } from '@portabletext/to-html';

const SanityClient = sanity({
  projectId: '3o18olen',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: false,
});

const builder = imageUrlBuilder(SanityClient);
const SanityImage = (source) => builder.image(source);
const SanityBlocks = (blocks, options) => toHTML(blocks, options);

export { SanityClient, SanityImage, SanityBlocks };
