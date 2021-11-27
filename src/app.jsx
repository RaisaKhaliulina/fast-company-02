import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/"exact component ={Main} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>
  );
}

export default App;
