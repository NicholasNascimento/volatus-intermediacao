import styled from 'styled-components'
import { AiFillCheckCircle } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { IoLogoWhatsapp } from 'react-icons/io'

export const Container = styled.div`
  width: 100%;
  background: var(--background);
`

export const Main = styled.section``

export const Banner = styled.img`
  width: 100%;
  border-top: 1px solid gray;
  box-shadow: 0px 4px 16px 0px rgba(26,26,26,1);

  @media (max-width: 430px) {
    display: none;
  }
`

export const MobileBanner = styled.img`
  display: none;
  width: 100%;
  border-top: 1px solid gray;
  box-shadow: 0px 4px 16px 0px rgba(26,26,26,1);

  @media (max-width: 430px) {
    display: initial;
  }
`

export const MobileTitleBox = styled.div`
  display: none;
  margin: -1rem 0 0;
  width: 100%;
  height: 10rem;
  background-color: var(--dark);
  text-align: center;

  @media (max-width: 430px) {
    display: flex;
  }
`

export const MobileTitle = styled.h1`
  display: none;
  margin-top: 3rem;
  width: 100%;
  text-align: center;

  font-size: 1.2rem;
  color: var(--primary);

  strong {
    color: var(--texts);
    font-size: 0.8rem;

    @media (max-width: 320px) {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 430px) {
    display: initial;
  }

  @media (max-width: 320px) {
    margin-top: 3.5rem;
    font-size: 1rem;
  }
`

export const Whatis = styled.section`
  margin: 10rem 0;

  @media (max-width: 650px) {
    margin: 5rem 0 0;
  }
`

export const Informations = styled.div`
  width: 100%;
  display: flex;
`

export const TextBox = styled.div`
  width: 50%;

  @media (max-width: 650px) {
    width: 65%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`

export const InformationsTitle = styled.h2`
  padding: 0.5rem 2rem;
  width: 100%;
  background-image: linear-gradient(to right, #ff4428, #fa4c32, #f5533b, #ef5a44, #e9604c);

  font-size: 3rem;
  text-align: right;
  color: var(--texts);

  border-radius: 0 8px 8px 0;

  @media (max-width: 650px) {
    width: 100%;
    padding: 1rem 2rem;
    font-size: 2rem;
  }

  @media (max-width: 400px) {
    border-radius: 0 0 0 0;
    text-align: center;
    font-size: 1.7rem;
  }
`

export const Box = styled.div`
  width: 100%;
  height: 30rem;
  margin: 10rem 0 0 10rem;

  @media (max-width: 1200px) {
    margin: 10rem 0 0 4rem;
  }

  @media (max-width: 1000px) {
    margin: 10rem 0 0 2rem;
  }

  @media (max-width: 650px) {
    margin: 8rem 0 0 2rem;
    height: 18rem;
  }

  @media (max-width: 400px) {
    margin: 18rem auto 0;
    width: 80%;
    height: fit-content;
  }
`

export const TopTextsParagraph = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.5rem;
  padding: 6rem 2rem;
  text-align: left;

  @media (max-width: 1200px) {
    padding: 4rem 2rem;
    line-height: 2.2rem;
  }

  @media (max-width: 650px) {
    font-size: 1.2rem;
    padding: 0 2rem;
    line-height: 1.8rem;
  }

  @media (max-width: 530px) {
    padding: 0 1rem 0 0.5rem;
  }

  @media (max-width: 400px) {
    line-height: 1.6rem;
    font-size: 1rem;
    text-align: center;
  }
`

export const InformationsImg = styled.div`
  width: 40%;
  display: flex;
  margin: 4rem 0 0 6rem;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const InformationsImgMedium = styled.div`
  width: 40%;
  display: none;
  margin: 8rem 0 0 6rem;

  @media (max-width: 1000px) {
    display: flex;
    margin: 8rem 0 0 4rem;
  }

  @media (max-width: 650px) {
    display: none;
  }
`

