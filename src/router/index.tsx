import { Routes, Route } from "@solidjs/router";

import { NotFoundPage } from "~/pages/404";
import { LoginPage } from "~/pages/login";
import { MainPage } from "~/pages/main";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" component={MainPage}></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="*" component={NotFoundPage}></Route>
    </Routes>
  );
};
