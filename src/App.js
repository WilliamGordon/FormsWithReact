import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ControlledForm from './Forms/ControlledForm'
import UncontrolledForm from './Forms/UncontrolledForm'

function App() {
  return (
    <Router>
      <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Forms With React</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Forms/ControlledForm">ControlledForm</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Forms/UncontrolledForm">UncontrolledForm</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Forms/ControlledForm">
            <ControlledForm />
          </Route>
          <Route path="/Forms/UncontrolledForm">
            <UncontrolledForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
