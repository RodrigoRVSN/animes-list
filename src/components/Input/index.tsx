import React from 'react'
import { useForm } from 'react-hook-form'
import { IInput } from '../../@types/IInput'
import useValue from '../../Hooks/useValue'
import { Button, Form, InputContainer } from './style'

export const Input = (): JSX.Element => {
  const { setValue } = useValue()
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: IInput) => setValue(data.animeName)

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer
          placeholder="Digite o nome aqui"
          {...register('animeName')}
        />
        <Button type="submit">SEARCH</Button>
      </Form>
    </>
  )
}
