module.exports = {
  siteMetadata: {
    title: 'wedding - Huy Phạm - Phương Nguyển ',
    author: 'huypv',
    description: 'Trang web đám cưới của Huy Phạm'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Wedding',
        short_name: 'huypv',
        start_url: '/',
        background_color: '#1b1f22',
        theme_color: '#7f828d',
        display: 'minimal-ui',
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `ANH_PHONG_1.jpg`,
            sizes: `4000x6000`,
            type: `image/png`
          },
          {
            src: `ANH_PHONG_1.jpg`,
            sizes: `4000x6000`,
            type: `image/png`
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`
  ]
}
