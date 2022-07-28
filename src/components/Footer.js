import React from 'react'
import FacebookBoxFillIcon from 'remixicon-react/FacebookBoxFillIcon'
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon'
import LinkedinBoxFillIcon from 'remixicon-react/LinkedinBoxFillIcon'

import {
  footer,
  copyrights,
  column,
  columnsWrapper,
  badge,
} from '../assets/css/footer.module.css'

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={columnsWrapper}>
        <div className={column}>
          <h3>Categories</h3>

          <span className={badge}>Backend</span>
          <span className={badge}>Java</span>
          <span className={badge}>Server-Side-Rendering</span>
          <span className={badge}>Node.js</span>
        </div>
        <div className={column}>
          <h3>Tags</h3>

          <span className={badge}>servers</span>
          <span className={badge}>cloud-computing</span>
          <span className={badge}>software-engineering</span>
          <span className={badge}>algorithms</span>
          <span className={badge}>data-structures</span>
          <span className={badge}>optimization</span>
          <span className={badge}>entrepreneurship</span>
        </div>
        <div className={column}>
          <h3>Social Media</h3>

          <a href="#">
            <GithubFillIcon color="#171515" size={16} />
            Github
          </a>
          <a href="#">
            <LinkedinBoxFillIcon color="#0072b1" size={16} />
            LinkedIn
          </a>
          <a href="#">
            <TwitterFillIcon color="#1DA1F2" size={16} />
            Twitter
          </a>
          <a href="#">
            <FacebookBoxFillIcon color="#4267b2" size={16} />
            Facebook
          </a>
        </div>
      </div>

      <div className={copyrights}>Copyright © 2022 Danilo Reinert</div>
    </footer>
  )
}

export default Footer
