import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {PageLayout} from "./shared/layout/"
import { HomePage } from './pages/home/'
import { ComicPage } from './pages/comic-details/'

function App() {
  return (
    <Router>
      <PageLayout>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/comic">
            <ComicPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;
