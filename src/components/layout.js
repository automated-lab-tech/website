/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
// eslint-disable-next-line
const Layout = ({ children }) => {
  // eslint-disable-next-line
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
        {/* <footer>
          © Automated Lab Tech {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org"><span role="img" aria-label="Dumpling">🥟</span></a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
