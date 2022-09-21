import './App.css';
import {  Movies } from './components';
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { MovieDetails } from './pages';

function App() {
  return (
    <Router>
 <main className="bg-dark text-white min-vh-100">
              <div className="routes">
          <Routes>
            <Route path="/" element={<Movies />} />
                <Route path="/movie/:movieId" element={<MovieDetails/>} />
              </Routes>
            </div>
      </main>
    </Router>
  );
}

export default App;
