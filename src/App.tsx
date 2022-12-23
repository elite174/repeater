import { Router } from "@solidjs/router";
import type { Component } from "solid-js";

import { AppRouter } from "./router";

const App: Component = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
