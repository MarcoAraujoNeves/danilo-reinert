/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import LinkedinBoxFillIcon from 'remixicon-react/LinkedinBoxFillIcon'
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { contactWapper } from '../assets/css/contact.module.css'

export default function Contact({ data: { file } }) {
  return (
    <Layout>
      <h1>Contact me</h1>

      <div className={contactWapper}>
        <div>
          <Img
            fluid={file.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="Contact me page image."
          />
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            elementum, tortor nec vulputate molestie, leo enim tempus dolor, sit
            amet pretium nisl lacus a orci.
          </p>

          <p>
            Email:&nbsp;
            <a href="mailto:danilo.reinert@gmail.com">
              danilo.reinert@gmail.com
            </a>
          </p>

          <p>
            <a href="#">
              <GithubFillIcon color="#35495e" size={24} />
            </a>
            <a href="#">
              <LinkedinBoxFillIcon color="#35495e" size={24} />
            </a>
            <a href="#">
              <TwitterFillIcon color="#35495e" size={24} />
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <SEO title="Contact me" />

export const pageQuery = graphql`
  query ContactPageImage {
    file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640, maxHeight: 427) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
