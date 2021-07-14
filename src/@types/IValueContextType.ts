import { Dispatch, SetStateAction } from 'react'
import { IAnimes } from './IAnimes'

export type IValueContextType = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  animes: IAnimes[] | undefined
  error: string
  loading: boolean | undefined
  loadingMoreAnimes: boolean | undefined
  setLimit: Dispatch<SetStateAction<number>>
}
