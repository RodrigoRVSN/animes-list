import styled from 'styled-components'

export const InputContainer = styled.input`
  padding: 0.8rem;
  border-radius: 1rem;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secundary};
  border: 1px solid ${props => props.theme.colors.secundary};
  &:hover {
    border: 1px solid ${props => props.theme.colors.primary};
  }
`

export const Form = styled.form`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4vw;
`

export const Button = styled.button`
  padding: 0.8rem;
  border-radius: 1rem;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secundary};
  border: 1px solid ${props => props.theme.colors.secundary};
  &:hover {
    color: ${props => props.theme.colors.secundary};
    background-color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.secundary};
  }
`
