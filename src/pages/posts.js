import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

import {
  postsWrapper,
  postCard,
  postBody,
  postDate,
} from '../assets/css/posts.module.css'

export default function Posts() {
  return (
    <Layout>
      <h1>All posts</h1>

      <div className={postsWrapper}>
        <div className={postCard}>
          <img src="https://hannesdorfmann.com/images/contact.jpg" alt="" />

          <div className={postBody}>
            <p className={postDate}>
              <span>Java</span>
              &nbsp;&bull;&nbsp;
              <span>November 15, 2022</span>
            </p>

            <Link to="/">
              <h3>Post tile comes here</h3>
            </Link>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              elementum, tortor nec vulputate molestie, leo enim tempus dolor,
              sit amet pretium nisl lacus a orci.
            </p>
          </div>
        </div>

        <div className={postCard}>
          <img src="https://hannesdorfmann.com/images/contact.jpg" alt="" />

          <div className={postBody}>
            <p className={postDate}>
              <span>Java</span>
              &nbsp;&bull;&nbsp;
              <span>November 15, 2022</span>
            </p>

            <Link to="/">
              <h3>Post tile comes here</h3>
            </Link>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              elementum, tortor nec vulputate molestie, leo enim tempus dolor,
              sit amet pretium nisl lacus a orci.
            </p>
          </div>
        </div>

        <div className={postCard}>
          <img src="https://hannesdorfmann.com/images/contact.jpg" alt="" />

          <div className={postBody}>
            <p className={postDate}>
              <span>Java</span>
              &nbsp;&bull;&nbsp;
              <span>November 15, 2022</span>
            </p>

            <Link to="/">
              <h3>Post tile comes here</h3>
            </Link>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              elementum, tortor nec vulputate molestie, leo enim tempus dolor,
              sit amet pretium nisl lacus a orci.
            </p>
          </div>
        </div>

        <div className={postCard}>
          <img src="https://hannesdorfmann.com/images/contact.jpg" alt="" />

          <div className={postBody}>
            <p className={postDate}>
              <span>Java</span>
              &nbsp;&bull;&nbsp;
              <span>November 15, 2022</span>
            </p>

            <Link to="/">
              <h3>Post tile comes here</h3>
            </Link>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              elementum, tortor nec vulputate molestie, leo enim tempus dolor,
              sit amet pretium nisl lacus a orci.
            </p>
          </div>
        </div>

        <div className={postCard}>
          <img src="https://hannesdorfmann.com/images/contact.jpg" alt="" />

          <div className={postBody}>
            <p className={postDate}>
              <span>Java</span>
              &nbsp;&bull;&nbsp;
              <span>November 15, 2022</span>
            </p>

            <Link to="/">
              <h3>Post tile comes here</h3>
            </Link>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              elementum, tortor nec vulputate molestie, leo enim tempus dolor,
              sit amet pretium nisl lacus a orci.
            </p>
          </div>
        </div>

        <div className={postCard}>
          <img src="https://hannesdorfmann.com/images/contact.jpg" alt="" />

          <div className={postBody}>
            <p className={postDate}>
              <span>Java</span>
              &nbsp;&bull;&nbsp;
              <span>November 15, 2022</span>
            </p>

            <Link to="/">
              <h3>Post tile comes here</h3>
            </Link>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              elementum, tortor nec vulputate molestie, leo enim tempus dolor,
              sit amet pretium nisl lacus a orci.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
