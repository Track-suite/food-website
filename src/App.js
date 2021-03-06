import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Conatct from "./Pages/Conatct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Conatct} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
