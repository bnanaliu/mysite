import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personal from "@/pages/Personal";
import Home from "@/pages/Home";
import Chapter from "@/pages/Chapter";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Personal />} />
        <Route path="/python-course" element={<Home />} />
        <Route path="/chapter/:id" element={<Chapter />} />
      </Routes>
    </Router>
  );
}
