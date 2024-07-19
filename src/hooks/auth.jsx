import { useState, useEffect, useContext, createContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn(email, password) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rocketseat:user", JSON.stringify(user));
      localStorage.setItem("@rocketseat:token", token);

      setData({
        user,
        token,
      });

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        return;
      }
      alert("Não foi possível efetuar o login, tente novamente mais tarde");
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketseat:user");
    localStorage.removeItem("@rocketseat:token");

    setData({});
  }

  async function updateProfile(user, avatarFile) {
    if (avatarFile) {
      try {
        const fileForm = new FormData();
        fileForm.append("avatar", avatarFile);

        const response = await api.patch("/users", fileForm);
        user.avatar = response.data.avatar;
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
          return;
        }
        alert(
          "Não foi possível atualizar o avatar, tente novamente mais tarde"
        );
      }
    }

    try {
      await api.put("/users", user);

      localStorage.setItem("@rocketseat:user", JSON.stringify(user));
      setData({ user, token: data.token });

      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        return;
      }
      alert("Não foi possível atualizar o perfil, tente novamente mais tarde");
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketseat:user");
    const token = localStorage.getItem("@rocketseat:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    setData({
      user: JSON.parse(user),
      token,
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
