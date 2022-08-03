import React from 'react'

import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import SEO from '../components/SEO'

import { postsWrapper } from '../assets/css/posts.module.css'

export default function Posts() {
  const posts = [
    {
      category: 'Java',
      date: 'November 15, 2022',
      title: 'Post title comes here',
      cover:
        'https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor purus vitae pellentesque dapibus. Nullam sollicitudin euismod tellus. ',
    },
    {
      category: 'Cloud',
      date: 'September 30, 2022',
      title: 'Lorem ipsum dolor sit',
      cover:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor purus vitae pellentesque dapibus. Nullam sollicitudin euismod tellus. ',
    },
    {
      category: 'HTTP',
      date: 'August 6, 2022',
      title: 'This is a client app',
      cover:
        'https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor purus vitae pellentesque dapibus. Nullam sollicitudin euismod tellus. ',
    },
    {
      category: 'CCA',
      date: 'July 31, 2022',
      title: 'Another title',
      cover:
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor purus vitae pellentesque dapibus. Nullam sollicitudin euismod tellus. ',
    },
    {
      category: 'Spring',
      date: 'July 15, 2022',
      title: 'Another title',
      cover:
        'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor purus vitae pellentesque dapibus. Nullam sollicitudin euismod tellus. ',
    },
    {
      category: 'JAX-RS',
      date: 'June 30, 2022',
      title: 'Another title',
      cover:
        'https://images.unsplash.com/photo-1610433572201-110753c6cff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor purus vitae pellentesque dapibus. Nullam sollicitudin euismod tellus. ',
    },
    {
      category: 'Maven',
      date: 'June 25, 2022',
      title: 'Another title',
      cover:
        'https://images.unsplash.com/photo-1558717738-0b9fbb9b0b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor purus vitae pellentesque dapibus. Nullam sollicitudin euismod tellus. ',
    },
  ]

  return (
    <Layout>
      <h1>All posts</h1>

      <div className={postsWrapper}>
        {posts.map((post, index) => (
          <PostCard key={index} index={index} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <SEO title="Posts" />
