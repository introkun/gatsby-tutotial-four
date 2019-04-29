import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <h1>Tutorial 'rock-band'</h1>
    <Link to="tutorials/rock-band/step_1">Step 1</Link>
    <Link to="tutorials/rock-band/step_2">Step 2</Link>
  </Layout>
)