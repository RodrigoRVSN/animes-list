import React from 'react'
import { AnimeCardContainer } from './style'
import Link from 'next/link'
import { IRelated } from '../../@types/IRelated'

export const RelatedCard = ({ ...props }: IRelated): JSX.Element => {
  return (
    <>
      <Link href={`info/${props.url}`}>
        <AnimeCardContainer>
          <h3>{props.type}</h3>
          <h2>{props.name}</h2>
        </AnimeCardContainer>
      </Link>
    </>
  )
}
