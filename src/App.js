import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/UI/Home";
import About from "./components/UI/About";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import NoteCotext from "./context/NoteState";
import Notes from "./components/UI/Notes";
import ImpLinks from "./components/UI/ImpLinks";
import Sprint from "./components/UI/Sprint";
import Schedule from "./components/UI/Schedule";
import Todo from "./components/UI/Todo";

function App() {
  return (
    <>
      <NoteCotext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/implink" element={<ImpLinks />} />
            <Route path="/sprint" element={<Sprint />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </NoteCotext>
      
    </>
  );
}

export default App;
