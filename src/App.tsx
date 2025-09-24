import * as React from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return <RouterProvider router={router} />;
};

export default App;
