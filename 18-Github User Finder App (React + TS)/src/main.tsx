import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import GithubProvider from "./context/GithubContext.tsx";

createRoot(document.getElementById("root")!).render(
  <GithubProvider>
    <App />
  </GithubProvider>
);
