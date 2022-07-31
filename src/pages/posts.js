import React from 'react'
import Layout from '../components/Layout'
import Post from '../components/Post'

import { postsWrapper } from '../assets/css/posts.module.css'

export default function Posts() {
  return (
    <Layout>
      <h1>All posts</h1>

      <div className={postsWrapper}>
        <Post index={0} />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </Layout>
  )
}
