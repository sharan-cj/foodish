import React, { useState, useEffect, useRef, useContext } from "react";
import { SearchInput, Hr, Container } from "../Components";
import { Api } from "../Config";
import axios from "axios";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { ApiKey } from "../Config";
import { apiKeyContext } from "../Utils";

interface ResponseData {
  name: string;
  type: string;
  totalResults: string;
  results: Array<ResponseContent>;
}

interface ResponseContent {
  content?: string;
  id: number;
  image?: string;
  link: string;
  name: string;
}

export const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [responseData, setResponseData] = useState<ResponseData[]>();
  const [recipes, setRecipes] = useState<ResponseContent[]>();
  const [articles, setArticles] = useState<ResponseContent[]>();
  const [videos, setVideos] = useState<ResponseContent[]>();
  const [view, setView] = useState<string>("recipes");
  const searchInputRef = useRef<any>(null);
  const [apiKey] = useContext(apiKeyContext);

  const key = apiKey ? apiKey : ApiKey;

  const HandleSearch = (e: any) => {
    if (e.keyCode === 13) {
      if (searchInputRef !== null) {
        searchInputRef.current.blur();
      }
      (async () => {
        await axios
          .get(
            `${Api}/food/search?apiKey=${key}&query=${searchText}&offset=0&number=50`
          )
          .then((res) => {
            setResponseData(res.data.searchResults);
          })
          .catch((err) => {
            console.log(err);
          });
      })();
    }
  };

  useEffect(() => {
    if (responseData) {
      setRecipes(responseData[0].results);
      setArticles(responseData[3].results);
      setVideos(responseData[4].results);
    }
  }, [responseData]);

  return (
    <>
      <SearchInput
        name="searchBar"
        id="searchBar"
        ref={searchInputRef}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={HandleSearch}
        placeholder="Search for dishes..."
      />

      <ViewBar>
        <View active={view === "recipes"} onClick={() => setView("recipes")}>
          Recipes
        </View>
        <View active={view === "articles"} onClick={() => setView("articles")}>
          Articles
        </View>
        <View active={view === "videos"} onClick={() => setView("videos")}>
          Videos
        </View>
      </ViewBar>
      <Hr />
      {view === "recipes" && (
        <Bay>
          {recipes &&
            recipes.length >= 1 &&
            recipes.map((recipes) => {
              return (
                <Container
                  style={{ padding: ".5rem" }}
                  width="600px"
                  key={recipes.link}
                >
                  <Recipe href={recipes.link} target="_blank">
                    <RecipeName>{recipes.name}</RecipeName>
                    <div style={{ display: "flex", flexFlow: "row wrap" }}>
                      <Image src={recipes.image} />
                      {recipes.content && (
                        <RecipeContent>
                          {recipes.content.replace(
                            /<([^>]+?)([^>]*?)>(.*?)<\/\1>/gi,
                            ""
                          )}
                        </RecipeContent>
                      )}
                    </div>
                  </Recipe>
                </Container>
              );
            })}
        </Bay>
      )}

      {view === "articles" && (
        <Bay>
          {articles &&
            articles.length >= 1 &&
            articles.map((article) => {
              return (
                <Container
                  style={{ padding: ".3rem" }}
                  width="300px"
                  key={article.link}
                >
                  <Article href={article.link} target="_blank">
                    <Image src={article.image} />
                    <ArticleName>{article.name}</ArticleName>
                  </Article>
                </Container>
              );
            })}
        </Bay>
      )}
      {view === "videos" && (
        <Bay>
          {videos &&
            videos.length >= 1 &&
            videos.map((video) => {
              if (!video.link) {
                return;
              }
              return (
                <Container
                  style={{ padding: ".3rem" }}
                  width="1000px"
                  key={video.link}
                >
                  <VideoName>{video.name}</VideoName>

                  <Video>
                    <ReactPlayer url={video.link} width={"100%"} />
                  </Video>
                </Container>
              );
            })}
        </Bay>
      )}
    </>
  );
};

const ViewBar = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
`;

const View = styled.button<{ active?: boolean }>`
  width: 100px;
  text-align: center;
  margin: 0 1rem;
  color: var(--text-color);
  font-size: 1.5rem;
  border-bottom: ${(props) =>
    props.active ? "3px solid rgb(64 136 231)" : "none"};
`;

const Bay = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Article = styled.a``;

const Image = styled.img`
  height: 200px;
  width: 300px;

  @media (max-width: 660px) {
    width: 100%;
  }
`;

const ArticleName = styled.div`
  text-align: center;
`;

const RecipeContent = styled.div`
  font-family: "Varela Round", sans-serif;
  font-size: 14px;
  max-width: 280px;
  margin-left: 10px;
  max-height: 200px;
  overflow: hidden;
  letter-spacing: 0.5px;
  text-align: justify;
  @media (max-width: 660px) {
    margin: 10px 0 0 0;
    max-width: 100%;
  }
`;

const Recipe = styled.a``;

const RecipeName = styled.div`
font-size = 1.6rem;
`;

const Video = styled.div`
  width: calc(100% - 1rem);
  height: auto;
  margin: 0.5rem auto;

  @media (max-width: 600px) {
    max-width: 350px;
  }
`;

const VideoName = styled.div`
font-size = 1.6rem;
margin-left: 1rem;
`;

const VideoContent = styled.div`
  font-family: "Varela Round", sans-serif;
  font-size: 14px;
  max-height: 100px;
  overflow: hidden;
  letter-spacing: 0.5px;

  @media (max-width: 600px) {
    max-width: 350px;
  }
`;
