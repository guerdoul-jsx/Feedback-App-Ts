import "./App.css";
import AboutIconLink from "./components/AboutIconLink";
import FeedBackForm from "./components/FeedBackForm";
import FeedBackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import About from "./components/pages/About";
import Posts from "./components/pages/Posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <FeedBackForm />
                <FeedbackStats />
                <FeedBackList />
                <AboutIconLink />
              </div>
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/About/Team" element={<h1>Team Members</h1>} />
          <Route path="/Posts/*" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
