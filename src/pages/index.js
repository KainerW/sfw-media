import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>SFW-Media</h1>
    <p>Webdesign, Webentwicklung, SEO, Affiliate Marketing.</p>
    <p>WordPress, React, Google-Ranking und vieles mehr zu Digitalisierung & Online-Marketing</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Gehe zu Seite X</Link> <br />
      <Link to="/using-typescript/">Gehe zu "Uswhatever TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
