import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy;{new Date().getFullYear()} <span>Recipes.com</span>. Built with{" "}
        <a href="https://www.gatsbyjs.com/" target="_blank">
          Gatsby
        </a>
      </p>
    </footer>
  )
}

export default Footer
