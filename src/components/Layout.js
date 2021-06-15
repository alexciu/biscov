import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Navigation from "./Navigation"

import "../scss/style.scss"

export default function Layout({ children, className }) {
  return (
    <div className="primary-container">
      <Header>
        <div>Logo</div>
        <Navigation />
      </Header>
      <main className={"container " + className}>{children}</main>

      <Footer creator="The Zbenga" />
    </div>
  )
}
