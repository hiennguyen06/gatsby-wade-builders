import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

const WorkPages = ({data}) => {
    const { content } = data.design
    console.log(content)

    return <Layout>
        <section>
            <h1>Hello</h1>
            <ReactMarkdown source={content}>
            </ReactMarkdown>
        </section>
    </Layout>
}

export const query = graphql`
  query GetSingleDesign($slug: String) {
    design: strapiDesigns(slug: { eq: $slug }) {
      content
      title
    }
  }
`
export default WorkPages