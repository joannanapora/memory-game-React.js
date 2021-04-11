import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import MemoryMenu from "./memory/memory-menu.component";
import CardList from "./card-list/card-list.component";
const App = () => {
  return (
    <div data-testid="App">
      <Switch>
        <Route exact path="/" component={MemoryMenu} />
        <Route path="/game" component={CardList} />
      </Switch>
    </div>
  );
};

export default App;
