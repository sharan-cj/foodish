import React, { useContext, useState } from "react";
import { Container, Input } from "../Components";
import { apiKeyContext } from "../Utils";
import styled from "styled-components";
import { SiLinkedin, SiGithub } from "react-icons/si";

export const Dev = () => {
  const [apiKey, setApiKey] = useContext(apiKeyContext);
  const [inputText, setInputText] = useState("");
  console.log(apiKey);
  return (
    <>
      <InputSection>
        <Input
          placeholder="Enter your own api key..."
          onChange={(e) => setInputText(e.target.value)}
        />
        <Add onClick={() => setApiKey(inputText)}>Add</Add>
      </InputSection>
      {apiKey && (
        <Container>
          Your api key :
          <span style={{ color: "var(--text-color" }}> {apiKey}</span>
        </Container>
      )}
      <Container width="300px">
        <Link target="_blank" href="https://www.linkedin.com/in/sharan-cj/">
          <SiLinkedin /> /sharan-cj
        </Link>
        <Link target="_blank" href="https://github.com/sharan-cj">
          <SiGithub /> /sharan-cj
        </Link>
      </Container>
    </>
  );
};

const InputSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Add = styled.button`
  padding: 0.2rem 2rem;
  border-radius: 20px;
  background: rgb(71 118 216 / 0.7);
  border: 1px solid #fdfdfd73;
  backdrop-filter: blur(12px);
  color: #fff;
  box-shadow: 2px 4px 9px 1px rgb(0 0 0 / 17%);
`;

const Link = styled.a`
  min-width: 200px;
  color: black;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: end;
`;
