import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as portStyles from "../styles/portfolio.module.css"

const Portfolio = () => {
  return (
    <div className={portStyles.flex_container_fluid}>
      <div className={portStyles.flex_container}>
        <div className={portStyles.WorksTitle}>
            <h2 className={portStyles.titleSection}>PORTFOLIO</h2>
            <p className={portStyles.subtitleSection}>See our works</p>
        </div>
        <div className={portStyles.WorksContent}>
          <div className={portStyles.leftContent}>
            <div className={portStyles.WorksMenu}>
              <div className={portStyles.highlight}>
                <div className={portStyles.menuShelfSet}>
                  <div className={portStyles.menuArrow}>
                    <StaticImage src="../images/work_arrow_menu.svg" />
                  </div>
                  <div className={portStyles.Shelfset}>ShelfSet</div>
                </div>
              </div>
              <div className={portStyles.workUnselect}>FaceFwd</div>
              <div className={portStyles.workUnselect}>Recordify</div>
              <div className={portStyles.btMoreProjects}>
                <div className={portStyles.txtMoreProjects}>SEE MORE PROJECTS</div>
                <div className={portStyles.arrowMoreProjects}>
                {/* → */}
                    <StaticImage src="../images/work_arrow_menu.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={portStyles.rightContent}>
            <div className={portStyles.frameImageWork}>
              <StaticImage className={portStyles.imageWork} src="../images/works_img_1.png" alt="works" />
            </div>
            <div className={portStyles.workDescription}>
              <div className={portStyles.numberDesc}>
                01
              </div>
              <div className={portStyles.textDesc}>
              <strong>ShelfSet</strong> is a complete tool for shelf space analysis. Leveraging AI technology, users can obtain critical data on how the shelves are laid out, so they can take action on how to maximize and optimize their operations.
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio
