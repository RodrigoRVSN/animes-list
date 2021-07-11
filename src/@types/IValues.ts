import { Dispatch, SetStateAction } from 'react'
import { IAnimes } from './IAnimes'

export type IValue = {
  animes: IAnimes
  value: string
  setValue: Dispatch<SetStateAction<string>>
  loading: boolean
  error: string
}
