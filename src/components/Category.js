/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'

import Layout from './Layout'
import PostCard from './PostCard'
import SEO from './SEO'

import { postsWrapper } from '../assets/css/posts.module.css'

function Category({
  pageContext,
  data: { allMarkdownRemark: posts, allImageSharp },
}) {
  const getCoverFluid = (images, cover) => {
    const filteredArray = images.nodes.filter(({ fluid }) =>
      fluid.src.includes(cover)
    )

    return filteredArray[0].fluid
  }

  return (
    <Layout>
      <h1>
        All posts about&nbsp;
        <span>{pageContext.category}</span>
      </h1>

      <div className={postsWrapper}>
        {posts.nodes.map(({ frontmatter, fields }, index) => (
          <PostCard
            key={index}
            index={index}
            post={{
              ...frontmatter,
              path: fields.slug,
              coverFluid: getCoverFluid(allImageSharp, frontmatter.cover),
            }}
          />
        ))}
      </div>
    </Layout>
  )
}

export const Head = ({ category }) => {
  return <SEO title={`Blog posts about ${category}`} />
}

export default Category

export const pageQuery = graphql`
  query BlogPostsByCategory($category: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
          category
          cover
          tags
        }
      }
    }
    allImageSharp {
      nodes {
        fluid(maxWidth: 1600, maxHeight: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
