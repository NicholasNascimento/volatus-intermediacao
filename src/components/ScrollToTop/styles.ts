import styled from 'styled-components'
import { FaArrowAltCircleUp } from 'react-icons/fa'

export const Container = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: initial;
  }
`

export const MobileButton = styled(FaArrowAltCircleUp)`
  position: fixed;
  font-size: 3.5rem;
  color: var(--primary);
  bottom: 2rem;
  right: 3rem;

  z-index: 1;

  cursor: pointer;
`
