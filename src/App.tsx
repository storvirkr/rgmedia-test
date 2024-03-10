import React  from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import PostPage from "./components/PostPage";

import styles from "./App.module.css";

const App: React.FC = () => {
  
  return (
    <Router>
      <div className={styles.container}>
        <h1>Posts</h1>
        <Routes >
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:postId" element={<PostPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
