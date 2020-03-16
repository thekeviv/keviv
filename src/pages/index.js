import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
export default () => (
  <Layout>
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 4rem 0 4rem;
      `}
    >
      <h2
        css={css`
          text-align: center;
          color: #545454;
        `}
      >
        Hello Friend
        <span role="img" aria-label="Hand Wave Emoji">
          👋
        </span>{" "}
        I am Vivek, No, you didn't say that right, but that's alright{" "}
        <span role="img" aria-label="cant do anything emoji">
          🤷‍♂️
        </span>
      </h2>
      <h2
        css={css`
          text-align: center;
          color: #545454;
          margin: 1rem 5rem 0 5rem;
        `}
      >
        I am building this website while learning React, Gatsby and GraphQL.
        Wish me good luck
        <span role="img" aria-label="Star eyes emoji">
          🤩
        </span>
      </h2>
    </div>
  </Layout>
)
