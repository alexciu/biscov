import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

import { graphql } from "gatsby"

export default function Istoric({ data }) {
  const { childMarkdownRemark } = data.allFile.nodes[0] // data.markdownRemark holds your post data
  const { frontmatter, html } = childMarkdownRemark

  return (
    <>
      <Seo title="Istoric" />
      <Layout className="istoric-page">
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "istoric-md" } }) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            date(formatString: "DD MMMM, YYYY", locale: "ro")
            slug
            title
          }
          html
        }
        id
      }
    }
  }
`
