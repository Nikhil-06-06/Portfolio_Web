import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContainer from "./Container/AppContainer";
import { ThemeProvider } from "./Context/context";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ThemeProvider>
              <AppContainer />
            </ThemeProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
