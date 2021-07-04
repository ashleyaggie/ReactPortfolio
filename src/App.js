import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contacts from "./pages/Contacts";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Header />
        <Wrapper>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/aboutme" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
