import { Routes, Route } from "react-router-dom";
import HomeView from "./screens/HomeView";
import DocsView from "./screens/DocsView";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DocsView />} />
      <Route path="/dashboard" element={<HomeView />} />
      <Route path="/docs" element={<DocsView />} />
      <Route path="*" element={<DocsView />} />
    </Routes>
  );
}