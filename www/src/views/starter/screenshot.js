/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"

import screenshot from "../shared/styles"

const Screenshot = ({ imageSharp, repoName }) => (
  <div
    className="screenshot"
    css={{
      position: `relative`,
    }}
  >
    {imageSharp && (
      <Img
        fluid={imageSharp.childImageSharp.fluid}
        alt={`Screenshot of ${repoName}`}
        sx={screenshot}
      />
    )}
  </div>
)

export default Screenshot
