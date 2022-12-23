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
        data.allMdx.nodes.map((node, index) => 
          <article key={ node.id }>
            <h2>{ node.frontmatter.title }</h2>
            <h4>{ node.frontmatter.date }</h4>
            <p>{ node.excerpt }</p>
          </article>
        )
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Blog Page"/>

export default BlogPage