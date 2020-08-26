import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoomsPage from "./pages/RoomsPage";
import RoomPage from "./pages/RoomPage";
import Layout from "./components/Layout";

function App() {
  const getRoomId = pathId => {
    console.log(pathId);
    return pathId;
  };

  return (
    <>
      <div>{pathIasdasd}</div>
      <Router>
        <Switch>
          <Layout>
            <Route path="/" exact component={RoomsPage} getRoomId={getRoomId} />
            <Route path={"/room/"} component={RoomPage} />
          </Layout>
        </Switch>
      </Router>
    </>
  );
}

export default App;
