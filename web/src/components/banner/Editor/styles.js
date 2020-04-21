import styled from 'styled-components';

const SectionContainer = styled.div`
  width: 40%;
  margin: 25vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Button = styled.div`
  transition: 0.3s ease all;
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0 auto;
  text-align: center;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  cursor: pointer;

  &:hover {
    background: white;
    color: palevioletred;
  }
`

export {
  SectionContainer,
  Button,
};