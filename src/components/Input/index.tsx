import React from 'react'
import { useValue } from '../../Hooks/useValue'
import { InputContainer } from './style'

export const Input = (): JSX.Element => {
  const { value, setValue } = useValue()

  return (
    <>
      <InputContainer
        placeholder="Digite o nome aqui"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </>
  )
}
