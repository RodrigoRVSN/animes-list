import React, { createContext, useEffect, useState } from 'react'
import { IAnimes } from '../@types/IAnimes'
import { api } from '../services/api'

interface Props {
  children: React.ReactNode
}

export const ValueContext = createContext({})

export function ValueContextProvider({ children }: Props): JSX.Element {
  const [value, setValue] = useState<string>('One Piece')
  const [animes, setAnimes] = useState<IAnimes[]>()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState<boolean>()

  useEffect(() => {
    async function getAnimes() {
      setLoading(true)
      await api
        .get(value)
        .then(response => {
          setLoading(false)
          setError('')
          setAnimes(response.data.results)
        })
        .catch(() => {
          setLoading(false)
          setError('Not found!')
        })
    }
    getAnimes()
  }, [value])

  return (
    <ValueContext.Provider value={{ value, setValue, animes, error, loading }}>
      {children}
    </ValueContext.Provider>
  )
}
