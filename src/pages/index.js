import React from 'react'
import { Link } from 'gatsby'
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import LinkedinBoxFillIcon from 'remixicon-react/LinkedinBoxFillIcon'
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

import { postsWrapper } from '../assets/css/posts.module.css'
import {
  heroWrapper,
  heroRow,
  heroContentWrapper,
  heroImageWrapper,
  latestPosts,
  morePosts,
} from '../assets/css/home.module.css'

export default function Home() {
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
  ]

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
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
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
