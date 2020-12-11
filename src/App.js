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
import Movie from './Components/Movie.js';
import AddMovie from './Components/AddMovie.js';
import EditMovie from './Components/EditMovie.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route name="editMovie" component={EditMovie} path="/:categoryId/movies/:id/update" />
          <Route name="Movie" component={Movie} path="/:categoryId/movies/:id" />
          <Route component={Create} path="/create/" />
          <Route component={Movies} path="/:id/movies" />
          <Route component={AddMovie} path="/:id/add-movie" />
          <Route component={Edit} path="/:id/edit-category" />
          <Route component={Category} path="/:id" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
