import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./components/pages/Routes";
import NavComponent from "./components/Navbar";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
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
