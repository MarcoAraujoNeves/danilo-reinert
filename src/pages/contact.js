import React from 'react'
import Layout from '../components/Layout'

import { contactWapper } from '../assets/css/contact.module.css'

export default function Contact() {
  return (
    <Layout>
      <h1>Contact me</h1>

      <div className={contactWapper}>
        <img
          src="https://hannesdorfmann.com/images/contact.jpg"
          alt=""
          className=""
        />

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
        </div>
      </div>
    </Layout>
  )
}
