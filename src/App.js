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
        <Switch>
          <Route path="/comic/:comicId">
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
