import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Navigation from "./Navigation"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { css } from "@emotion/react"

import "../scss/style.scss"

export default function Layout({ children, className }) {
  return (
    <div className="primary-container ">
      <Header>
        <div>
          <Link
            to="/"
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <StaticImage
              src="../../static/logo.png"
              alt="logo"
              placeholder="blurred"
              layout="fixed"
              width={50}
              height={50}
            />
            <div>Izvorul Tamaduirii</div>
          </Link>
        </div>
        <Navigation />
      </Header>
      <main className={"container " + className}>{children}</main>
      <Footer creator="The Zbenga" />
    </div>
  )
}
