import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'top',
            title: 'Top Content',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'content',
                            title: 'Content',
                            type: 'text',
                        }),
                        defineField({
                            name: 'link',
                            title: 'Project Link',
                            type: 'url',
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'mainContent',
            title: 'Main Content',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'subtitle',
                            title: 'Subtitle',
                            type: 'string',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'image',
                            title: 'Project Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'bottomLeft',
            title: 'Bottom Left Content',
            type: 'string',
        }),
        defineField({
            name: 'bottomRight',
            title: 'Bottom Right Content',
            type: 'string',
        }),
    ],
})