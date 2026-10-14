import { createRoot } from "react-dom/client";
import EventDemo from "./components/EventDemo.jsx";
import InteractionDemo from "./components/InteractionDemo.jsx";
import StateProblem from "./components/StateProblem.jsx";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import NameInput from "./components/NameInput";
import LikeButton from "./components/LikeButton";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);


root.render(
    <LikeButton />
);
