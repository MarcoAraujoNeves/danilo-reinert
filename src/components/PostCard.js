/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'gatsby'

import {
  firstPost,
  postCard,
  postBody,
  postDate,
} from '../assets/css/posts.module.css'

const PostCard = ({ index, post }) => {
  return (
    <div className={`${postCard} ${index === 0 ? firstPost : ''}`}>
      <img src={post.cover} alt="" />

      <div className={postBody}>
        <p className={postDate}>
          <span>{post.category}</span>
          &nbsp;&bull;&nbsp;
          <span>{post.date}</span>
        </p>

        <Link to="#">
          <h3>{post.title}</h3>
        </Link>

        <p>{post.description}</p>
      </div>
    </div>
  )
}

export default PostCard
