import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle="My blog posts">
      <ul>
      {
        data.allFile.nodes.map((post, index) => 
          <li key={index}>{ post.name }</li>
        )
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="Blog Page"/>

export default BlogPage