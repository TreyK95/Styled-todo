import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import { motion } from "framer-motion";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duraction: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        ToDo List
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
