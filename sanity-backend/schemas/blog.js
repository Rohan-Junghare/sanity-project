export default {
    name: 'blog',
    title: 'blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'content',
        title: 'Title',
        type: 'Content',
      },
      {
        title: 'Launch Scheduled At',
        name: 'launchAt',
        type: 'datetime'
      },
    ]
}