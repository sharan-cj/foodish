import React, { useState } from "react";
import "./App.css";
import { Navbar, Layout, BackgroundAbstract, Container } from "./Components";
import { Home, Trivia, Jokes, Dev, Page404 } from "./Pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { apiKeyContext } from "./Utils";

function App() {
  const [apiKey, setApiKey] = useState("");
  return (
    <apiKeyContext.Provider value={[apiKey, setApiKey]}>
      <Router>
        <BackgroundAbstract />
        <Navbar />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/trivia" component={Trivia} />
            <Route path="/jokes" component={Jokes} />
            <Route path="/dev" component={Dev} />
            <Route path="*" component={Page404} />
          </Switch>
        </Layout>
      </Router>
    </apiKeyContext.Provider>
  );
}

export default App;
