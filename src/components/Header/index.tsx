import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import * as S from './styles'

export default function Header() {
  const { menu, setMenu } = useContext(DataContext)

  return (
    <>
      {menu &&
        <S.MenuArea>
          <S.CloseMenu onClick={() => setMenu(!menu)}/>
          <S.NavList>
            <S.NavItemList><a href='#what' onClick={() => setMenu(!menu)}>O que é P2P</a></S.NavItemList>
            <S.NavItemList><a href='#about' onClick={() => setMenu(!menu)}>Nosso Trabalho</a></S.NavItemList>
            <S.NavItemList><a href='#advantages' onClick={() => setMenu(!menu)}>Vantagens</a></S.NavItemList>
            <S.NavItemList><a href='#collaborators' onClick={() => setMenu(!menu)}>Equipe</a></S.NavItemList>
            <S.NavItemList><a href='#contact' onClick={() => setMenu(!menu)}>Contato</a></S.NavItemList>
          </S.NavList>
        </S.MenuArea>
      }

      {!menu &&
        <S.Header>
        <S.HeaderContent>
          <S.LogoBox>
            <S.Logo src="/logo.png" alt="Volatus Logo" />
          </S.LogoBox>

          <S.NavContent>
            <S.NavBar>
              <S.Anchor href='#what'>O que é P2P</S.Anchor>
              <S.Anchor href='#about'>Nossao Trabalho</S.Anchor>
              <S.Anchor href='#advantages'>Vantagens</S.Anchor>
              <S.Anchor href='#collaborators'>Equipe</S.Anchor>
              <S.Anchor href='#contact'>Contato</S.Anchor>
            </S.NavBar>
            <S.Menu onClick={() => setMenu(!menu)}/>
          </S.NavContent>
        </S.HeaderContent>
      </S.Header>
      }
    </>
  )
}