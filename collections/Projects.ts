import { CollectionConfig } from 'payload/types';

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        }
      ]
    },
    {
      name: 'projectType',
      type: 'select',
      options: [
        {
          label: 'Web Design',
          value: 'web',
        },
        {
          label: 'Graphic Design',
          value: 'graphic',
        },
        {
          label: 'Photography',
          value: 'photo',
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'clientName',
      type: 'text',
    },
    {
      name: 'projectDate',
      type: 'date',
    },
    {
      name: 'projectURL',
      type: 'text',
    },
  ],
};

export default Projects; 