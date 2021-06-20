import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Constructie({ data }) {
  const images = data.allFile.edges.map(({ node }) => (
    <div key={node.id}>
      <GatsbyImage
        image={node.childImageSharp.gatsbyImageData}
        alt={node.base.split(".")[0]}
      />
    </div>
  ))

  return (
    <>
      <Seo title="Constructia bisericii - Galerie foto" />
      <Layout className="foto-page">
        Foto page
        <div className="container grids col-1 sm-2 lg-3">{images}</div>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "constructie" }
      }
      sort: { fields: base, order: ASC }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(
              transformOptions: { cropFocus: CENTER, fit: COVER }
              webpOptions: { quality: 70 }
              quality: 50
              placeholder: TRACED_SVG
              height: 700
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  }
`
