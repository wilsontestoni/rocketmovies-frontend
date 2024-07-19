import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { FiPlus } from "react-icons/fi";
import { Container, Main, Movies, ButtonNewMovie } from "./styles";

import { MovieCard } from "../../components/MovieCard";
import { Header } from "../../components/Header";

export function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMoviesData() {
      const response = await api.get(`/movies?title=${search}`);
      const userMovies = response.data;
      setMovies(userMovies);
    }

    fetchMoviesData();
  }, [search]);

  function handleInputSearch(e) {
    setSearch(e.target.value);
  }

  function handleMovieDetails(movieId) {
    navigate(`/details/${movieId}`);
  }

  return (
    <>
      <Header searchHandler={handleInputSearch} />
      <Container>
        <Main>
          <div>
            <h1>Meus filmes</h1>
            <ButtonNewMovie to={"/new"}>
              <FiPlus size={28} />
              Adicionar Filme
            </ButtonNewMovie>
          </div>

          <Movies>
            {movies.length > 0 ? (
              movies.map((movie) => (
                <MovieCard
                  onClick={() => {
                    handleMovieDetails(movie.id);
                  }}
                  key={movie.id}
                  data={movie}
                />
              ))
            ) : (
              <h2>Ainda não há filmes cadastrados</h2>
            )}
          </Movies>
        </Main>
      </Container>
    </>
  );
}
