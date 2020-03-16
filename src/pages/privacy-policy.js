import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
export default () => (
  <Layout>
    <div
      id="privacy-content"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 1rem;
      `}
    >
      <h1
        css={css`
          background-color: #daf6ff;
          color: #545454;
          width: 100%;
          padding: 1.5rem;
          text-align: center;
          border-radius: 1rem;
          border: 1px solid black;
        `}
      >
        Privacy Policy
      </h1>
      <h2
        css={css`
          color: #545454;
        `}
      >
        Who am I?
      </h2>
      <p
        css={css`
          margin-top: 0.5rem;
          text-align: left;
        `}
      >
        I am Vivek Sharma and I am a fourth year computer science student at the
        University of Victoria in Canada. My website address is
        https://viveksharma.dev.
      </p>
      <h2
        css={css`
          color: #545454;
        `}
      >
        What personal Data I collect and why?
      </h2>
      <p
        css={css`
          margin-top: 0.5rem;
          text-align: left;
        `}
      >
        <span role="img" aria-label="">
          None 🤷‍♂️
        </span>
      </p>
      <h2
        css={css`
          color: #545454;
        `}
      >
        How can I contact you?
      </h2>
      <p
        css={css`
          margin-top: 0.5rem;
          text-align: left;
        `}
      >
        <span role="img" aria-label="">
          Send me an Email at{" "}
          <a href="mailto: info@viveksharma.dev">info@viveksharma.dev</a>.
        </span>
      </p>
    </div>
  </Layout>
)
