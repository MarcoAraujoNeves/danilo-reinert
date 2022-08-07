/* eslint-disable react/prop-types */
import React from 'react'

import PostCard from './PostCard'

import { postsWrapper } from '../assets/css/posts.module.css'

const PostsWrapper = ({ posts, allImageSharp, highlightFirst }) => {
  const getCoverFluid = (images, cover) => {
    const filteredArray = images.nodes.filter(({ fluid }) =>
      fluid.src.includes(cover)
    )

    return filteredArray[0].fluid
  }

  const mappedPosts = posts.nodes.map(({ frontmatter, fields }) => ({
    ...frontmatter,
    path: fields.slug,
    coverFluid: getCoverFluid(allImageSharp, frontmatter.cover),
  }))

  return (
    <div className={postsWrapper}>
      {mappedPosts.map((post, index) => (
        <PostCard
          key={post.path}
          post={post}
          highlighted={highlightFirst ? index === 0 : null}
        />
      ))}
    </div>
  )
}

export default PostsWrapper
