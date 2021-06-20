import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { RiSendPlane2Line } from "react-icons/ri"

export default function Contact() {
  return (
    <>
      <Seo title="Contact" />
      <Layout className="contact-page">
        <div className="wrapper">
          <h2>Parohia "Izvorul Tamaduirii" Covasna</h2>
          <div className="description grids col-1 sm-2">
            <div>
              <h3>Adresa:</h3>
              Strada Toth, nr XX
              <br />
              Orasul Covasna, judetul Covasna
              <br />
              Cod postal: 525200
              <br />
            </div>
            <div>
              <h3>Contact:</h3>
              Paroh Pr. Irimia Cristian Vlad
              <br />
              <a href="tel:+40 722 780 775">+40 722 780 775</a>
              <br />
              <a href="mailto:icvpcs@yahoo.com">icvpcs@yahoo.com</a>
            </div>
          </div>
          <form
            className="contact-form"
            action="/thanks"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                Nume
                <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Email
                <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Subiect
                <input type="text" name="subject" />
              </label>
            </p>
            <p>
              <label>
                Mesaj<textarea name="message"></textarea>
              </label>
            </p>
            <p className="text-align-right">
              <button className="button" type="submit">
                Trimite mesaj{" "}
                <span className="icon -right">
                  <RiSendPlane2Line />
                </span>
              </button>
            </p>
          </form>
        </div>
      </Layout>
    </>
  )
}
