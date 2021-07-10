import styled from 'styled-components'

export const HeaderContainer = styled.div`
  font-size: 1.3rem;
  height: 10vh;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.primary};
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`
