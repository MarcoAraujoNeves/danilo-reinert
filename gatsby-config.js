const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'posts'),
        name: 'blog',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
              maxWidth: 730,
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-plugin-catch-links',
        ],
      },
    },
  ],
}
