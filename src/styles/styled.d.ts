/* eslint @typescript-eslint/no-empty-interface: "off", curly: "error" */
import 'styled-components'

import lightMode from './themes/lightMode'

export type Theme = typeof lightMode

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    title: string
    colors: {
      primary: string
      secundary: string
      background: string
      text: string
    }
  }
}
