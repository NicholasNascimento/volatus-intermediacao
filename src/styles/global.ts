import styled, { createGlobalStyle } from 'styled-components'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  :root {
    --background: #FAFAFA;
    --dark: #1A1A1A;
    --primary: #FF4428;

    --texts: #F8F8FF;
  }

  html {
    scroll-behavior: smooth;
    
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
  }

  strong, span, p {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }
`