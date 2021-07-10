import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    background-color: ${props => props.theme.colors.background} ;
    color: ${props => props.theme.colors.text};
    font-family: 400 1rem Roboto, sans-serif;
  }

  a{
    text-decoration: none;
    &:hover{
      opacity: 0.6;
    }
  }

  ::-webkit-scrollbar {
    background: ${props => props.theme.colors.primary};
    width: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.secundary};
    border-radius: 1rem;
  }
`
