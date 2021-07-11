import { Dispatch, SetStateAction } from 'react'

export type IValue = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}
