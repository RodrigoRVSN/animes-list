import styled from 'styled-components'

export const InputContainer = styled.input`
  display: flex;
  margin: 3rem auto 0 auto;
  padding: 0.8rem;
  border-radius: 1rem;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secundary};
  border: 1px solid ${props => props.theme.colors.secundary};
  &:hover {
    border: 1px solid ${props => props.theme.colors.primary};
  }
`
