import styled from 'styled-components'

export const AnimeCardContainer = styled.a`
  cursor: pointer;
  padding: 2rem 1rem;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0.1rem 0.1rem 0.4rem ${props => props.theme.colors.secundary};
  transition: 0.2s ease-in;
  color: ${props => props.theme.colors.secundary};
  &:hover {
    transform: scale(1.05);
    box-shadow: 0.4rem 0.4rem 0.4rem ${props => props.theme.colors.secundary};
  }
`
