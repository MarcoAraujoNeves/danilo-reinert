/* eslint-disable react/prop-types */
import React from 'react'
import { graphql, Link } from 'gatsby'
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import LinkedinBoxFillIcon from 'remixicon-react/LinkedinBoxFillIcon'
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon'

import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import SEO from '../components/SEO'

import { postsWrapper } from '../assets/css/posts.module.css'
import {
  heroWrapper,
  heroRow,
  heroContentWrapper,
  heroImageWrapper,
  latestPosts,
  morePosts,
} from '../assets/css/home.module.css'

export default function Home({
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
      <div className={heroWrapper}>
        <div className={heroRow}>
          <div className={heroContentWrapper}>
            <h1>
              <span>Hello World,</span>
              welcome to my blog!
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              porttitor purus vitae pellentesque dapibus. Nullam sollicitudin
              euismod tellus. Mauris scelerisque neque at nulla iaculis, nec
              volutpat metus tempus.
            </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <p>
              Follow me on:
              <a href="#">
                <GithubFillIcon color="#35495e" size={18} />
              </a>
              <a href="#">
                <LinkedinBoxFillIcon color="#35495e" size={18} />
              </a>
              <a href="#">
                <TwitterFillIcon color="#35495e" size={18} />
              </a>
            </p>
          </div>

          <div className={heroImageWrapper}>
            <img
              src="https://hannesdorfmann.com/images/about/hannes-banner-800.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={latestPosts}>
        <h2>Latest posts</h2>

        <div className={postsWrapper}>
          {posts.nodes.map(({ frontmatter, fields }, index) => (
            <PostCard
              key={index}
              post={{
                ...frontmatter,
                path: fields.slug,
                coverFluid: getCoverFluid(allImageSharp, frontmatter.cover),
              }}
            />
          ))}
        </div>

        <div className={morePosts}>
          <p>
            <Link to="/posts/">More posts</Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <SEO />

export const pageQuery = graphql`
  query LatestBlogPosts {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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
