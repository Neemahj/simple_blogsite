import Header from "./Components/Header";
import CreatePost from "./Components/NewBlog";
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
          <Route path="/new-blog" element={<CreatePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
