import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
`

export const Header = styled.header`
  background: #1A1A1A;
  width: 100vw;
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
  background: #F66B0E;

  border-radius: 2rem;
`

export const NavBar = styled.nav`
  margin-top: 1rem;
`

export const Anchor = styled.a`
  padding: 0 2rem;

  font-size: 1.3rem;
  color: #FAFAFA;
  text-decoration: none;

  cursor: pointer;

  transition: opacity 200ms;

  &:hover {
    opacity: 0.7;
  }
`

export const Main = styled.section``

export const Banner = styled.div`
  width: 100%;
  height: 65vh;
  background: #1A1A1A;
`

export const About = styled.section``

export const Informations = styled.div`
  width: 100%;
  height: 65vh;
`

export const Box = styled.div`
  width: 60%;
  height: 20rem;
  margin: 4rem auto;
  background: white;
  border: 2px solid #F66B0E;
  border-radius: 10px;
`