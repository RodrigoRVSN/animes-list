/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react'
import { ValueContext } from '../contexts/ValueContext'

const useValue = () => {
  const value = useContext(ValueContext)
  return value
}

export default useValue
