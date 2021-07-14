import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { IAnimes } from '../@types/IAnimes'
import { api } from '../services/api'

interface Props {
  children: ReactNode
}

export const ValueContext = createContext({})

export function ValueContextProvider({ children }: Props): JSX.Element {
  const [value, setValue] = useState<string>('One Piece')
  const [animes, setAnimes] = useState<IAnimes[]>()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState<boolean>()
  const [loadingMoreAnimes, setLoadingMoreAnimes] = useState<boolean>()
  const [limit, setLimit] = useState<number>(12)

  useEffect(() => {
    async function getAnimes() {
      if (limit !== 12) {
        setLoadingMoreAnimes(true)
        setLoading(false)
      } else {
        setLoading(true)
        setLoadingMoreAnimes(false)
      }

      await api
        .get(`/search/anime?q=${value}&limit=${limit}`)
        .then(response => {
          setLoading(false)
          setLoadingMoreAnimes(false)
          setError('')
          setAnimes(response.data.results)
        })
        .catch(() => {
          setLoading(false)
          setError('Not found!')
        })
    }
    getAnimes()
  }, [value, limit])

  return (
    <ValueContext.Provider
      value={{
        value,
        setValue,
        animes,
        error,
        loading,
        loadingMoreAnimes,
        setLimit
      }}
    >
      {children}
    </ValueContext.Provider>
  )
}
