export default {
    name: 'allshapes',
    title: 'AllShapes',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'mainGoal',
            title: 'Main Goal',
            type: 'string'
        },
        {
            name: 'suitables',
            title: 'Suitables',
            type: 'array',
            of: [
                {
                    name: 'suitable',
                    title: 'Suitable',
                    type: 'string'
                }
            ]
        },
        {
            name: 'avoids',
            title: 'Avoids',
            type: 'array',
            of: [
                {
                    name: 'avoid',
                    title: 'Avoid',
                    type: 'string'
                }
            ]
        },
        {
            name: 'imgUrl',
            title: 'Img Url',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ]
}