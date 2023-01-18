// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/Home";
import BlogAi from "./pages/BlogAi";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blogAi" element={<BlogAi />} />
        <Route path="/explore" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
