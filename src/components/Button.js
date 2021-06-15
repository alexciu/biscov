// import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Buton = styled("button")`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`

export default Buton
