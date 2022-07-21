import styled from 'styled-components'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import { AiFillCheckCircle, AiFillTwitterCircle } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsFacebook, BsTelegram } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import { TiSocialInstagram } from 'react-icons/ti'

export const Header = styled.header`
  background: var(--dark);
  width: 100%;
  height: 6rem;
`

export const HeaderContent = styled.div`
  width: 90%;
  display: flex;
  text-align: right;
`

export const LogoBox = styled.div`
  width: 25%;
  padding: 0 0 0.1rem;
  position: absolute;
  background-color: var(--texts);
  
`

export const Logo = styled.img`
  max-width: 320px;
`

export const NavContent = styled.div`  
  padding: 2rem 0;
  width: 100%;
  text-align: right;
  align-items: right;
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
  height: 75vh;
  background: var(--dark);
  border-top: 1px solid gray;
  box-shadow: 0px 4px 16px 0px rgba(26,26,26,1);
`

export const Texts = styled.div`
  width: 55%;
  padding: 14rem 0 0 12rem;
`

export const Title = styled.h1`
  color: var(--texts);
  font-size: 6rem;
`

export const Subtitle = styled.strong`
  color: var(--primary);
  font-size: 2.5rem;
`

export const Whatis = styled.section`
  margin: 10rem 0;
`

export const Informations = styled.div`
  width: 100%;
  display: flex;
`

export const TextBox = styled.div`
  width: 50%;
`

export const InformationsTitle = styled.h2`
  padding: 0.5rem 2rem;
  width: 100%;
  background-image: linear-gradient(to left, #e9861c, #e27b19, #db7116, #d46613, #cd5b11);

  font-size: 3rem;
  text-align: right;
  color: #FAFAFA;

  border-radius: 0 8px 8px 0;
`

export const Box = styled.div`
  width: 80%;
  height: 30rem;
  margin: 0 0 0 12rem;
  background: var(--background);
`

export const TopTextsParagraph = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.5rem;
  padding: 6rem 2rem;
  text-align: center;
`

export const InformationsImg = styled.div`
  width: 40%;
  height: 40rem;
  display: flex;
  background-color: var(--dark);
  margin: 0 0 0 6rem;
`

export const BottomTextsParagraph = styled.p`
  width: 80%;
  margin: 4rem auto;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.5rem;
`

export const About = styled.section`
  margin: 0 0 10rem 0;
`

export const AdvantagesBox = styled.div`
  display: flex;
`

export const AboutTextBox = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
`

export const AboutSectionTitle = styled.h2`
  padding: 0.5rem 2rem;
  width: 100%;
  background-image: linear-gradient(to right, #e9861c, #e27b19, #db7116, #d46613, #cd5b11);

  font-size: 3rem;
  text-align: left;
  color: #FAFAFA;

  border-radius: 8px 0 0 8px;
`

export const AboutBox = styled.div`
  width: 80%;
  
  margin: 0 12rem 0 0;
  background: var(--background);
`

export const Advantages = styled.section`
  padding: 0 0 4rem;
  background-color: var(--dark);
  box-shadow: 0px -6px 16px 0px rgba(26,26,26,1);
`

export const AdvantagesTitle = styled.h2`
  font-size: 5rem;
  color: var(--texts);
  text-align: center;
  padding-top: 2rem;
`

export const CardsBox = styled.div`
  display: flex;
  width: 80%;
  margin: 4rem auto;
  flex-direction: row;
  gap: 3.2rem;
`

export const CardBox = styled.div`
  padding: 2.4rem;
  text-align: left;

  background: white;

  border: 1px solid var(--brand-light);
  border-radius: 0.6rem;

  transition: transform 400ms;

  h3 {
    margin-block: 1rem;
  }

  &:hover{
    transform: scale(1.1);
  }
`

export const Check = styled(AiFillCheckCircle)`
  font-size: 2rem;
  color: #17B169;
`

export const Collaborators = styled.section`
  background-color: #FAFAFA;
`

export const CollaboratorsTitle = styled.h2`
  font-size: 5rem;
  text-align: center;
  margin: 8rem 0 0;
  padding: 0.8rem 0;
  background-image: linear-gradient(to right, #f08e1f, #e8831c, #e07819, #d86d17, #d06215, #d06215, #d06215, #d06215, #d86d17, #e07819, #e8831c, #f08e1f);
  color: var(--texts);
`

export const CollaboratorArea = styled.div`
  display: flex;
`

export const LeftCollaboratorPhotoBox = styled.div`
  width: 40%;
  height: 40rem;
  margin-top: 10rem;
  background-image: linear-gradient(to left, #1a1a1a, #222222, #2a2a2a, #323232, #3a3a3a);
  border-radius: 0 15px 15px 0;
`

export const CollaboratorTextBox = styled.div`
  text-align: center;
  margin: 20rem auto;
  width: 40%;
`

export const CollaboratorName = styled.h3`
  font-size: 5rem;
  font-weight: 600;
  color: var(--primary);
`

export const CollaboratorDescription = styled.strong`
  font-size: 1.5rem;
`

export const RightCollaboratorPhotoBox = styled.div`
  width: 40%;
  height: 40rem;
  margin-top: 10rem;
  background-image: linear-gradient(to right, #1a1a1a, #222222, #2a2a2a, #323232, #3a3a3a);
  border-radius:  15px 0 0 15px ;
`

export const Contact = styled.section`
  background-color: #FAFAFA;
`

export const ContactInformations = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
`

export const ContactInformationsContent = styled.div`
  width: 30rem;
  padding: 15rem 0 0 5rem;
`

export const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--dark);
`

export const ContactList = styled.ul``

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
`

export const EmailIcon = styled(HiOutlineMail)`
  font-size: 2rem;
  color: var(--primary);
`

export const WppButton = styled.a`
  background: var(--primary);
  border: none;
  border-radius: 4rem;

  margin: 2rem 0 0;

  padding: 1rem 3.2rem;
  width: fit-content;

  color: #FAFAFA;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  cursor: pointer;

  transition: filter 200ms;

  &:hover {
    filter: brightness(0.8);
  }
`

export const WppIcon = styled(IoLogoWhatsapp)`
  font-size: 2rem;
  color: #FAFAFA;
`

export const ContactImg = styled.div`
  width: 40rem;
  height: 25rem;
  display: flex;
  background-color: var(--dark);
  margin: 10rem 0 10rem;
  border-radius: 10px;
`

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
  color: var(--texts);
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
  color: var(--texts);
  border: 2px solid #FAFAFA;
  border-radius: 20px;

  cursor: pointer;

  transition: filter 200ms;

  &:hover {
    filter: brightness(0.8);
  }
`