import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Input } from "../../components/Input";
import { ButtonLink } from "../../components/ButtonLink";
import { Button } from "../../components/Button";

export function Profile() {
  const navigate = useNavigate();

  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState();

  function handleSubmit() {
    if (!name) {
      alert("O campo nome não pode estar vazio");
      return;
    }

    if (!email) {
      alert("O campo email não pode estar vazio");
      return;
    }

    const userDataUpdated = {
      name,
      email,
      old_password: oldPassword,
      password: newPassword,
    };

    const userUpdated = Object.assign(user, userDataUpdated);

    updateProfile(userUpdated, avatarFile);
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imgPreview = URL.createObjectURL(file);
    setAvatar(imgPreview);
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <header>
        <ButtonLink onClick={handleBack} icon={FiArrowLeft}>
          Voltar
        </ButtonLink>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={user.name} />

          <label htmlFor="file">
            <FiCamera />
          </label>
          <input onChange={handleChangeAvatar} type="file" id="file" />
        </Avatar>

        <Input
          onChange={(e) => setName(e.target.value)}
          icon={FiUser}
          type="text"
          value={name}
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          icon={FiMail}
          type="text"
          value={email}
        />
        <Input
          onChange={(e) => setOldPassword(e.target.value)}
          icon={FiLock}
          type="password"
          placeholder="Senha Atual"
        />
        <Input
          onChange={(e) => setNewPassword(e.target.value)}
          icon={FiLock}
          type="password"
          placeholder="Nova Senha"
        />

        <Button type="button" onClick={handleSubmit}>
          Salvar
        </Button>
      </Form>
    </Container>
  );
}
