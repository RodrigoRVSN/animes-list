import React from 'react'
import useValue from '../../Hooks/useValue'
import { Button } from '../Input/style'
import { ButtonContainer } from './style'

export const ButtonMoreAnimes = (): JSX.Element => {
  const { setLimit } = useValue()

  function incrementLimit() {
    setLimit((c: number) => c + 6)
  }

  return (
    <>
      <ButtonContainer>
        <Button onClick={incrementLimit}>LOAD MORE ANIMES</Button>
      </ButtonContainer>
    </>
  )
}
