import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              at urna vitae eros gravida tempor ac id mi. Proin in nulla nibh.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis
              et rutrum ligula.
            </p>
            <p>
              Proin sodales ligula ligula. Phasellus ipsum sem, vulputate
              consequat risus eu, faucibus cursus quam. Integer condimentum urna
              finibus libero facilisis bibendum.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contact
