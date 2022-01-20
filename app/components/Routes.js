import React from "react";

import { Switch, Route, NavLink } from "react-router-dom";
//importing all files from different location to setup the routes
import AllBooks from "./AllBooks";
import SingleBook from "./SingleBook";
import Home from "./Home";
import AddBook from "./AddBook";
import EditBook from "./EditBook";
const Routes = () => {
  return (
    <div>
      <nav>
        Welcome!
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/books"> Books </NavLink>
      </nav>
      <main>
        <h3>
          Welcome to Book Store that you must read in your lifetime.!
        </h3>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={AllBooks} />
          <Route exact path="/books/create" component={AddBook} />
          <Route exact path="/books/edit/:id" component={EditBook} />
          <Route exact path="/books/:id" component={SingleBook} />
        </Switch>
      </main>
    </div>
  );
};

export default Routes;
