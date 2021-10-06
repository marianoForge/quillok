import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as footerStyles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <div className={footerStyles.flex_container_fluid}>
      <div className={footerStyles.flex_container}>
        <div className={footerStyles.footer_container}>

            <div className={footerStyles.footer_logo}>
                <Link to="/">
                    <StaticImage src="../images/logo_footer.svg" alt="Quillok" />
                </Link>
                <p>Helping businesses launch fast <br></br> and grow strong.  </p>
            </div>

            <div className={footerStyles.footer_contact}>
                <div className={footerStyles.contact_title}>Contact</div>
                <p mailto="hello@quillok.com" className={footerStyles.contact_mail}>hello@quillok.com</p>
                <p className={footerStyles.contact_address}>Montevideo, Uruguay.</p>
            </div>

            <div className={footerStyles.footer_joinUs}>
                <div className={footerStyles.joinUs_title}>Join Us</div>
                <p className={footerStyles.joinUs_careers}>Careers</p>
            </div>

            <div className={footerStyles.footer_beSocial}>
                <div className={footerStyles.beSocial_title}>Be Social</div>
                <div className={footerStyles.beSocial_rrss}>
                    <div>
                        <StaticImage src="../images/bt_linkedin_footer.svg" alt="LinkedIn" />
                    </div>
                    <div>
                        <StaticImage src="../images/bt_global_footer.svg" alt="Global" />
                    </div>
                </div>
            </div>

            <div className={footerStyles.footer_getBonus}>
                <div className={footerStyles.btn_getBonus}>GET A BONUS</div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer