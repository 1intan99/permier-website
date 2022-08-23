require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Premier Crafty`,
    siteTitleAlt: `Premier Crafty - Development`,
    siteHeadline: `Indonesian Market and Developers Team`,
    siteUrl: `https://premiercrafty.my.id`,
    siteDescription: `Indonesian Market and Developers Team. Serving everything you need for your discord server. Starting Discord Bot Commissions, Server Builder, etc`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Premier Crafty`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {}
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Premier Crafty`,
        short_name: `Cara`,
        description: `Indonesian Market and Developers Team. Serving everything you need for your discord server. Starting Discord Bot Commissions, Server Builder, etc`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false
      }
    }
  ].filter(Boolean)
};
