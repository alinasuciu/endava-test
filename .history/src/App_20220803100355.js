import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewRoutes from "./views/routes";
import ErrorNotification from "./components/ErrorNotification";
import Homepage from "./views/Homepage";
import Login from "./views/Login";
const { createMemoryHistory } = require("history");


const App = () => {
  const history = createMemoryHistory();

  return (
    <div className="App">
      <>
        <ErrorNotification />
        <Router location={history.location} navigator={history}>
        <Routes>
     <Route
      path="/"
      //layout={Layout}
      element={<Homepage />}
    />
    <Route
      path="/login"
      //layout={Layout}
      element={<Login />}
    />
  </Routes>
        </Router>
      </>
    </div>
  );
};

export default App;