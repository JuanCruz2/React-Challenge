import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {GlobalStyle} from './styles/globalStyles'
import {PageLayout} from "./shared/layout/"
import { HomePage } from './pages/home/'
import { ComicPage } from './pages/comic/'

function App() {
  return (
    <Router>
      <GlobalStyle />
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
