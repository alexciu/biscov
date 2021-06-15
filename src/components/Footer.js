import React from "react"

function Footer({ creator }) {
  return (
    <footer>
      © {new Date().getFullYear()} Parohia Izvorul Tamaduirii | created by{" "}
      {creator}
    </footer>
  )
}

export default Footer
