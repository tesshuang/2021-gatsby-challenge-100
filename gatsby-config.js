require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'AudioC0RE',
    siteUrl: `https://www.example.com`,
    description: `AudioC0RE is the leading headphones sharing app in the world.`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: 'xqo18pqmyhce',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AudioC0RE Leading Headphone`,
        short_name: `AudioC0RE`,
        start_url: `/`,
        background_color: `#663399`,
        icon: 'src/images/icon.png',
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    '@chakra-ui/gatsby-plugin',
    {
      resolve: `gatsby-source-formium`,
      options: {
        projectId: process.env.GATSBY_FORMIUM_PROJECTID,
        accessToken: process.env.FORMIUM_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/home`, `/about`, `/contact`, `/locations/*`],
        workboxConfig: {
          globPatterns: ['src/images/'],
        },
      },
    },
  ],
};
