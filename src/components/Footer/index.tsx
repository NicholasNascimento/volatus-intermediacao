import React from 'react'
import * as S from './styles'

export default function Footer() {
  return (
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
  )
}