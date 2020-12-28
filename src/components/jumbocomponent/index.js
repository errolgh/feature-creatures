import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const JumboComponent = () => (
    <Jumbotron fluid id="jumbo">
        <Container>
          <h1>Design ideas for developers</h1>
          <p>A place to explore front end concepts.</p>
          <p>Let's build something great.</p>
        </Container>
      </Jumbotron>
    )

export default JumboComponent