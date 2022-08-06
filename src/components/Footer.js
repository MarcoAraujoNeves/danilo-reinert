import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import FacebookBoxFillIcon from 'remixicon-react/FacebookBoxFillIcon'
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon'
import LinkedinBoxFillIcon from 'remixicon-react/LinkedinBoxFillIcon'

import {
  footer,
  copyrights,
  column,
  socialLink,
  columnsWrapper,
  badge,
} from '../assets/css/footer.module.css'

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query allCategoriesAndTags {
        allMarkdownRemark {
          nodes {
            frontmatter {
              category
              tags
            }
          }
        }
      }
    `
  )

  const categories = data.allMarkdownRemark.nodes.reduce((acc, post) => {
    if (!acc.includes(post.frontmatter.category)) {
      acc.push(post.frontmatter.category)
    }

    return acc
  }, [])

  const tags = data.allMarkdownRemark.nodes
    .flatMap(post => post.frontmatter.tags)
    .reduce((acc, tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag)
      }

      return acc
    }, [])

  const getPath = (type, value) => {
    return `/${type}/${value.toLowerCase().replace(/ /g, '-')}`
  }

  return (
    <footer className={footer}>
      <div className={columnsWrapper}>
        <div className={column}>
          <h3>Categories</h3>

          {categories.map(category => (
            <Link key={category} to={getPath('category', category)}>
              <span className={badge}>{category}</span>
            </Link>
          ))}
        </div>
        <div className={column}>
          <h3>Tags</h3>

          {tags.map(tag => (
            <Link key={tag} to={getPath('tag', tag)}>
              <span key={tag} className={badge}>
                {tag}
              </span>
            </Link>
          ))}
        </div>
        <div className={column}>
          <h3>Social Media</h3>

          <a href="#" className={socialLink}>
            <GithubFillIcon color="#171515" size={16} />
            Github
          </a>
          <a href="#" className={socialLink}>
            <LinkedinBoxFillIcon color="#0072b1" size={16} />
            LinkedIn
          </a>
          <a href="#" className={socialLink}>
            <TwitterFillIcon color="#1DA1F2" size={16} />
            Twitter
          </a>
          <a href="#" className={socialLink}>
            <FacebookBoxFillIcon color="#4267b2" size={16} />
            Facebook
          </a>
        </div>
      </div>

      <div className={copyrights}>
        Copyright &copy; {new Date().getFullYear()} Danilo Reinert
      </div>
    </footer>
  )
}

export default Footer
