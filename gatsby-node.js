const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query MyQuery {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "amvon" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug } = node.frontmatter
    actions.createPage({
      path: slug,
      component: path.resolve("./src/templates/blog-post.js"),
      context: { slug: slug },
    })
  })
}
