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
        <S.TwiterLink />
        <S.FacebookLink />
        <S.TelegramLink />
        <S.DiscordLink />
        <S.InstagramLink />
      </S.Links>
    </S.Footer>
  )
}