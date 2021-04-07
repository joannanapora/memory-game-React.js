import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import MemoryMenu from "./memory/memory-menu.component";

const App = () => {
  return (
    <div data-testid="App">
      <Switch>
        <Route exact path="/" component={MemoryMenu} />
      </Switch>
    </div>
  );
};

export default App;
