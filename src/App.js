// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Home from "./pages/Home";
// import BlogAi from "./pages/BlogAi";
// import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
const BlogAi = React.lazy(() => import("./pages/BlogAi"));
const Login = React.lazy(() => import("./pages/Login"));

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blogAi" element={
          <React.Suspense fallback={<p style={{ color: "white" }}>Loading.....</p>}>
            <BlogAi />
          </React.Suspense>
        } />
        <Route path="/explore" element={
          <React.Suspense fallback={<p style={{ color: "white" }}>Loading.....</p>}>
            <Login />
          </React.Suspense>
        } />
      </Routes>
    </div>
  );
}

export default App;
