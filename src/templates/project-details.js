import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as projectStyles from "../styles/project-details.module.css"

export default function ProjectDetails() {
  return (
    <Layout>
      <div className={projectStyles.details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={projectStyles.featured}>
          {/* <GatsbyImage
            image={}
            alt="Demo"
          /> */}
        </div>
        {/* <div className={styles.html} dangerouslySetInnerHTML={}/> */}
      </div>
    </Layout>
  )
}
