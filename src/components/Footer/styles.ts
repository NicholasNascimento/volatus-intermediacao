import styled from 'styled-components'
import { BsFacebook, BsTelegram } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import { TiSocialInstagram } from 'react-icons/ti'
import { AiFillTwitterCircle } from 'react-icons/ai'

export const Footer = styled.footer`
  height: 15rem;
  background: #1a1a1a;
  display: flex;

  @media (max-width: 500px) {
    height: 12rem;
  }
`

export const FooterBox = styled.div`
  padding: 0.5rem 12rem 0;
  margin: 1.5rem 0 0;
  width: 50%;
  height: 80%;
  border-right: 2px solid var(--primary);

  @media (max-width: 1200px) {
    padding: 0.5rem 8rem 0;
  }

  @media (max-width: 1000px) {
    padding: 0.5rem 6rem 0;
  }
  
  @media (max-width: 1000px) {
    padding: 0.5rem 3rem 0;
  }

  @media (max-width: 500px) {
    padding: 0.5rem 1rem 0;
  }

  @media (max-width: 350px) {
    border-right: none;
  }
`

export const FooterName = styled.h2`
  font-size: 2.5rem;
  float: left;
  padding: 1.2rem 0.5rem 0;
  color: var(--texts);
  width: fit-content;

  span {
    color: var(--primary);
  }
`

export const AlternativeLogo = styled.img`
  width: 320px;
  display: flex;

  @media (max-width: 1000px) {
    width: 220px;
  }

  @media (max-width: 850px) {
    width: 180px;
  }

  @media (max-width: 500px) {
    width: 160px;
  }

  @media (max-width: 430px) {
    display: none;
  }
`

export const NamelessLogo = styled.img`
  width: 80px;
  display: none;

  @media (max-width: 430px) {
    display: block;
  }
`

export const FooterSubtitle = styled.p`
  font-size: 1rem;
  display: block;
  margin: 1rem 0 0 0.5rem;
  color: var(--texts);

  @media (max-width: 320px) {
    font-size: 0.8rem;
    margin: 1rem 0 0 0;
  }
`

export const Links = styled.div`
  width: 50%;
  
  a {
    color: var(--dark);
  }
  
  @media (max-width: 360px) {
    width: 60%;
  }
`

export const FooterTitle = styled.h2`
  font-size: 1.3rem;
  color: var(--primary);
  text-align: right;
  margin: 1rem 10rem;

  @media (max-width: 1200px) {
    margin: 1rem 8rem;
  }

  @media (max-width: 1000px) {
    margin: 1rem 6rem;
  }

  @media (max-width: 850px) {
    font-size: 1rem;
    margin: 1rem 3rem 1rem 0;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
    margin: 2rem 1rem 1rem 0;
  }
`

export const TwiterLink = styled(AiFillTwitterCircle)`
  font-size: 2rem;
  position: absolute;
  right: 10rem;
  color: var(--texts);
  cursor: pointer;

  transition: filter 200ms;

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 1000px) {
    right: 6rem;
  }

  @media (max-width: 850px) {
    right: 3rem;
  }

  @media (max-width: 500px) {
    right: 1.5rem;
    font-size: 1.7rem;
  }

  @media (max-width: 320px) {
    right: 1rem;
  }
`

export const FacebookLink = styled(BsFacebook)`
  font-size: 1.8rem;
  position: absolute;
  right: 16rem;
  color: var(--texts);
  cursor: pointer;

  transition: filter 200ms;

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 1000px) {
    right: 12rem;
  }

  @media (max-width: 850px) {
    right: 9rem;
  }

  @media (max-width: 500px) {
    right: 6.5rem;
    font-size: 1.5rem;
  }

  @media (max-width: 320px) {
    right: 6rem;
  }
`

export const TelegramLink = styled(BsTelegram)`
  font-size: 1.8rem;
  position: absolute;
  right: 16rem;
  color: var(--texts);
  cursor: pointer;

  transition: filter 200ms;

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 1000px) {
    right: 12rem;
  }

  @media (max-width: 850px) {
    right: 9rem;
  }

  @media (max-width: 500px) {
    right: 6.5rem;
    font-size: 1.5rem;
  }

  @media (max-width: 320px) {
    right: 6rem;
  }
`

export const DiscordLink = styled(FaDiscord)`
  position: absolute;
  right: 10rem;
  background-color: var(--texts);

  font-size: 1.9rem;
  border: 2px solid #FAFAFA;
  border-radius: 20px;

  transition: filter 200ms;

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 1000px) {
    right: 6rem;
  }

  @media (max-width: 850px) {
    right: 3rem;
  }

  @media (max-width: 500px) {
    right: 1.5rem;
    font-size: 1.6rem;
  }

  @media (max-width: 320px) {
    right: 1rem;
  }
`

export const InstagramLink = styled(TiSocialInstagram)`
  font-size: 1.9rem;
  position: absolute;
  right: 13rem;
  background-color: var(--texts);
  border: 2px solid #FAFAFA;
  border-radius: 20px;

  transition: filter 200ms;

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 1000px) {
    right: 9rem;
  }

  @media (max-width: 850px) {
    right: 6rem;
  }

  @media (max-width: 500px) {
    right: 4rem;
    font-size: 1.6rem;
  }

  @media (max-width: 320px) {
    right: 3.5rem;
  }
`