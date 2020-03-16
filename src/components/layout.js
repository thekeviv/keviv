import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import logo from "../logo.png"
import StyledLink from "./styled-link"

const NavLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.8rem;
  text-decoration: none;
  background-color: #daf6ff;
  color: #545454;
  transition: 0.5s;
  &:visited {
    color: #545454;
    transition: 0.5s;
  }
  &:hover {
    transition-duration: 0.5s;
    margin: 0 2rem 0 2rem;
    color: #44d9e6;
    border: 1px solid black;
  }
  &:active {
    font-size: 3rem;
    transition-duration: 0.5s;
  }
`

class Layout extends React.Component {
  render() {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          height: 100vh;
          margin: 0;
        `}
      >
        <nav
          css={css`
            display: flex;
            box-sizing: border-box;
            align-items: center;
            flex-direction: column;
          `}
        >
          <Link to="/">
            <img
              src={logo}
              css={css`
                max-height: 5rem;
                max-width: 100%;
                alt: "logo image";
              `}
            />
          </Link>
          <div
            css={css`
              display: flex;
              flex-direction: row;
            `}
          >
            <NavLink
              to="/"
              css={css`
                border-radius: 1rem 0 0 1rem;
              `}
            >
              Home
            </NavLink>
            <NavLink to="/">Blog</NavLink>
            <NavLink
              to="/"
              css={css`
                margin-right: 0;
                border-radius: 0 1rem 1rem 0;
                &:hover {
                  margin: 0 4rem 0 2rem;
                }
              `}
            >
              Contact
            </NavLink>
          </div>
        </nav>
        {this.props.children}
        <footer
          css={css`
            width: 100%;
            margin-top: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            background-color: #daf6ff;
            padding: 1rem 0 1rem 0;
          `}
        >
          <div
            id="footer-content"
            css={css`
              margin-left: 1rem;
              display: flex;
              flex-direction: column;
            `}
          >
            <span>&copy; 2020 Vivek Sharma</span>
            <div
              id="disclaimer-and-privacy-policy"
              css={css`
                display: flex;
                flex-direction: row;
              `}
            >
              <StyledLink to="/disclaimer">Disclaimer</StyledLink>
              <span>&nbsp; &#124; &nbsp;</span>
              <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
