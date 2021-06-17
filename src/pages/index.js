import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

export default function Home() {
  return (
    <>
      <Seo title="Acasa" />
      <Layout className="home-page">Hello world!</Layout>
    </>
  )
}
