import React from "react";
import styled from "styled-components";

export const BackgroundAbstract = () => {
  return (
    <Background>
      <CircleM />
      <CircleS />
      <CircleL />
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  z-index: -100;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Circle = styled.div`
  border-radius: 50%;
  border: 1px solid #fff;
  background-image: linear-gradient(
    65deg,
    rgb(253 253 253),
    rgb(253 253 253 / 14%)
  );
  box-shadow: 3px 4px 14px 1px #72b8cc;
  margin: 2rem auto;
`;
const CircleM = styled(Circle)`
  height: 300px;
  width: 300px;
`;

const CircleS = styled(Circle)`
  height: 200px;
  width: 300px;
`;

const CircleL = styled(Circle)`
  height: 700px;
  width: 700px;
`;
