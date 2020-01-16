import React from "react";

import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Projects from "./pages/projects";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Test from "./pages/test";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
