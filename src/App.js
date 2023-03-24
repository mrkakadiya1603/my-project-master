
import './App.css';
import Nav from "./components/NavBar/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import pages from './components/pages/page1';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route path="/portfolio" component={Portfolio} />
           
           

            <Route path="/pages" component={pages} />
            
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
