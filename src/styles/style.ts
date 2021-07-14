import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  gap: 1rem;
  img {
    border-radius: 1rem;
  }
  p {
    max-width: 60rem;
    padding: 1rem;
    line-height: 2rem;
    font-size: 1.5rem;
  }
  h2 {
    text-align: center;
  }
`

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5vw;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`

export const ExtraContainer = styled.div`
  margin-top: 4rem;
  padding-top: 4rem;
  border-top: 1px solid ${props => props.theme.colors.secundary};
  border-radius: 5%;
  text-align: center;
  iframe {
    margin-bottom: 5rem;
    border-radius: 1rem;
    @media (max-width: 640px) {
      width: 90%;
    }
  }
  h2 {
    color: ${props => props.theme.colors.secundary};
    border-top: 1px solid red;
    padding-top: 4rem;
    border-top: 1px solid ${props => props.theme.colors.secundary};
    border-radius: 10%;
  }
`
