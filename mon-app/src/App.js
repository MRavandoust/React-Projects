import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Intro from "./components/00-jsx/intro";
import Counter from "./components/01-state-hooks/counter";
import LifeCycle from "./components/01-state-hooks/useEffect";
import Formulaire from "./components/02-form/formulaire";
import Enfant from "./components/03-props/enfant";
import LifeCycleClass from "./components/04-class-props-state-cycle/lifeCycleClass";
import Cycle from "./components/04-class-props-state-cycle/cycle";
import Counteur2 from "./components/05-counter/counteur2";
//import TodoForm from "./components/05-counter/TodoForm";
//import TodoList from "./components/05-counter/TodoList";
import Todo from "./components/06-todoList/TodoList";
import Header from "./components/07-nav-link-router/header";
import Article from "./components/07-nav-link-router/Article";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/intro" element={<Intro />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/lifeCycle" element={<LifeCycle />} />
        <Route path="/enfant" element={<Formulaire />} />
        <Route path="/counter2" element={<Counteur2 />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/article/:id" element={<Article />} />
      </Route>
    </Routes>
  );
}

export default App;
