import React from "react";
import styled from "styled-components";
import image from "../Assets/404.jpg";

export const Page404 = () => {
  return <Image src={image} alt="404" />;
};

const Image = styled.img`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
`;
