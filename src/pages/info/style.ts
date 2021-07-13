import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  gap: 1rem;
  img {
    border-radius: 1rem;
  }
  p {
    max-width: 35rem;
    padding: 1rem;
    line-height: 1.5rem;
  }
`

export const PageContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`
