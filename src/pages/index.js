import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Button, Container, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Alert variant="primary">This is a button</Alert>
      <Button>Click Me</Button>
      <div 
        // style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
      >
        {/* <Image /> */}
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Container>
  </Layout>
)

export default IndexPage