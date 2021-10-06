import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as testimonialStyles from "../styles/testimonials.module.css"
import AOS from "aos"
import "aos/dist/aos.css"

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <div className={testimonialStyles.flex_container_fluid}>
      <div className={testimonialStyles.flex_container}>
        <div
          className={testimonialStyles.strokeBox}
          // data-aos="flip-left"
          // data-aos-delay="0"
          // data-aos-duration="1500"
        >
          <div className={testimonialStyles.testimonialBox}>
            <div className={testimonialStyles.boxHeader}>
              <div className={testimonialStyles.testimonialPhoto}>
                <StaticImage src="../images/testimonial_1_tom.png" />
              </div>
              <div className={testimonialStyles.testimonialPerson}>
                <span className={testimonialStyles.testimonialName}>
                  Tom Belote
                </span>
                <p className={testimonialStyles.testimonialPosition}>
                  ShelfSet Founder & CEO
                </p>
              </div>
            </div>

            <div className={testimonialStyles.boxBody}>
              <p>
                “Quillok has great engineers that craft elegant mobile
                applications.<br></br>
                At ShelfSet we were able to leverage them to build a product
                from concept to product launch in just a few months.
              </p>
              <p>
                They became experts in our product area in the specialized
                retail industry with machine learning computer vision.
              </p>
            </div>
          </div>
        </div>

        <div
          className={testimonialStyles.strokeBox}
          // data-aos="flip-left"
          // data-aos-delay="300"
          // data-aos-duration="1500"
        >
          <div className={testimonialStyles.testimonialBox}>
            <div className={testimonialStyles.boxHeader}>
              <div className={testimonialStyles.testimonialPhoto}>
                <StaticImage src="../images/testimonial_2_roy.png" />
              </div>
              <div className={testimonialStyles.testimonialPerson}>
                <span className={testimonialStyles.testimonialName}>
                  Roy Houston
                </span>
                <p className={testimonialStyles.testimonialPosition}>
                  BugLox Founder
                </p>
              </div>
            </div>

            <div className={testimonialStyles.boxBody}>
              <p>
                “Quillok has great engineers that craft elegant mobile
                applications.<br></br>
                At ShelfSet we were able to leverage them to build a product
                from concept to product launch in just a few months.
              </p>

              <p>
                They became experts in our product area in the specialized
                retail industry with machine learning computer vision.
              </p>
            </div>
          </div>
        </div>

        <div className={testimonialStyles.testimonialTitle}>
          <h2 className={testimonialStyles.titleSection}>TESTIMONIALS</h2>
          <p className={testimonialStyles.subtitleSection}>
            What our customers say
          </p>
          <div className={testimonialStyles.imgBGtitle}>
            <StaticImage src="../images/testimonial_bg_title.svg" />
          </div>
        </div>

        <div
          className={testimonialStyles.strokeBox}
          // data-aos="flip-left"
          // data-aos-delay="600"
          // data-aos-duration="1500"
        >
          <div className={testimonialStyles.testimonialBox}>
            <div className={testimonialStyles.boxHeader}>
              <div className={testimonialStyles.testimonialPhoto}>
                <StaticImage src="../images/testimonial_3_shakur.png" />
              </div>
              <div className={testimonialStyles.testimonialPerson}>
                <span className={testimonialStyles.testimonialName}>
                  Shakur Abdal-Khallaq
                </span>
                <p className={testimonialStyles.testimonialPosition}>
                  FaceFwd Founder & CEO
                </p>
              </div>
            </div>

            <div className={testimonialStyles.boxBody}>
              <p>
                “Quillok has great engineers that craft elegant mobile
                applications.<br></br>
                At ShelfSet we were able to leverage them to build a product
                from concept to product launch in just a few months.
              </p>

              <p>
                They became experts in our product area in the specialized
                retail industry with machine learning computer vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
