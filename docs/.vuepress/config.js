module.exports = {
  base: '/',
  title: 'My Library',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/hero.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Github', link: 'https://github.com/kevincobain2000' },
    ],
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: [
          'introduction/guide'
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          'components/component-a',
          'components/component-b'
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
}