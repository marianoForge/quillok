import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as heroStyles from "../styles/hero.module.css"

const Hero = () => {
  return (
    <div className={heroStyles.flex_container_fluid}>
      <div className={heroStyles.flex_container}>
        <h2>We are here to help you <span>launch fast</span> and grow strong.</h2>
        <div className={heroStyles.keepScrollimage}>
          <StaticImage src="../images/keepScrolling.svg" alt="Demo" />
        </div>
      </div>
    </div>
  )
}

export default Hero
