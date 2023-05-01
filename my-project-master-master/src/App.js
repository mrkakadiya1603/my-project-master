import "./App.css";
import Nav from "./components/NavBar/Nav";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pages from "./pages/pages/page1.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route path="/portfolio" component={Portfolio} />

            <Route path="/pages" component={Pages} />
            {/* <Route path="/contact" component={ Contact } /> */}
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
