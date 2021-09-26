import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Process from "../components/Process"
import Portfolio from "../components/Portfolio"
import Testimonials from "../components/Testimonials"
// import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
    </Layout>
  )
}
