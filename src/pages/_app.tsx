import React from 'react'
import '../styles/global.ts'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import { ValueContextProvider } from '../contexts/ValueContext'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ValueContextProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </ValueContextProvider>
      </ThemeProvider>
    </>
  )
}
export default MyApp
