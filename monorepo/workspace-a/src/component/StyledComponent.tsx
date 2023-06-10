import React from 'react'
import { styled } from 'styled-components';

export const StyledComponent = () => {
  return (
  <Wrapper>
    <Title>
      Hello StyledComponent!
    </Title>
  </Wrapper>
  )
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

