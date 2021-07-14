import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { IAnimeInfo } from '../../@types/IAnimeInfo'
import { GridArea } from '../../components/GridArea'
import { Header } from '../../components/Header'
import { RelatedCard } from '../../components/RelatedCard'
import { api } from '../../services/api'
import { ExtraContainer, InfoContainer, PageContainer } from './style'

export default function Info(): JSX.Element {
  const { query } = useRouter()
  const [animeInfo, setAnimeInfo] = useState<IAnimeInfo>()

  useEffect(() => {
    async function getAnimeInfo() {
      const anime = await api.get(`/anime/${query.id}`).then(res => res)
      setAnimeInfo(anime.data)
    }
    getAnimeInfo()
  }, [])

  return (
    <>
      <Header />
      <PageContainer>
        <InfoContainer>
          <h4>{animeInfo?.type}</h4>
          <h2>{animeInfo?.title}</h2>
          <img src={animeInfo?.image_url} />
          <h2>Duration: {animeInfo?.duration}</h2>
        </InfoContainer>
        <InfoContainer>
          <h3>SCORE: {animeInfo?.score}</h3>
          <p>{animeInfo?.synopsis}</p>
        </InfoContainer>
      </PageContainer>
      <ExtraContainer>
        {animeInfo?.trailer_url && (
          <iframe
            width="560"
            height="315"
            src={`${animeInfo?.trailer_url}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        {animeInfo?.related.Other && <h2>Others</h2>}
        <GridArea>
          {animeInfo?.related.Other?.map(item => {
            return (
              <RelatedCard
                key={item.name}
                type={item.type}
                name={item.name}
                url={item.url}
              />
            )
          })}
        </GridArea>
        {animeInfo?.related['Parent story'] && <h2>Parent story</h2>}
        <GridArea>
          {animeInfo?.related['Parent story']?.map(item => {
            return (
              <RelatedCard
                key={item.name}
                type={item.type}
                name={item.name}
                url={item.url}
              />
            )
          })}
        </GridArea>

        {animeInfo?.related.Prequel && <h2>Prequel</h2>}
        <GridArea>
          {animeInfo?.related.Prequel?.map(item => {
            return (
              <RelatedCard
                key={item.name}
                type={item.type}
                name={item.name}
                url={item.url}
              />
            )
          })}
        </GridArea>
      </ExtraContainer>
    </>
  )
}
