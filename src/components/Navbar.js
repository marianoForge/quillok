import React from "react"
import { Link, graphql, useStaticQuery, } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as navbarStyles from "../styles/navbar.module.css"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const { title } = data.site.siteMetadata

  return (
    <div className={navbarStyles.flex_container_fluid}>
      <div className={navbarStyles.flex_container}>
        <div>
          <Link to="/">
            <StaticImage src="../images/Quillok_Logo.svg" alt="Demo" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
