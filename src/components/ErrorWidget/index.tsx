import React from 'react'
import { ErrorContainer } from './style'

export const ErrorWidget = (): JSX.Element => {
  return (
    <>
      <ErrorContainer>
        <h2>Not found!</h2>
        <img
          src="http://pa1.narvii.com/6579/0084e7c31913c659b993894d8d858b35abd9b59c_00.gif"
          alt="Not found"
        />
      </ErrorContainer>
    </>
  )
}
