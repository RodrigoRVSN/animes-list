import React from 'react'
import { IAnimes } from '../../@types/IAnimes'
import useValue from '../../Hooks/useValue'
import { AnimeCard } from '../AnimeCard'
import { Loading } from '../Loading'
import { AnimeListContainer, ErrorMessage } from './style'

export const AnimeList = (): JSX.Element => {
  const { animes, loading, error } = useValue()

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ErrorMessage>{error}</ErrorMessage>
          <AnimeListContainer>
            {animes?.map((item: IAnimes, index: number) => {
              return (
                <AnimeCard
                  key={index}
                  image_url={item.image_url}
                  title={item.title}
                  score={item.score}
                  synopsis={item.synopsis}
                  type={item.type}
                  url={item.url}
                  start_date={item.start_date}
                  end_date={item.end_date}
                />
              )
            })}
          </AnimeListContainer>
        </>
      )}
    </>
  )
}
