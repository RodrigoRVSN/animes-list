/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react'
import { ValueContext } from '../Contexts/ValueContext'

const useValue = (): any => {
  const value = useContext(ValueContext)
  return value
}

export default useValue
