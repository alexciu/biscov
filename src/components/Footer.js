import React from "react"
import {
  RiHeart2Line,
  RiFacebookBoxLine,
  RiMessengerLine,
  RiPhoneLine,
  RiMailLine,
} from "react-icons/ri"

function Footer({ creator }) {
  return (
    <footer className="site-footer">
      <div className="container social">
        <a href="mailto:icvpcs@yahoo.com">
          &nbsp;
          <span className="icon -social">
            <RiMailLine />
          </span>
        </a>
        <a href="tel:+40 745 059 281">
          &nbsp;
          <span className="icon -social">
            <RiPhoneLine />
          </span>
        </a>
        <a
          href="https://m.me/BisericadelemnMontanadinStatiuneaCovasna"
          target="NEW"
        >
          &nbsp;
          <span className="icon -social">
            <RiMessengerLine />
          </span>
        </a>
        <a
          href="https://www.facebook.com/BisericadelemnMontanadinStatiuneaCovasna"
          target="NEW"
        >
          &nbsp;
          <span className="icon -social">
            <RiFacebookBoxLine />
          </span>
        </a>
      </div>
      <div className="container">
        <p>
          © {new Date().getFullYear()} Parohia Izvorul Tamaduirii | created by{" "}
          <span className="icon -love">
            <RiHeart2Line />
          </span>{" "}
          {creator}
        </p>
      </div>
    </footer>
  )
}

export default Footer
