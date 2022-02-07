module.exports = {
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@Disha",
    person: { name: "Disha", age: 25 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "Disha", age: 25 },
      { name: "Susan", age: 23 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
