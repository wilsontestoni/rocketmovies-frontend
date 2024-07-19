import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { useNavigate, useParams } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";
import { Container, Form, ResetButton } from "./styles";

import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { ButtonLink } from "../../components/ButtonLink";

export function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const response = await api.get(`/movies/${id}`);
        const movieData = response.data;
        const movieTags = movieData.tags;

        const tagsName = movieTags.map((movie) => movie.name);

        setTitle(movieData.title);
        setRating(movieData.rating);
        setDescription(movieData.description);
        setTags(tagsName);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
          return;
        }
        alert(
          "Não foi possível carregar os dados do filme, tente novamete mais tarde"
        );
      }
    }

    fetchMovieData();
  }, []);

  async function editMovieHandler() {
    const movie = {
      title,
      rating: Number(rating),
      description,
      tags,
    };

    console.log("movie tags:", movie.tags);
    console.log("tags", tags);

    try {
      await api.put(`/movies/${id}`, movie);
      alert("Filme alterado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        return;
      }
      alert("Não foi possível no momento, tente novamente mais tarde");
    }
  }

  async function movieDeletionHandler() {
    try {
      await api.delete(`/movies/${id}`);
      alert("Filme excluido com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        return;
      }
      alert("Não foi possível no momento, tente novamente mais tarde");
    }
  }

  function handleDeleteTag(deletedTag) {
    const filteredTags = tags.filter((tag) => tag !== deletedTag);
    setTags(filteredTags);
  }

  function handleNewTag() {
    console.log("Nova tag");
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <>
      <Header />
      <Container>
        <ButtonLink onClick={handleBack} icon={FiArrowLeft}>
          Voltar
        </ButtonLink>

        <Form>
          <h1>Editar Filme</h1>
          <div>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título"
              value={title}
            />
            <Input
              onChange={(e) => setRating(e.target.value)}
              placeholder="Sua nota (de 0 a 5)"
              value={rating}
            />
          </div>

          <Textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Observações"
          />

          <h2>Marcadores</h2>
          <div>
            {tags &&
              tags.map((tag, index) => (
                <NoteItem
                  onClick={() => {
                    handleDeleteTag(tag);
                  }}
                  key={index}
                  value={tag}
                />
              ))}

            <NoteItem
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleNewTag}
              value={newTag}
              isNew
              placeholder="Novo marcador"
            />
          </div>

          <div>
            <ResetButton onClick={movieDeletionHandler} type="button">
              Excluir filme
            </ResetButton>
            <Button onClick={editMovieHandler} type="button">
              Salvar alterações
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}
