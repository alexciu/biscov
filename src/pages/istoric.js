import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import PostCard from "../components/post-card"

import { graphql } from "gatsby"

export default function Istoric({ data }) {
  const posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)

  return (
    <>
      <Seo title="Istoric" />
      <Layout className="istoric-page">
        <div className="blog-post-container grids col-1 sm-2 lg-3">{posts}</div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "istoric" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            category
            slug
            title
            date(formatString: "DD MMMM, YYYY", locale: "ro")
          }
          id
        }
      }
    }
  }
`
