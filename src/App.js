import Header from "./Components/Header";
import NewBlog from "./Components/NewBlog";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import BlogPage from "./Components/BlogPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<BlogPage />} />
          <Route path="/new-blog" element={<NewBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
