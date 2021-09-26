import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as heroStyles from "../styles/hero.module.css"
import AOS from "aos"
import "aos/dist/aos.css"

const Hero = () => {

  AOS.init()

  return (
    <div className={heroStyles.flex_container_fluid}>
      <div className={heroStyles.flex_container}>
        <h2 data-aos='fade' data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1500">We are here to help you <span>launch fast</span> and grow strong.</h2>
        <div className={heroStyles.keepScrollimage}>
          <StaticImage src="../images/keepScrolling.svg" alt="Demo" />
        </div>
      </div>
    </div>
  )
}

export default Hero
