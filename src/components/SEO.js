import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ title, description, image, article }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    siteLangL,
    siteLangS,
    defaultTitle,
    titleTemplate,
    defaultDescription,
    defaultImage,
    siteUrl,
  } = site.siteMetadata

  const seo = {
    siteLangL,
    siteLangS,
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <>
      <Helmet title={seo.title} titleTemplate={titleTemplate}>
        <html lang="ro-RO" />
        <link rel="alternate" href={seo.url} hrefLang="ro-RO" />
        <link rel="alternate" href={seo.url} hrefLang="ro" />
        <link rel="alternate" href={seo.url} hrefLang="x-default" />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        {seo.url && <meta property="og:url" content={seo.url} />}

        {(article ? true : null) && (
          <meta property="og:type" content="article" />
        )}

        {seo.title && <meta property="og:title" content={seo.title} />}

        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}

        {seo.image && <meta property="og:image" content={seo.image} />}

        <meta name="twitter:card" content="summary_large_image" />

        {seo.title && <meta name="twitter:title" content={seo.title} />}

        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}

        {seo.image && <meta name="twitter:image" content={seo.image} />}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Helmet>
    </>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  siteLangL: PropTypes.string,
  siteLangS: PropTypes.string,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  siteLangL: "en-US",
  siteLangS: "en",
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        siteLangL
        siteLangS
      }
    }
  }
`
