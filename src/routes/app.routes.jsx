import { Routes, Route, Navigate } from "react-router-dom";

import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";
import { NewMovie } from "../pages/NewMovie";
import { EditMovie } from "../pages/EditMovie";
import { Details } from "../pages/Details";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<NewMovie />} />
      <Route path="/edit/:id" element={<EditMovie />} />
      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
