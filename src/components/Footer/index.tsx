import React from 'react'
import * as S from './styles'

export default function Footer() {
  return (
    <S.Footer>
      <S.FooterBox>
        <S.AlternativeLogo src="/alternativelogo.svg" alt="Volatus Logo" />
        <S.NamelessLogo src="/namelesslogo.svg" alt="Volatus Nameless Logo" />
        <S.FooterSubtitle>©2022 Volatus.</S.FooterSubtitle>
      </S.FooterBox>

      <S.Links>
        <S.FooterTitle>Contact / Social Medias</S.FooterTitle>
        <a target='_blank' href='https://discord.com/invite/s3sSK6sh6C'>
          <S.DiscordLink />
        </a>
        <a target='_blank' href='https://www.instagram.com/volatusp2p/'>
          <S.InstagramLink />
        </a>
        <a target='_blank' href='https://www.facebook.com/p2pvolatus'>
          <S.FacebookLink />
        </a>
      </S.Links>
    </S.Footer>
  )
}