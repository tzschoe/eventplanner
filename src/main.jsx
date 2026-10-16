import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./styles.css";
import RegistrationManager from "./components/RegistrationManager";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);


root.render(
    <App />
);
