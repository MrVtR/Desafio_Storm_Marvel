import './App.css';
import Home from "./pages/Home/Home";
import ChDetail from "./pages/CharacterDetail/CharacterDetail";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
    return (
        <div className="App">
          <Router>
            <Switch>
              <Route path="/detail" component={ChDetail} />
              <Route path="/" exact component={Home} />
            </Switch>
          </Router>
        </div>
    );
}

export default App;
