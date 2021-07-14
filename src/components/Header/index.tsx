import React from 'react'
import { HeaderContainer } from './style'

export const Header = (): JSX.Element => {
  return (
    <>
      <HeaderContainer>
        <h2>ANILIST</h2>
        <a href="/">HOME</a>
        <h3>
          Desenvolvido por{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/RodrigoRVSN"
          >
            Rodrigo Victor
          </a>
        </h3>
      </HeaderContainer>
    </>
  )
}
