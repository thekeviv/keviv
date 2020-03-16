import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
export default () => (
  <Layout>
    <div
      id="disclaimer-content"
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
        Disclaimer
      </h1>
      <p
        css={css`
          margin-top: 2rem;
          text-align: left;
        `}
      >
        All the information on this website is published in good faith and for
        general information purpose only. This website does not make any
        warranties about the completeness, reliability and accuracy of this
        information. Any action you take upon the information you find on this
        website (viveksharma.dev), is strictly at your own risk. will not be
        liable for any losses and/or damages in connection with the use of our
        website.
      </p>
      <p
        css={css`
          margin-top: 2rem;
          text-align: left;
        `}
      >
        From my website, you can visit other websites by following hyperlinks to
        such external sites. While I strive to provide only quality links to
        useful and ethical websites, I have no control over the content and
        nature of these sites. These links to other websites do not imply a
        recommendation for all the content found on these sites. Site owners and
        content may change without notice and may occur before we have the
        opportunity to remove a link which may have gone ‘bad’.
      </p>

      <p
        css={css`
          margin-top: 2rem;
          text-align: left;
        `}
      >
        Please be also aware that when you leave our website, other sites may
        have different privacy policies and terms which are beyond our control.
        Please be sure to check the Privacy Policies of these sites as well as
        their “Terms of Service” before engaging in any business or uploading
        any information.
      </p>

      <h2
        css={css`
          color: #545454;
        `}
      >
        Consent
      </h2>
      <p
        css={css`
          margin-top: 0.5rem;
          text-align: left;
        `}
      >
        By using my website, you hereby consent to my disclaimer and agree to
        its terms.
      </p>
      <h2
        css={css`
          color: #545454;
        `}
      >
        Update
      </h2>
      <p
        css={css`
          margin-top: 0.5rem;
          text-align: left;
        `}
      >
        Should I update, amend or make any changes to this document, those
        changes will be prominently posted here.
      </p>
    </div>
  </Layout>
)
