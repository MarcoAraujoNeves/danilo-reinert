/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import {
  firstPost,
  postCard,
  postBody,
  imageContainer,
  postDate,
} from '../assets/css/posts.module.css'

const PostCard = ({ index, post }) => {
  return (
    <div className={`${postCard} ${index === 0 ? firstPost : ''}`}>
      <div className={`${imageContainer}`}>
        <Img
          fluid={post.coverFluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={`${post.title} blog post cover.`}
        />
      </div>

      <div className={postBody}>
        <p className={postDate}>
          <span>{post.category}</span>
          &nbsp;&bull;&nbsp;
          <span>{post.date}</span>
        </p>

        <Link to={post.path}>
          <h3>{post.title}</h3>
        </Link>

        <p>{post.description}</p>
      </div>
    </div>
  )
}

export default PostCard
