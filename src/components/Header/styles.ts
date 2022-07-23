import styled from 'styled-components'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'

export const Header = styled.header`
  background: var(--dark);
  width: 100%;
  height: 6rem;

  @media (max-width: 400px) {
    height: 5rem;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  text-align: right;
`

export const LogoBox = styled.div`
  width: 25%;
  padding: 1rem 2rem 0.5rem;
  position: absolute;
  background-color: var(--background);

  @media (max-width: 1450px) {
    padding: 1.5rem 2rem 0.9rem;
  }

  @media (max-width: 1150px) {
    padding: 2.2rem 2rem 1rem;
  }

  @media (max-width: 850px) {
    padding: 2.4rem 2rem 1rem;
  }

  @media (max-width: 800px) {
    width: 16rem;
  }

  @media (max-width: 550px) {
    padding: 2.6rem 2rem 1.3rem;
    width: 12rem
  }

  @media (max-width: 400px) {
    padding: 2rem 2rem 0.9rem;
  }
`

export const Logo = styled.img`
  max-width: 320px;

  @media (max-width: 1450px) {
    max-width: 250px;
  }

  @media (max-width: 1150px) {
    max-width: 180px;
  }

  @media (max-width: 850px) {
    max-width: 160px;
  }

  @media (max-width: 550px) {
    max-width: 120px;
  }
`

export const NavContent = styled.div`  
  padding: 1.5rem 6rem;
  width: 100%;
  text-align: right;
  align-items: right;

  @media (max-width: 1450px) {
    padding: 1.7rem 4rem;
  }

  @media (max-width: 1150px) {
    padding: 1.7rem 2rem;
  }
`

export const NavBar = styled.nav`
  margin-top: 1rem;

  @media (max-width: 1150px) {
    margin-top: 1.2rem;
  }

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

  @media (max-width: 1450px) {
    font-size: 1.1rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 1150px) {
    font-size: 1rem;
    padding: 0 1.2rem;
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

  @media (max-width: 400px) {
    font-size: 2.5rem;
    right: 1rem;
    top: 1.2rem;
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
  padding: 3rem 0;

  font-size: 1.5rem;
  color: #FAFAFA;
  list-style: none;
  text-align: center;

  a {
    text-decoration: none;
    color: #FAFAFA;
    
    cursor: pointer;
  }

  @media (max-width: 400px) {
    font-size: 1.2rem;
    padding: 3rem 0;
  }
`