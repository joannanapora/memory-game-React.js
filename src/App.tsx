import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import MemoryMenu from "./memory/memory-menu.component";
import WinnerScreen from "./winner-screen/winner-screen.component";

const App = () => {
  return (
    <div data-testid="App">
      <Switch>
        <Route exact path="/" component={MemoryMenu} />
        <Route path="/winner" component={WinnerScreen} />
      </Switch>
    </div>
  );
};

export default App;
