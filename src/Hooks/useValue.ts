import { useContext } from 'react'
import { IValueContextType } from '../@types/IValueContextType'
import { ValueContext } from '../Contexts/ValueContext'

const useValue = (): IValueContextType => {
  const value = useContext(ValueContext)
  return value
}

export default useValue
