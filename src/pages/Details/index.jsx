import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { FiArrowLeft, FiClock } from "react-icons/fi";

import { Container, SubtitleContainer, TitleContainer, Tags } from "./styles";

import { Rate } from "../../components/Rate";
import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { ButtonLink } from "../../components/ButtonLink";

export function Details() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formatedData, setFormatedData] = useState("");
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovieData() {
      const response = await api.get(`/movies/${id}`);
      const movieData = response.data;
      const movieCreationDate = movieData.created_at;

      setMovie(movieData);

      handleData(movieCreationDate);
    }

    fetchMovieData();
  }, []);

  function handleData(creationDate) {
    const date = new Date(creationDate);

    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const formatedDate = `${day}/${month}/${year} às ${hours}:${minutes}`;

    setFormatedData(formatedDate);
  }

  function handleBack() {
    navigate(-1);
  }

  function handleEditPageChange() {
    navigate(`/edit/${movie.id}`);
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <ButtonLink onClick={handleBack} icon={FiArrowLeft}>
            Voltar
          </ButtonLink>

          <ButtonLink onClick={handleEditPageChange}>Editar Filme</ButtonLink>
        </div>

        <main>
          <TitleContainer>
            <h1>{movie.title}</h1>
            <Rate userRate={movie.rating} starSize={20} />
          </TitleContainer>

          <SubtitleContainer>
            <div>
              <img
                src="https://github.com/wilsontestoni.png"
                alt="Imagem do usuário"
              />
              <p>Por Wilson Testoni</p>
            </div>
            <div>
              <FiClock />
              <p>{formatedData}</p>
            </div>
          </SubtitleContainer>

          <Tags>
            {movie.tags &&
              movie.tags.map((tag, index) => (
                <Tag key={index} title={tag.name} />
              ))}
          </Tags>

          <p>{movie.description}</p>
        </main>
      </Container>
    </>
  );
}
