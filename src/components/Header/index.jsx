import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import {
  Container,
  Logo,
  Profile,
  LinkWithoutStyle,
  HeaderFullWidth,
} from "./styles";

import { Input } from "../../components/Input";

export function Header({ searchHandler }) {
  const navigation = useNavigate();

  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleSignOut() {
    navigation();
    signOut();
  }

  return (
    <HeaderFullWidth>
      <Container>
        <Logo to={"/"}>RocketMovies</Logo>

        <Input
          onChange={searchHandler}
          type="text"
          placeholder="Pesquisar pelo titulo"
        />

        <Profile>
          <div>
            <LinkWithoutStyle to={"/profile"}>
              <strong>{user.name}</strong>
            </LinkWithoutStyle>
            <button onClick={handleSignOut}>Sair</button>
          </div>
          <LinkWithoutStyle to={"/profile"}>
            <img src={avatarUrl} alt={user.name} />
          </LinkWithoutStyle>
        </Profile>
      </Container>
    </HeaderFullWidth>
  );
}
