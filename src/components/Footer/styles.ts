import styled from 'styled-components'
import { BsFacebook, BsTelegram } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import { TiSocialInstagram } from 'react-icons/ti'
import { AiFillTwitterCircle } from 'react-icons/ai'

export const Footer = styled.footer`
  height: 15rem;
  background: #1a1a1a;
  display: flex;
`

export const FooterBox = styled.div`
  padding: 0.5rem 12rem 0;
  margin: 1.5rem 0 0;
  width: 50%;
  height: 80%;
  border-right: 2px solid var(--primary);
`

export const FooterName = styled.h2`
  font-size: 2.5rem;
  color: var(--texts);
  border-top: 3px solid var(--primary);
  border-bottom: 3px solid var(--primary);
  width: fit-content;

  span {
    color: var(--primary);
  }
`

export const FooterSubtitle = styled.p`
  font-size: 1rem;
  display: inline-block;
  margin-top: 1rem;
  color: var(--texts);
`

export const Links = styled.div`
  width: 50%;
`

export const FooterTitle = styled.h2`
  font-size: 1.3rem;
  color: var(--primary);
  text-align: right;
  margin: 1rem 10rem;
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
`

export const FacebookLink = styled(BsFacebook)`
  font-size: 1.8rem;
  position: absolute;
  right: 13rem;
  color: var(--texts);
  cursor: pointer;

  transition: filter 200ms;

  &:hover {
    filter: brightness(0.8);
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
`

export const DiscordLink = styled(FaDiscord)`
  font-size: 1.9rem;
  position: absolute;
  right: 19rem;
  background-color: var(--texts);
  border: 2px solid #FAFAFA;
  border-radius: 20px;

  cursor: pointer;

  transition: filter 200ms;

  &:hover {
    filter: brightness(0.8);
  }
`

export const InstagramLink = styled(TiSocialInstagram)`
  font-size: 1.8rem;
  position: absolute;
  right: 22rem;
  background-color: var(--texts);
  border: 2px solid #FAFAFA;
  border-radius: 20px;

  cursor: pointer;

  transition: filter 200ms;

  &:hover {
    filter: brightness(0.8);
  }
`