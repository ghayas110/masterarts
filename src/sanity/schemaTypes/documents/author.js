// documents/author.js
export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 200,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
    ],
  };
  