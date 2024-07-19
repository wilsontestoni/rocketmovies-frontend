import { useState } from "react";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";
import { Container, Form, ResetButton } from "./styles";

import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { ButtonLink } from "../../components/ButtonLink";

export function NewMovie() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const [description, setDescription] = useState("");

  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState([]);

  async function submitHandler() {
    const movie = {
      title,
      rating: Number(rating),
      description,
      tags,
    };

    try {
      await api.post("/movies", movie);
      alert("Criado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        return;
      }
      alert("Não foi possível no momento, tente novamente mais tarde");
    }
  }

  function resetHandler() {
    navigate("/");
    // setDescription("");
    // setTitle("");
    // setRating("");
    // setTags([]);
  }

  function handleDeleteTag(deletedTag) {
    const filteredTags = tags.filter((tag) => tag !== deletedTag);
    setTags(filteredTags);
  }

  function handleNewTag() {
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
          <h1>Novo Filme</h1>
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
            <ResetButton onClick={resetHandler} type="button">
              Excluir filme
            </ResetButton>
            <Button onClick={submitHandler} type="button">
              Criar
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}
