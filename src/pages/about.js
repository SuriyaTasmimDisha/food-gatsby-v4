import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui
              leo, eleifend ac ullamcorper ut, consectetur sed nunc. Nunc eu
              nunc vel ante imperdiet fringilla. Aliquam eget purus ut libero
              dapibus pretium.
            </p>
            <p>
              Quisque quis magna felis. Cras posuere justo at congue placerat.
              Nam pharetra nibh vitae laoreet interdum. Etiam dui ligula,
              faucibus nec accumsan vel, dignissim eget urna.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
