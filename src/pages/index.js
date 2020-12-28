import React from "react"
// import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import JumboComponent from "../components/jumbocomponent"
import { Button, Container } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <JumboComponent />

    <Container>
      <hr />

      <h2>Check out some examples</h2>
      <p>See all the snippets that I've created overtime in a gallery format.</p>
      <Button variant="primary">Clickity Clack</Button>
      <Button variant="danger">Don't Come Back</Button> <br />
    </Container>
  </Layout>
)

export default IndexPage
// {[
// 'primary',
// 'secondary',
// 'success',
// 'danger',
// 'warning',
// 'info',
// 'light',
// 'dark',
// ].map((variant, idx) => (
// <Alert key={idx} variant={variant}>
//   This is a {variant} alert—check it out!
// </Alert>
// ))}