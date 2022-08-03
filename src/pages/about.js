import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { cover, subtitle } from '../assets/css/about.module.css'

export default function About() {
  return (
    <Layout>
      <h1>About me</h1>

      <img
        src="https://hannesdorfmann.com/images/about/lake.jpg"
        alt=""
        className={cover}
      />

      <h3 className={subtitle}>
        Hello, I&apos;m&nbsp;
        <strong>Danilo Reinert</strong>
      </h3>

      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          elementum, tortor nec vulputate molestie, leo enim tempus dolor, sit
          amet pretium nisl lacus a orci. Integer tempus vehicula nunc, sit amet
          tristique ipsum laoreet vitae. Proin ligula massa, efficitur sit amet
          neque maximus, finibus gravida elit. Morbi dolor metus, fermentum ac
          consequat in, placerat ac purus. Aliquam sed dui eu nisl aliquam
          malesuada. Nunc vehicula sed risus nec cursus.
        </p>

        <p>
          Nunc ut ipsum felis. Nam tristique libero mauris, mattis convallis
          enim volutpat at. <a href="#">Pellentesque</a> habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>

        <p>
          Morbi felis velit, venenatis ac lobortis a, tempor aliquam dui.
          Quisque ligula sapien, <a href="#">aliquam</a> non tempus id, ultrices
          a ante. Quisque at malesuada mi. Integer dolor metus, placerat vel
          elit sed, imperdiet gravida mi. Nam placerat at urna nec cursus.
          Aenean sapien lectus, iaculis vitae turpis vitae, malesuada porttitor
          erat. In a orci vitae arcu lobortis fermentum. Cras fermentum dictum
          pellentesque. Morbi vulputate, velit ut varius pellentesque, nulla
          arcu tincidunt risus, vitae vestibulum massa felis in massa. Donec
          dictum dui id iaculis dapibus.
        </p>

        <p>
          Proin ut sem lorem. Etiam ultrices massa imperdiet, accumsan purus ac,
          pellentesque quam. Nulla pretium, ante quis ullamcorper facilisis, sem
          enim molestie purus, in rutrum odio magna ut risus. Vivamus et
          faucibus tellus, sed dignissim urna.&nbsp;
          <strong>
            Nam justo velit, mollis in volutpat a, gravida a nisl.
          </strong>
          Suspendisse maximus pellentesque justo, posuere dapibus enim luctus
          vitae.
        </p>

        <p>
          Sed eget mi at tellus ornare iaculis. Praesent eu est neque.
          Vestibulum nibh ante, sagittis in cursus nec, ultrices quis orci.
          Phasellus scelerisque odio eu enim sagittis commodo. Suspendisse
          potenti.&nbsp;
          <i>
            Morbi dui nisl, mollis vehicula mollis et, feugiat nec dui.
            Phasellus mollis orci at elit laoreet laoreet.
          </i>
        </p>
      </div>
    </Layout>
  )
}

export const Head = () => <SEO title="About me" />
