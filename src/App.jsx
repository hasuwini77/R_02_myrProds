import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CategoryFilters from "./components/CategoryFilters";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./components/pages/Routes";
import FeaturedSong from "./components/FeaturedSong";
import { RANDOM_MYR } from "./data/data";

function App() {
  const [randomTrack, setRandomTrack] = useState(RANDOM_MYR);

  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="mainContent">
          <Sidebar />
          <RoutesComponent />
        </div>
      </div>
    </Router>
  );
}

export default App;
