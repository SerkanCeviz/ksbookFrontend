import { useState } from "react";
import "./App.css";
import Navbar from "./layouts/NavBar";
import Category from "./pages/Category";
import { Route, Routes, Link } from "react-router-dom";
import Book from "./pages/Books";
import HomePage from "./pages/HomePage";

function App() {
  const [id, setId] = useState();
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="" element={<HomePage />}></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route
            path="/categories"
            element={<Category setId={setId} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
