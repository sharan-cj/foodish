import styled from "styled-components";
import searchIco from "../Assets/search.png";

export const Layout = styled.div`
  top: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: auto;
`;

export const Container = styled.div<{ width?: string }>`
  width: ${(props) => props.width};
  max-width: 90%;
  padding: 1rem;
  margin: 1rem auto;
  background: rgb(164 164 164 / 25%);
  border: 1px solid #fdfdfd73;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  box-shadow: 2px 4px 9px 1px rgb(0 0 0 / 17%);
`;

export const SearchInput = styled.input`
  margin: 1rem auto;
  width: 600px;
  max-width: 80%;
  padding: 0.1rem 1rem;
  border-radius: 20px;
  background: url(${searchIco});
  background-repeat: no-repeat;
  background-size: 28px;
  background-position: 97% center;
  border: 1px solid #fdfdfd73;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  box-shadow: 2px 4px 9px 1px rgb(0 0 0 / 17%);
  outline: none;
  color: var(--text-color);
  &:focus {
    border-color: black;
  }

  &::-webkit-input-placeholder {
    color: #000;
  }
`;

export const Input = styled.input`
  margin: 1rem;
  width: 600px;
  max-width: 80%;
  padding: 0.1rem 1rem;
  border-radius: 20px;
  background: rgb(164 164 164 / 25%);
  border: 1px solid #fdfdfd73;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  box-shadow: 2px 4px 9px 1px rgb(0 0 0 / 17%);
  outline: none;
  color: var(--text-color);
  &:focus {
    border-color: black;
  }

  &::-webkit-input-placeholder {
    color: #000;
  }
`;

export const Hr = styled.hr`
  width: calc(100% - 2rem);
  margin: 0 1rem;
  border-color: rgb(253 253 253 / 51%);
`;
