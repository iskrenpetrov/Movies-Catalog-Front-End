import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home.js';
import Category from './Components/Category.js';
import Create from './Components/Create.js';
import Edit from './Components/Edit.js';
import Movies from './Components/Movies.js';
import EditMovie from './Components/EditMovie.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={EditMovie} path="/:id/movies/:id2/update" />
          <Route component={Create} path="/create-category/" />
          <Route component={Movies} path="/:id/movies" />
          <Route component={Edit} path="/:id/edit-category" />
          <Route component={Category} path="/:id" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
