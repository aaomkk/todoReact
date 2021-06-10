import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import CardPage from "./pages/CardPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>

      <Router>
        <Switch>
        <Route exact path="/" component={HomePage}/> 
        <Route exact path="/card" component={CardPage}/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
