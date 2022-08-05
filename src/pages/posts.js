/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import SEO from '../components/SEO'

import { postsWrapper } from '../assets/css/posts.module.css'

export default function Posts({
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
      <h1>All posts</h1>

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

export const Head = () => <SEO title="Posts" />

export const pageQuery = graphql`
  query BlogPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
