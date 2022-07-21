import React, { useEffect, useState } from 'react'
import * as S from '../styles/styles'

export default function Home() {
  const [menu, setMenu] = useState<boolean>(false)

  useEffect(() => {
    console.log(menu)
  }, [menu])

  return (
    <>
    {menu &&
      <S.MenuArea>
        <S.CloseMenu onClick={() => setMenu(!menu)}/>
        <S.NavList>
          <S.NavItemList><a href='#what' onClick={() => setMenu(!menu)}>What is P2P?</a></S.NavItemList>
          <S.NavItemList><a href='#about' onClick={() => setMenu(!menu)}>About us</a></S.NavItemList>
          <S.NavItemList><a href='#advantages' onClick={() => setMenu(!menu)}>Advantages</a></S.NavItemList>
          <S.NavItemList><a href='#collaborators' onClick={() => setMenu(!menu)}>Collaborators</a></S.NavItemList>
          <S.NavItemList><a href='#contact' onClick={() => setMenu(!menu)}>Contact</a></S.NavItemList>
        </S.NavList>
      </S.MenuArea>
    }

    {!menu &&
      <>
        <S.Header>
          <S.HeaderContent>
            <S.LogoBox>
              <S.Logo src="/logo.png" alt="Volatus Logo" />
            </S.LogoBox>

            <S.NavContent>
              <S.NavBar>
                <S.Anchor href='#what'>What is P2P?</S.Anchor>
                <S.Anchor href='#about'>About us</S.Anchor>
                <S.Anchor href='#advantages'>Advantages</S.Anchor>
                <S.Anchor href='#collaborators'>Collaborators</S.Anchor>
                <S.Anchor href='#contact'>Contact</S.Anchor>
              </S.NavBar>
              <S.Menu onClick={() => setMenu(!menu)}/>
            </S.NavContent>
          </S.HeaderContent>
        </S.Header>

        <S.Main>
          <S.Banner>
            <S.Texts>
              <S.Title>Lorem Ipson</S.Title>
              <S.Subtitle>Lorem Ipsum is simply dummy text!</S.Subtitle>
            </S.Texts>
          </S.Banner>
        </S.Main>

        <S.Whatis id='what'>
          <S.Informations>
            <S.TextBox>
              <S.InformationsTitle>WHAT IS P2P?</S.InformationsTitle>
              <S.Box>
                <S.TopTextsParagraph>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                  of Lorem Ipsum.
                </S.TopTextsParagraph>
              </S.Box>
            </S.TextBox>
            <S.InformationsImg />
          </S.Informations>
          <S.BottomTextsParagraph>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
            content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum 
            as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
            have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </S.BottomTextsParagraph>
        </S.Whatis>

        <S.About id='about'>
          <S.AdvantagesBox>
            <S.InformationsImg />
            <S.AboutTextBox>
              <S.AboutSectionTitle>ABOUT US</S.AboutSectionTitle>
              <S.AboutBox>
                <S.TopTextsParagraph>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                  of Lorem Ipsum.
                </S.TopTextsParagraph>
              </S.AboutBox>
            </S.AboutTextBox>
          </S.AdvantagesBox>
        </S.About>

        <S.Advantages id='advantages'>
          <S.AdvantagesTitle>Advantages</S.AdvantagesTitle>

          <S.CardsBox>

            <S.CardBox>
              <S.Check />

              <h3>Lorem Ipson</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
            </S.CardBox>

            <S.CardBox>
              <S.Check />

              <h3>Lorem Ipson</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
            </S.CardBox>

            <S.CardBox>
              <S.Check />

              <h3>Lorem Ipson</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
            </S.CardBox>
          </S.CardsBox>

          <S.CardsBox>
            <S.CardBox>
              <S.Check />

              <h3>Lorem Ipson</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
            </S.CardBox>

            <S.CardBox>
              <S.Check />

              <h3>Lorem Ipson</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
            </S.CardBox>

            <S.CardBox>
              <S.Check />

              <h3>Lorem Ipson</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
            </S.CardBox>
            
          </S.CardsBox>
        </S.Advantages>

        <S.Collaborators id='collaborators'>
          <S.CollaboratorsTitle>
            VOLATUS TEAM
          </S.CollaboratorsTitle>
          <S.CollaboratorArea>
            <S.LeftCollaboratorPhotoBox />
            <S.CollaboratorTextBox>
              <S.CollaboratorName>John Doe</S.CollaboratorName>
              <S.CollaboratorDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book.
              </S.CollaboratorDescription>
            </S.CollaboratorTextBox>
          </S.CollaboratorArea>

          <S.CollaboratorArea>
            <S.CollaboratorTextBox>
              <S.CollaboratorName>John Doe</S.CollaboratorName>
              <S.CollaboratorDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book.
              </S.CollaboratorDescription>
            </S.CollaboratorTextBox>
            <S.RightCollaboratorPhotoBox />
          </S.CollaboratorArea>
        </S.Collaborators>

        <S.Contact id='contact'>
          <S.CollaboratorsTitle>
            CONTACT US
          </S.CollaboratorsTitle>
          <S.ContactInformations>
            <S.ContactInformationsContent>
              <S.ContactTitle>Entre em contato com a gente!</S.ContactTitle>
  
              <S.ContactList>
                <S.ContactListItem>
                  <S.EmailIcon />   
                  contato@volatusintermedicao.com
                </S.ContactListItem>
              </S.ContactList>
        
              <S.WppButton>
                <S.WppIcon />  
                Fale conosco
              </S.WppButton>
            </S.ContactInformationsContent>
            <S.ContactImg />
          </S.ContactInformations>
        </S.Contact>

        <S.Footer>
          <S.FooterBox>
            <S.FooterName><span>V</span>OLATU<span>S</span></S.FooterName>
            <S.FooterSubtitle>©2022 Volatus.</S.FooterSubtitle>
          </S.FooterBox>

          <S.Links>
            <S.FooterTitle>Contact / Social Medias</S.FooterTitle>
            <S.TwiterLink />
            <S.FacebookLink />
            <S.TelegramLink />
            <S.DiscordLink />
            <S.InstagramLink />
          </S.Links>
        </S.Footer>
      </>
    }
  </>
  )
}
