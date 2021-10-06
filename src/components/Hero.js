import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as heroStyles from "../styles/hero.module.css"
import AOS from "aos"
import "aos/dist/aos.css"

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <div> 
      <div className={heroStyles.flex_container_fluid}>
        <div className={heroStyles.flex_container}>
          <h2
            // data-aos="fade"
            // data-aos="zoom-in"
            // data-aos-delay="500"
            // data-aos-duration="1500"
          >
            We are here to help you <span>launch fast</span> and grow strong lorem ipsum dolor sit.
          </h2>
          <div className={heroStyles.keepScrollimage}>
            <StaticImage src="../images/keepScrolling.svg" alt="keep Scrolling"/>
          </div>
        </div>
      </div>
      <div className={heroStyles.BGdiagonal}>
        <StaticImage src="../images/Home_diagonal.svg"  width="2020px" alt=""/>
      </div>
    </div>
  )
}

export default Hero
