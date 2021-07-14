/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react'
import { ValueContext } from '../contexts/ValueContext'

const useValue = (): any => {
  const value = useContext(ValueContext)
  return value
}

export default useValue
