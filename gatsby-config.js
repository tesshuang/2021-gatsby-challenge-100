require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "AudioC0RE",
    siteUrl: `https://www.example.com`,
    description: `AudioC0RE is the leading headphones sharing app in the world.`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        spaceId: "xqo18pqmyhce",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AudioC0RE Leading Headphone`,
        short_name: `AudioC0RE`,
        start_url: `/`,
        background_color: `#663399`,
        icon: "src/images/icon.png",
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    }
  ],
};
