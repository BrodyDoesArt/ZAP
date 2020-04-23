import styled from 'styled-components';

const BannerContainer = styled.div`
  height: 100%;
  background: linear-gradient${props => props.gradient};
`

const CodeContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`

export {
  BannerContainer,
  CodeContainer,
};