export const InformationsImgSmall = styled.div`
  width: 10rem;
  display: none;
  margin: 8rem 0 0 6rem;

  @media (max-width: 650px) {
    display: flex;
    margin: 12rem 0 0 2rem;
  }

  @media (max-width: 400px) {
    position: absolute;
    width: 100%;
    margin: 6rem auto;
  }
`

export const BottomTextsParagraph = styled.p`
  width: 80%;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.5rem;

  @media (max-width: 1200px) {
    width: 84%;
    line-height: 2.2rem;
  }

  @media (max-width: 650px) {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }

  @media (max-width: 530px) {
    width: 80%;
    font-size: 1.2rem;
    padding: 1rem 1rem 0 0.5rem;
    line-height: 1.6rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
    text-align: center;
  }
`

export const About = styled.section``

export const AboutSectionTitle = styled.h2`
  padding: 0.5rem 0 0.5rem 2rem;
  float: right;
  width: 60%;
  background-image: linear-gradient(to left, #ff4428, #fa4c32, #f5533b, #ef5a44, #e9604c);

  font-size: 3rem;
  text-align: left;
  color: var(--texts);

  border-radius: 8px 0 0 8px;

  @media (max-width: 750px) {
    font-size: 2rem;
    padding: 1rem 0 1rem 1rem;
  }

  @media (max-width: 750px) {
    font-size: 2rem;
    padding: 1rem 0 1rem 1rem;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
    width: 100%;
    text-align: center;
    border-radius: 0 0 0 0;
    margin-bottom: 4rem;
  }

  @media (max-width: 400px) {
    padding: 1rem;
  }
`

export const AboutTopTextContent = styled.div`
  width: 55%;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 530px) {
    width: 92%;
    margin: 0 auto;
  }
`

export const AboutLineBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: block;
  }
