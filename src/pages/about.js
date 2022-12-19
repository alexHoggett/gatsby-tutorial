import * as React from 'react';
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>Hi there! I'm the proud creator of this Gatsby site, it's pretty neat 🤓</p>
    </Layout>
  )
}

// gets picked up by the gatsby head api
export const Head = () => <title>About Me</title>

export default AboutPage