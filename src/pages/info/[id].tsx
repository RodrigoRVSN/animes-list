import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { IAnimeInfo } from '../../@types/IAnimeInfo'
import { api } from '../../services/api'
import { InfoContainer, PageContainer } from './style'

export default function Info(): JSX.Element {
  const { query } = useRouter()
  const [animeInfo, setAnimeInfo] = useState<IAnimeInfo>()

  useEffect(() => {
    async function getAnimeInfo() {
      const anime = await api.get(`/anime/${query.id}`).then(res => res)
      setAnimeInfo(anime.data)
    }
    getAnimeInfo()
    console.log(animeInfo)
    console.log(animeInfo)
  }, [])

  return (
    <>
      <PageContainer>
        <InfoContainer>
          <h4>{animeInfo?.type}</h4>
          <h2>{animeInfo?.title}</h2>

          <img src={animeInfo?.image_url} />
          <h2>{animeInfo?.duration}</h2>
        </InfoContainer>
        <InfoContainer>
          <iframe
            width="560"
            height="315"
            src={`${animeInfo?.trailer_url}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <h3>{animeInfo?.score}</h3>
          <p>{animeInfo?.synopsis}</p>
        </InfoContainer>
      </PageContainer>
      {animeInfo?.related.Other.map(item => {
        return (
          <>
            <h1>{item.name}</h1>
            <h1>{item.type}</h1>
          </>
        )
      })}
      {animeInfo?.related['Parent story']?.map(item => {
        return (
          <>
            <h1>{item.name}</h1>
            <h1>{item.type}</h1>
          </>
        )
      })}
      {animeInfo?.related.Prequel?.map(item => {
        return (
          <>
            <h1>{item.name}</h1>
            <h1>{item.type}</h1>
          </>
        )
      })}
    </>
  )
}
