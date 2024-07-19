import { useState } from "react";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Container, Form, Background, Anchor } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");

  async function handleSubmit() {
    try {
      await api.post("users", { name, email, password });
      alert("Cadastro efetuado com sucesso");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        return;
      }
      alert("Não foi possível efetuar o cadastro, tente novamante mais tarde");
    }
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input
          onChange={(e) => setName(e.target.value)}
          icon={FiUser}
          type="text"
          placeholder="Nome"
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          icon={FiMail}
          type="text"
          placeholder="E-mail"
        />
        <Input
          onChange={(e) => setPassoword(e.target.value)}
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="button" onClick={handleSubmit}>
          Cadastrar
        </Button>

        <Anchor
          onClick={() => {
            navigate("/");
          }}
          icon={FiArrowLeft}
        >
          Voltar para o login
        </Anchor>
      </Form>

      <Background />
    </Container>
  );
}
