import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background, Anchor } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  const navigate = useNavigate();

  const { signIn } = useAuth();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit() {
    signIn(email, password);
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input
          onChange={(e) => setEmail(e.target.value)}
          icon={FiMail}
          type="text"
          placeholder="E-mail"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="button" onClick={handleSubmit}>
          Entrar
        </Button>

        <Anchor
          onClick={() => {
            navigate("/register");
          }}
        >
          Criar conta
        </Anchor>
      </Form>

      <Background />
    </Container>
  );
}
