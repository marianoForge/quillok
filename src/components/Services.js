import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as servicesStyles from "../styles/services.module.css"
import AOS from "aos"
import "aos/dist/aos.css"

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(sort: { order: ASC, fields: frontmatter___id }) {
        nodes {
          internal {
            content
          }
          frontmatter {
            title
            id
            image1 {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: TRACED_SVG
                  formats: WEBP
                )
              }
            }
          }
        }
      }
    }
  `)

  const services = data.allMarkdownRemark.nodes

  return (
    <div className={servicesStyles.flex_container_fluid}>
      <div className={servicesStyles.flex_container}>
        <h2 className={servicesStyles.titleSection}>SERVICES</h2>
        <p className={servicesStyles.subtitleSection}>
          Explore what we offer...
        </p>
        <div className={servicesStyles.containerServices}>
          {services.map(service => (
            <div
              className={servicesStyles.pointServices}
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              <div
                className={servicesStyles.numberTitle}
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                0{service.frontmatter.id}
              </div>
              <h2>{service.frontmatter.title}</h2>
              <p>{service.internal.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
