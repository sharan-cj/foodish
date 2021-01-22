import { useEffect, useState, useContext } from "react";
import { Container } from "../Components";
import axios from "axios";
import { ApiKey } from "../Config";
import styled from "styled-components";
import { RiRefreshLine } from "react-icons/ri";
import { apiKeyContext } from "../Utils";

export const Jokes = () => {
  const [data, setData] = useState<string>("");
  const [apiKey] = useContext(apiKeyContext);

  const key = apiKey ? apiKey : ApiKey;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios
      .get(`https://api.spoonacular.com/food/jokes/random?apiKey=${ApiKey}`)
      .then((res) => {
        setData(res.data.text);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Refresh onClick={() => getData()}>
        <RiRefreshLine />
      </Refresh>
      <Container>
        <div
          style={{
            fontFamily: "'Indie Flower', cursive",
            textAlign: "center",
            letterSpacing: "1px",
          }}
        >
          {data}
        </div>
      </Container>
    </>
  );
};

const Refresh = styled.button`
  margin: 1rem auto;
  outline: none;
  border: 1px solid var(--text-color);
  background: linear-gradient(
    45deg,
    rgb(202 202 202 / 50%),
    rgb(210 210 210 / 50%)
  );
  color: var(--text-color);
  box-shadow: 1px 3px 8px 2px #999d9e;
  padding-top: 10px;
  width: 50px;
  border-radius: 50%;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
`;
