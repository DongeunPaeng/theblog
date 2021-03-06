import React from "react";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PageRenderer from "./page-renderer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
