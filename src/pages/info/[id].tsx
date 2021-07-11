import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import { api } from '../../services/api'

export default function Info(): JSX.Element {
  const { query } = useRouter()

  useEffect(() => {
    async function getAnimeInfo() {
      const anime = await api.get(`/anime/${query.id}`).then(res => res)
      console.log(anime.data)
    }
    getAnimeInfo()
  }, [])

  return (
    <div>
      <h1>{query.id}</h1>
    </div>
  )
}
