import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

import {
  errorNumber,
  errorMessage,
  backMessage,
} from '../assets/css/notFound.module.css'

export default function NotFound() {
  return (
    <Layout>
      <h1 className={errorNumber}>404</h1>
      <h3 className={errorMessage}>Page not found!</h3>

      <p className={backMessage}>
        We couldn&apos;t find a good match for your search.
        <br />
        <Link to="/">Back to homepage</Link>
      </p>
    </Layout>
  )
}
