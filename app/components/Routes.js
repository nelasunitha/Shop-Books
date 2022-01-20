import React from "react";
import Home from "./Home";
import { Switch, Route, NavLink } from "react-router-dom";
//importing all files from different location to setup the routes
import AllBooks from "./AllBooks";
import SingleBook from "./SingleBook";
import AddBook from "./AddBook";
import EditBook from "./EditBook";
const Routes = () => {
  return (
    <div>
      <nav>
        Welcome!
        <p><NavLink to="/"> Home </NavLink></p>
        <p><NavLink to="/books"> AllBooks </NavLink></p>
        <p><NavLink to="/books"> Add Book </NavLink></p>
      </nav>
      <main>
        <h3>
          Welcome to the store, one stop for the novels/books you must read in your lifetime.!
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
