export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
            name: 'topLeft',
            title: 'Top Left Content',
            type: 'string',
        },
        {
            name: 'topRight',
            title: 'Top Right Content',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                },
                {
                    name: 'content',
                    title: 'Content',
                    type: 'text',
                },
            ],
        },
        {
            name: 'main',
            title: 'Main Content',
            type: 'object',
            fields: [
                {
                    name: 'subtitle',
                    title: 'Subtitle',
                    type: 'string',
                },
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                },
            ],
        },
        {
            name: 'bottomLeft',
            title: 'Bottom Left Content',
            type: 'string',
        },
        {
            name: 'bottomRight',
            title: 'Bottom Right Content',
            type: 'string',
        },
    ],
}