import styled from 'styled-components'

export const AnimeListContainer = styled.div`
  margin: 5rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  gap: 2.5rem;
`

export const ErrorMessage = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: 1.5rem;
`
