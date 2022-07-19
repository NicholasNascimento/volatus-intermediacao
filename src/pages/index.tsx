import React from 'react'
import * as S from '../styles/global'

export default function Home() {
  return (
    <>
    <S.Header>
      <S.HeaderContent>
        <S.Logo />
        <S.NavBar>
          <S.Anchor href='#about'>P2P</S.Anchor>
          <S.Anchor>Advantages</S.Anchor>
          <S.Anchor>Tax</S.Anchor>
          <S.Anchor>Team</S.Anchor>
          <S.Anchor>Contact</S.Anchor>
        </S.NavBar>
      </S.HeaderContent>
    </S.Header>

    <S.Main>
      <S.Banner />
    </S.Main>

    <S.About id='about'>
      <S.Informations>
        <S.Box></S.Box>
      </S.Informations>
    </S.About>
  </>
  )
}
