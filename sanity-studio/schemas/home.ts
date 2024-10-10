import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        defineField({
            name: 'topLeft',
            title: 'Top Left Content',
            type: 'string',
        }),
        defineField({
            name: 'topRight',
            title: 'Top Right Content',
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
                            title: 'Link',
                            type: 'text',
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
                            name: 'description',
                            title: 'Description',
                            type: 'text',
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