import { HashRouter } from "react-router-dom";
import AppRoutes from "./routes";
import "./index.css";

export default function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}