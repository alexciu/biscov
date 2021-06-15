/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteLangL: "ro-RO",
    siteLangS: "ro",
    title: "Biserica Ortodoxa Izvorul Tamaduirii, Covasna",
    titleTemplate: "%s",
    siteUrl: "https://bisericaortodoxacovasna.ro",
    description:
      "Parohia Ortodoxa 'Izvorul Tamaduirii' din Covasna va asteapta sa o vizitati",
    image: "/logo.png",
    logo: "/logo.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Parohia Ortodoxa Izvorul Tamaduirii`,
        short_name: `Izvorul Tamaduirii`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/logo.png`,
        icons: [
          {
            src: `/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
