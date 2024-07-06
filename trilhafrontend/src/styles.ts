import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
	black: '#000000',
	red: '#e53939',
	white: '#fff'
}

export const StyleGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
