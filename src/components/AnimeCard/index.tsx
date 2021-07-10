import React from 'react'
import { IAnimes } from '../../@types/IAnimes'
import { AnimeCardContainer } from './style'

export const AnimeCard = ({ ...props }: IAnimes): JSX.Element => {
  return (
    <>
      <AnimeCardContainer>
        <h3>{props.type}</h3>
        <h2>{props.title}</h2>
        <img src={props.image_url} alt={props.title} />
        <h4>{new Date(props.start_date).toLocaleDateString()}</h4>
      </AnimeCardContainer>
    </>
  )
}
