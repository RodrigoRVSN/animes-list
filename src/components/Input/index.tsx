import React from 'react'
import { useForm } from 'react-hook-form'
import { IInput } from '../../@types/IInput'
import useValue from '../../Hooks/useValue'
import { Button, Form, InputContainer } from './style'

export const Input = (): JSX.Element => {
  const { setValue, setLimit } = useValue()
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: IInput) => {
    setLimit(12)
    setValue(data.animeName)
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer
          placeholder="Type here the name"
          {...register('animeName')}
        />
        <Button type="submit">SEARCH</Button>
      </Form>
    </>
  )
}
