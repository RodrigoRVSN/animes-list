import React from 'react'
import { IAnimes } from '../../@types/IAnimes'
import useValue from '../../hooks/useValue'
import { AnimeCard } from '../AnimeCard'
import { ButtonMoreAnimes } from '../ButtonMoreAnimes'
import { ErrorWidget } from '../ErrorWidget'
import { LoadingMoreAnimesWidget } from '../LoadingMoreAnimesWidget'
import { LoadingWidget } from '../LoadingWidget'
import { AnimeListContainer } from './style'

export const AnimeList = (): JSX.Element => {
  const { animes, loading, loadingMoreAnimes, error } = useValue()

  return (
    <>
      {loading ? (
        <LoadingWidget />
      ) : (
        <>
          {error ? (
            <ErrorWidget />
          ) : (
            <>
              <AnimeListContainer>
                {animes?.map((item: IAnimes, index: number) => {
                  return (
                    <AnimeCard
                      key={index}
                      mal_id={item.mal_id}
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
              {loadingMoreAnimes && <LoadingMoreAnimesWidget />}
              <ButtonMoreAnimes />
            </>
          )}
        </>
      )}
    </>
  )
}
