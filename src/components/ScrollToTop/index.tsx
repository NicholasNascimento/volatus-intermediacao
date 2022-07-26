import React, { useEffect, useState } from 'react'
import * as S from './styles'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // useEffect(() => {
  //   console.log(window.pageYOffset)
  // }, [screenY.valueOf])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <S.Container>
      {isVisible && (
        <div onClick={scrollToTop}>
          <S.MobileButton />
        </div>
      )}
    </S.Container>
  )
}
