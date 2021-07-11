import React from 'react'
import { LoadingContainer } from './style'

export const LoadingWidget = (): JSX.Element => {
  return (
    <>
      <LoadingContainer>
        <h2>Loading...</h2>
        <img
          src="https://media.tenor.com/images/4fd49de4149a6d348e04f2465a3970af/tenor.gif"
          alt="Loading"
        />
      </LoadingContainer>
    </>
  )
}
