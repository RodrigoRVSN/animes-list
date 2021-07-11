import { useState } from 'react'
import { IValue } from '../@types/IValues'

export function useValue(): IValue {
  const [value, setValue] = useState<string>('One Piece')

  return { value, setValue }
}
