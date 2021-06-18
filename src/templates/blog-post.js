import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Wrapper = styled("div")`
  white-space: pre-wrap;
`

const PageNavigation = styled("div")`
  display: flex;
  justify-content: space-between;
`

export default function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark
  //console.log(`pageContext = ${JSON.stringify(pageContext)}`)
  //console.log(`data = ${JSON.stringify(data)}`)
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <PageNavigation>
          <div>
            {pageContext.prevSlug && (
              <Link to={pageContext.prevSlug}>Inapoi</Link>
            )}
          </div>
          <div>
            {pageContext.nextSlug && (
              <Link to={pageContext.nextSlug}>Urmatorul</Link>
            )}
          </div>
        </PageNavigation>
        <Wrapper dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

//$slug is coming from gatsby-node.js context (pageContext)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
