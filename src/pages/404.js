import React from "react"

import CoreLayout from "../layout/CoreLayout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <CoreLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </CoreLayout>
)

export default NotFoundPage
