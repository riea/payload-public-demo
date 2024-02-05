import type { CollectionConfig } from 'payload/types'

import { LinkFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'

export const Media: CollectionConfig = {
  access: {
    create: () => false,
    delete: () => false,
    read: () => true,
    update: () => true,
  },
  admin: {
    description: 'Creating, updating, and deleting media is disabled for this demo.',
  },
  fields: [
    {
      name: 'alt',
      required: true,
      type: 'text',
    },
    {
      name: 'caption',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [LinkFeature({})],
      }),
      type: 'richText',
    },
  ],
  slug: 'media',
  upload: {
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        height: 300,
        position: 'centre',
        width: 400,
      },
      {
        name: 'card',
        height: 1024,
        position: 'centre',
        width: 768,
      },
      {
        name: 'tablet',
        width: 1024,
        // By specifying `undefined` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: undefined,
        position: 'centre',
      },
    ],
    mimeTypes: ['image/*'],
    staticDir: path.resolve(__dirname, '../../../media'),
  },
}
