import styled from 'styled-components'


export const BtnContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    color: var(--mainYellow);
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem;
    transition: all 0.1s ease-in-out;
  &:hover {
      backgound: var(--lightBlue);
      color: var(--lightBlue);
  }
  &:focus {
      outline: none;
  }
`