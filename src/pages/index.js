import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata

  //console.log(data)
  return (
    <>
      <Seo title="Acasa" />
      <Layout className="home-page">
        <div className="home-banner grids col-1 sm-2">
          <div>
            <h1 className="title">{title}</h1>
            <p className="tagline"></p>
            <div className="description">{description}</div>
          </div>
          <div
            css={css`
              margin: auto;
            `}
          >
            <StaticImage
              src="../../static/logo.png"
              alt="logo"
              placeholder="blurred"
              layout="fixed"
              width={300}
              height={300}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export const HomePageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        image
      }
    }
  }
`
