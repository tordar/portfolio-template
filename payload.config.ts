import { buildConfig } from 'payload/config';
import path from 'path';

// Import your collections
import Projects from './collections/Projects';
import Media from './collections/Media';
import Pages from './collections/Pages';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- Portfolio Admin',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },
  collections: [
    // Collections are how Payload stores data
    Projects,
    Media,
    Pages,
    // Users collection for authentication
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
}); 