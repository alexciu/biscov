import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import Seo from "../components/SEO"
import Layout from "../components/Layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Multumim pentru mesaj" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>Am primit mesajul</h1>
      <p>Multumim ca ne-ati contactat. O sa raspundem de indata.</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Inapoi pe pagina principala
      </Link>
    </div>
  </Layout>
)

export default Thanks
