import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as processStyles from "../styles/process.module.css"

const Process = () => {
  return (
    <div className={processStyles.flex_container_fluid}>
      <div className={processStyles.flex_container}>

        <div className={processStyles.container_images}>
          <div className={processStyles.image_1}>
            <StaticImage src="../images/process_img_1.jpg" alt="Demo" />
          </div>
          <div className={processStyles.image_2}>
            <StaticImage src="../images/process_img_2.jpg" alt="Demo" />
          </div>
          <div className={processStyles.image_3}>
            <StaticImage src="../images/process_img_3.jpg" alt="Demo" />
          </div>
          <div className={processStyles.image_4}>
            <StaticImage src="../images/process_img_4.jpg" alt="Demo" />
          </div>
        </div>

        <div className={processStyles.container_process}>

          <div className={processStyles.container_howWedo}>
            <h2 className={processStyles.titleSection}>PROCESS</h2>
            <p className={processStyles.subtitleSection}>And how we do it...</p>
            <div className={processStyles.descriptionSection}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique mauris mattis facilisi vedivpellentesque aliquet lorem viverra nunc tincidunt.</p>
            <p>Condimentum scelerisque sed at quis sit magna quam nisl cursus quam sed non fames adipiscing enim varius libero ullamcorper enim non aliquam duis.</p></div>
          </div>
          <div className={processStyles.container_weDoItems}>
            <div>
              <div className={processStyles.arrowNumber}>                
                <div className={processStyles.processArrow}><StaticImage src="../images/process_arrow_white.svg" alt="Demo" /></div>
                <div className={processStyles.number_123}>1</div>
              </div>
              <div className={processStyles.item_123}>Roadmapping & Strategy</div>
              <div className={processStyles.arrowNumber}>                
                <div className={processStyles.processArrow}><StaticImage src="../images/process_arrow_white.svg" alt="Demo" /></div>
                <div className={processStyles.number_123}>2</div>
              </div>
              <div className={processStyles.item_123}>UX/UI Research & Product Design</div>
              <div className={processStyles.arrowNumber}>                
                <div className={processStyles.processArrow}><StaticImage src="../images/process_arrow_yellow.svg" alt="Demo" /></div>
                <div className={processStyles.number_123}>3</div>
              </div>
              <div className={processStyles.item_123}>Development & QA</div>
              <div className={processStyles.number_4}>4</div>
              <div className={processStyles.item_4}>Launch & Grow</div>
            </div>
          </div>

          <div className={processStyles.frameVideo}>
            <div className={processStyles.container_video}>
              <div className={processStyles.video_text}>
                <p>We see ourselves as product craftsmen, taking a holistic approach to software engineering, where we give code quality, UI & UX design, and product management the same love.</p>
                <div className={processStyles.btn_scheMeet}>SCHEDULE A MEETING</div>
              </div>
              <div className={processStyles.video_preview}><StaticImage src="../images/process_preview_video.jpg" alt="Demo" /></div>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Process
