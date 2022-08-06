const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Danilo Reinert',
    description:
      'Lorem ipsum dolor sit amet ipsum dolor sit amet lorem dolor sit amet.',
    twitterUsername: '@daniloreinert',
    image: '/danilo-reinert.jpeg',
    siteUrl: 'https://www.daniloreinert.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'posts'),
        name: 'blog',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          placeholder: 'blurred',
          quality: 95,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: 'transparent',
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src', 'assets', 'images'),
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-highlight-code',
            options: {
              terminal: 'none',
              lineNumbers: true,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1110,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-plugin-catch-links',
        ],
      },
    },
  ],
}
