import './App.css';
import SwData from './js/components/SwData';
import { getWindowHost } from "./js/utils/urlUtils";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <header className="header">
            <img src={`${getWindowHost()}/img/star.svg`} alt="Star" className="header-img"/>
            <img src={`${getWindowHost()}/img/wars.svg`} alt="Wars" className="header-img"/>
          </header>
          <ul className="menu">
            <li className="menu-item">
              <Link to="/characters" className="menu-link">Characters</Link>
            </li>
            <li className="menu-item">
              <Link to="/movies" className="menu-link">Movies</Link>
            </li>
            <li className="menu-item">
              <Link to="/characters" className="menu-link">Starships</Link>
            </li>
            <li className="menu-item">
              <Link to="/characters" className="menu-link">Planets</Link>
            </li>
            <li className="menu-item">
              <Link to="/characters" className="menu-link">Vehicles</Link>
            </li>
            <li className="menu-item">
              <Link to="/characters" className="menu-link">Species</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/characters">
            <SwData dataType="people"/>
          </Route>
          <Route path="/movies">
            <SwData dataType="films"/>
          </Route>
          <Route 
            exact
            path="/"
            render={() => <Redirect to="/characters" />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
