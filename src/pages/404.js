import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

function PageNotFound() {
  return (
    <Layout className="notFound-page">
      <h1>404</h1>
      You are totally LOST! :)
      <div>
        Go back --&gt; <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}

export default PageNotFound
