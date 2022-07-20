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
    --primary: #F66B0E;

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

export const Header = styled.header`
  background: var(--dark);
  width: 100%;
  height: 6rem;
`

export const HeaderContent = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1rem 0;
  align-items: center;
  justify-content: space-between;
  display: flex;

`

export const Logo = styled.div`
  width: 4rem;
  height: 4rem;
  background: var(--primary);

  border-radius: 2rem;
`

export const NavBar = styled.nav`
  margin-top: 1rem;

  @media (max-width: 800px) {
    display: none;
  }
`

export const Anchor = styled.a`
  padding: 0 2rem;

  font-size: 1.3rem;
  color: var(--background);
  text-decoration: none;

  cursor: pointer;

  transition: opacity 200ms;

  &:hover {
    opacity: 0.7;
  }
`

export const Menu = styled(BiMenu)`
  position: absolute;
  display: none;
  top: 2rem;
  right: 4rem;

  font-size: 3rem;
  color: var(--primary);

  cursor: pointer;

  @media (max-width: 800px) {
    display: initial;
  }
`

export const MenuArea = styled.div`
  width: 100%;
  height: 100vh;

  background: var(--dark);
`

export const CloseMenu = styled(MdOutlineClose)`
  position: absolute;
  top: 2rem;
  right: 4rem;

  font-size: 3rem;
  color: var(--primary);

  cursor: pointer;
`

export const NavList = styled.ul`
  width: 60%;
  margin: 0 auto;
  padding-top: 4rem;
`

export const NavItemList = styled.li`
  padding: 4rem;

  font-size: 2rem;
  color: #FAFAFA;
  list-style: none;
  text-align: center;

  a {
    text-decoration: none;
    color: #FAFAFA;
    
    cursor: pointer;
  }
`

export const Main = styled.section``

export const Banner = styled.div`
  width: 100%;
  height: 65vh;
  background: var(--dark);
`

export const Texts = styled.div`
  width: 55%;
  padding: 10rem 0 0 12rem;
`

export const Title = styled.h1`
  color: var(--texts);
  font-size: 4rem;
`

export const Subtitle = styled.strong`
  color: var(--primary);
  font-size: 2.5rem;
`

export const About = styled.section`
  margin: 6rem 0;
`

export const Informations = styled.div`
  width: 100%;
  
`

export const TextBox = styled.div`
  width: 50%;
  
`

export const InformationsTitle = styled.h2`
  width: 20rem;
  margin: 4rem 0 0 12rem;
  background: var(--primary);

  font-size: 3rem;
  text-align: center;
  color: #FAFAFA;

  border-radius: 8px 8px 0 0;
`

export const Box = styled.div`
  width: 100%;
  height: 30rem;
  margin: 0 0 0 12rem;
  background: var(--background);
  border: 4px solid var(--primary);;
  border-radius: 0 10px 10px 10px;
`

export const TextsParagraph = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 6rem 2rem;
  text-align: center;
`

export const Advantages = styled.section``

export const AdvantagesBox = styled.div`
  width: 100%;
  height: 60vh;
`