`

export const AboutImg = styled.div`
  display: flex;
  width: 30%;
  margin: 12rem 0 0 10rem;

  @media (max-width: 1200px) {
    margin: 14rem 0 0 10rem;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`

export const AboutMediumImg = styled.div`
  display: none;
  width: 20rem;

  @media (max-width: 1000px) {
    display: flex;
    margin: 14rem 0 0 4rem;
  }

  @media (max-width: 800px) {
    margin: 14rem 0 0 2rem;
  }

  @media (max-width: 650px) {
    display: none;
  }
`

export const AboutSmallImg = styled.div`
  display: none;
  width: 20rem;
  margin: 14rem 0 0 2rem;

  @media (max-width: 650px) {
    display: flex;
  }

  @media (max-width: 600px) {
    display: block;
    width: 100%;
    margin: 18rem auto 0;
  }

  @media (max-width: 400px) {
    margin: 14rem auto 0;
  }

  @media (max-width: 350px) {
    margin: 12rem auto 0;
  }
`

export const AboutTopTextBox = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    margin: 2rem auto 0;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 750px) {
    margin: 4rem auto 0;
  }

  @media (max-width: 650px) {
    margin: 4rem auto 0;
  }
`

export const AboutBigTextParagraph = styled.p`
  width: 100%;
  margin: 4rem 0;
  padding: 0 12rem;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.5rem;

  @media (max-width: 1200px) {
    margin: 0 0 4rem;
    padding: 0 6rem;
  }

  @media (max-width: 1000px) {
    margin: 2rem 0 4rem;
    padding: 0 4rem;
  }

  @media (max-width: 650px) {
    font-size: 1.2rem;
    line-height: 2rem;
  }

  @media (max-width: 600px) {
    padding: 0 2rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
    padding: 0 1.5rem;
    text-align: center;
  }
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

  @media (max-width: 650px) {
    font-size: 4rem;
  }

  @media (max-width: 350px) {
    font-size: 3rem;
  }
`

export const CardsBoxColumn = styled.div`
  display: block;

  @media (max-width: 1000px) {
    display: flex;
  }

  @media (max-width: 850px) {
    flex-direction: block;
  }

  @media (max-width: 650px) {
    display: block;
  }
`


export const CardsBox = styled.div`
  display: flex;
  width: 80%;
  margin: 4rem auto;
  
  gap: 3.2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 4rem 0.5rem;
    gap: 2rem;
  }

  @media (max-width: 650px) {
    margin: 2rem auto;
    gap: 2rem;
  }
`

export const CardBox = styled.div`
  padding: 2.4rem;
  margin: 0 auto;
  text-align: left;
  width: 28rem;
  height: 17rem;

  background: var(--background);

  border: 1px solid var(--brand-light);
  border-radius: 0.6rem;

  transition: transform 400ms;

  h3 {
    margin-block: 1rem;
  }

  &:hover{
    transform: scale(1.1);
  }

  @media (max-width: 1200px) {
    padding: 1.5rem;
  }

  @media (max-width: 1000px) {
    width: 22rem;
  }

  @media (max-width: 750px) {
    width: 18rem;
    margin: 0 auto;
  }

  @media (max-width: 650px) {
    width: 25rem;
    margin: 0 auto;
  }

  @media (max-width: 650px) {
    width: 20rem;
  }

  @media (max-width: 330px) {
    width: 17rem;
  }

  @media (max-width: 300px) {
    width: 15rem;
  }
`

export const Check = styled(AiFillCheckCircle)`
  font-size: 2rem;
  color: #17B169;
`

export const Collaborators = styled.section`
  .white-space {
    margin-top: 8rem;

    @media (max-width: 800px) {
      margin-top: 3rem;
    }
  }
`

export const CollaboratorsTitle = styled.h2`
  font-size: 5rem;
  text-align: center;
  margin: 8rem 0 0;
  padding: 0.8rem 0;
  background-image: linear-gradient(to right, #f06d59, #f36651, #f75f48, #f9583f, #fc5036, #fc5036, #fc5036, #fc5036, #f9583f, #f75f48, #f36651, #f06d59);
  color: var(--texts);

  @media (max-width: 800px) {
    font-size: 3.5rem;
  }

  @media (max-width: 450px) {
    font-size: 2.5rem;
  }

  @media (max-width: 350px) {
    font-size: 2.2rem;
  }
`

export const CollaboratorArea = styled.div`
  display: flex;

  @media (max-width: 800px) {
    display: block;
  }
`

export const LeftCollaboratorPhotoBox = styled.div`
  width: 40%;
  height: 40rem;
  margin-top: 10rem;
  background-image: linear-gradient(to left, #1a1a1a, #222222, #2a2a2a, #323232, #3a3a3a);
  border-radius: 0 15px 15px 0;
  align-items: center;

  @media (max-width: 1000px) {
    height: 30rem;
  }

  @media (max-width: 800px) {
    width: 100%;
    border-radius: 0;
    margin-top: 5rem;
  }

  @media (max-width: 800px) {
    height: 25rem;
  }
`

export const CollaboratorPhoto = styled.img`
  height: 90%;
  display: flex;
  margin: 2rem auto;
  border-radius: 15px;

  @media (max-width: 800px) {
    padding: 1rem 0;
    height: 100%;
    border-radius: 15px;
    margin: 0 auto;
  }
`

export const CollaboratorTextBox = styled.div`
  text-align: center;
  margin: 10rem auto 0;
  width: 50%;

  @media (max-width: 1000px) {
    margin: 5rem auto 0;
  }

  @media (max-width: 800px) {
    margin: 3rem auto 0;
    width: 80%;
  }
`

export const CollaboratorName = styled.h3`
  font-size: 5rem;
  font-weight: 600;
  border-bottom: 2px solid var(--primary);
  color: var(--primary);

  @media (max-width: 1550px) {
    font-size: 3.5rem;
  }

  @media (max-width: 1000px) {
    font-size: 3rem;
  }

  @media (max-width: 800px) {
    width: fit-content;
    margin: 0 auto;
  }

  @media (max-width: 450px) {
    font-size: 2.2rem;
  }

  @media (max-width: 350px) {
    font-size: 2rem;
  }
`

export const MainCollaboratorDescription = styled.strong`
  font-size: 1.5rem;
  line-height: 2.2rem;
  display: flex;
  text-align: left;
  margin-top: 4rem;
  padding: 0 0 0 2.5rem;

  @media (max-width: 1000px) {
    margin-top: 2rem;
    font-size: 1.3rem;
  }

  @media (max-width: 800px) {
    text-align: center;
    font-weight: 400;
  }

  @media (max-width: 450px) {
    font-size: 1.1rem;
    line-height: 1.8rem;
  }
`

export const SecondaryCollaboratorDescription = styled.strong`
  font-size: 1.5rem;
  line-height: 2.2rem;
  display: flex;
  width: 80%;
  margin: 1rem auto;

  @media (max-width: 1000px) {
    margin-top: 2rem;
    font-size: 1.3rem;
  }

  @media (max-width: 800px) {
    text-align: center;
  }

  @media (max-width: 450px) {
    font-size: 1.1rem;
    line-height: 1.8rem;
  }
`

export const RightCollaboratorPhotoBox = styled.div`
  width: 40%;
  height: 40rem;
  margin-top: 10rem;
  background-image: linear-gradient(to right, #1a1a1a, #222222, #2a2a2a, #323232, #3a3a3a);
  border-radius:  15px 0 0 15px ;

  @media (max-width: 1000px) {
    height: 30rem;
  }

  @media (max-width: 800px) {
    display: none;
  }
`

export const MobileRightCollaboratorPhotoBox = styled.div`
  display: none;
  width: 100%;
  height: 30rem;
  margin-top: 10rem;
  background-image: linear-gradient(to right, #1a1a1a, #222222, #2a2a2a, #323232, #3a3a3a);
  border-radius: 0;
  align-items: center;

  @media (max-width: 800px) {
    display: flex;
  }

  @media (max-width: 450px) {
    margin-top: 5rem;
    height: 25rem;
  }
`

export const Contact = styled.section`
  margin-bottom: 4rem;
`

export const ContactBannerTitle = styled.h2`
  font-size: 5rem;
  text-align: center;
  margin: 8rem 0 0;
  padding: 0.8rem 0;
  background-image: linear-gradient(to right, #f06d59, #f36651, #f75f48, #f9583f, #fc5036, #fc5036, #fc5036, #fc5036, #f9583f, #f75f48, #f36651, #f06d59);
  color: var(--texts);

  @media (max-width: 1000px) {
    font-size: 4rem;
  }

  @media (max-width: 500px) {
    font-size: 3rem;
  }

  @media (max-width: 360px) {
    font-size: 2.5rem;
  }
`

export const ContactInformations = styled.div`
  width: 100%;
  display: flex;
  margin: 2rem auto;
  justify-content: space-around;

  @media (max-width: 650px) {
    display: block;
  }
`

export const ContactInformationsContent = styled.div`
  width: 40%;
  padding: 15rem 0 0 8rem;

  @media (max-width: 1200px) {
    padding: 15rem 0 0 4rem;
  }

  @media (max-width: 1000px) {
    padding: 10rem 0 0 4rem;
  }

  @media (max-width: 850px) {
    padding: 10rem 0 0 2rem;
  }

  @media (max-width: 650px) {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: 650px) {
    width: 90%;
    padding: 5rem 0 0 0;
  }
`

export const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--dark);

  @media (max-width: 1000px) {
    font-size: 2.2rem;
  }
`

export const ContactList = styled.ul`
  @media (max-width: 650px) {
    width: fit-content;
    margin: 0 auto;
  }
`

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
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

  color: var(--texts);
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

  @media (max-width: 1000px) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  @media (max-width: 650px) {
    margin: 2rem auto;
  }
`

export const WppIcon = styled(IoLogoWhatsapp)`
  font-size: 2rem;
`

export const ContactImg = styled.div`
  display: flex;
  width: 60%;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const MediumContactImg = styled.div`
  width: 50%;
  display: none;
  margin: 4rem 0 0;

  @media (max-width: 1000px) {
    display: flex;
  }

  @media (max-width: 650px) {
    display: none;
  }
`

export const SmallContactImg = styled.div`
  width: 100%;
  display: none;

  @media (max-width: 650px) {
    display: flex;
  }

  
`