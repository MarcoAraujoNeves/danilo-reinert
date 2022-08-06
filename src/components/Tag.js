/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'

import Layout from './Layout'
import PostCard from './PostCard'
import SEO from './SEO'

import { postsWrapper } from '../assets/css/posts.module.css'

function Tag({
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
        <span>{pageContext.tag}</span>
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

export const Head = ({ tag }) => {
  return <SEO title={`Blog posts about ${tag}`} />
}

export default Tag

export const pageQuery = graphql`
  query BlogPostsByTag($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
