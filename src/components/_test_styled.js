import React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import Footer from "./Footer"
import Button from "./Button"

const Wrapper = styled("div")`
  border: 2px solid green;
  padding: 10px;
  background: blue;
`

export default function Layoutx({ children }) {
  return (
    <Wrapper>
      <Global
        styles={css`
          .ciu {
            background: red;
            color: white;
          }
        `}
      />
      <div className="ciu">al doilea div</div>
      {children}
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <Footer creator="The Zbenga" />
    </Wrapper>
  )
}
