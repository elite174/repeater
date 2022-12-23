import { Router } from "@solidjs/router";
import type { Component } from "solid-js";

import { AppRouter } from "./router";

import "~/styles/index.scss";
import { Loader } from "./components/core/Loader";

const App: Component = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
