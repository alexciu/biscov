const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    {
      queryAmvon: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "amvon" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
          next {
            frontmatter {
              slug
            }
          }
          previous {
            frontmatter {
              slug
            }
          }
        }
      }
      queryIstoric: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "istoric" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
          next {
            frontmatter {
              slug
            }
          }
          previous {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  data.queryAmvon.edges.forEach(({ node, next, previous }) => {
    const { slug } = node.frontmatter
    const nextSlug = next?.frontmatter.slug
    const prevSlug = previous?.frontmatter.slug

    actions.createPage({
      path: slug,
      component: path.resolve("./src/templates/blog-post.js"),
      context: { slug: slug, nextSlug: nextSlug, prevSlug: prevSlug },
    })
  })

  data.queryIstoric.edges.forEach(({ node, next, previous }) => {
    const { slug } = node.frontmatter
    const nextSlug = next?.frontmatter.slug
    const prevSlug = previous?.frontmatter.slug

    actions.createPage({
      path: slug,
      component: path.resolve("./src/templates/blog-post.js"),
      context: { slug: slug, nextSlug: nextSlug, prevSlug: prevSlug },
    })
  })
}
