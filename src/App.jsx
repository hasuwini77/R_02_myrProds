import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./components/pages/Routes";
import { RANDOM_MYR } from "./data/data";
import NavComponent from "./components/Navbar";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  const [randomTrack, setRandomTrack] = useState(RANDOM_MYR);

  return (
    <Router>
      <div className="App">
        <NavComponent />
        <Container>
          <div className="mainContent">
            <RoutesComponent />
          </div>
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
