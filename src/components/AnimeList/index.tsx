import React, { useEffect, useState } from 'react'
import { IAnimes } from '../../@types/IAnimes'
import { useValue } from '../../Hooks/useValue'
import { api } from '../../services/api'
import { AnimeCard } from '../AnimeCard'
import { AnimeListContainer } from './style'

export const AnimeList = (): JSX.Element => {
  const [animes, setAnimes] = useState<IAnimes[]>()
  const { value } = useValue()

  useEffect(() => {
    api.get(value).then(response => setAnimes(response.data.results))
  }, [value])

  return (
    <>
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
  )
}
