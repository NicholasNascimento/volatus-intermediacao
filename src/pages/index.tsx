import React, { useEffect, useState } from 'react'
import * as S from '../styles/global'

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
          <S.NavItemList><a href='#about' onClick={() => setMenu(!menu)}>P2P</a></S.NavItemList>
          <S.NavItemList><a href='#advantages' onClick={() => setMenu(!menu)}>Advantages</a></S.NavItemList>
          <S.NavItemList><a onClick={() => setMenu(!menu)}>Tax</a></S.NavItemList>
          <S.NavItemList><a onClick={() => setMenu(!menu)}>Team</a></S.NavItemList>
          <S.NavItemList><a onClick={() => setMenu(!menu)}>Contact</a></S.NavItemList>
        </S.NavList>
      </S.MenuArea>
    }

    {!menu &&
      <>
        <S.Header>
          <S.HeaderContent>
            <S.Logo />
            <S.NavBar>
              <S.Anchor href='#about'>P2P</S.Anchor>
              <S.Anchor href='#advantages'>Advantages</S.Anchor>
              <S.Anchor>Tax</S.Anchor>
              <S.Anchor>Team</S.Anchor>
              <S.Anchor>Contact</S.Anchor>
            </S.NavBar>
            <S.Menu onClick={() => setMenu(!menu)}/>
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

        <S.About id='about'>
          <S.Informations>
            <S.TextBox>
              <S.InformationsTitle>
                Lorem Ipsom
              </S.InformationsTitle>
              <S.Box>
                <S.TextsParagraph>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                  of Lorem Ipsum.
                </S.TextsParagraph>
              </S.Box>
            </S.TextBox>
          </S.Informations>
        </S.About>

        <S.Advantages id='advantages'>
          <S.AdvantagesBox>

          </S.AdvantagesBox>
        </S.Advantages>
      </>
    }
  </>
  )
}
