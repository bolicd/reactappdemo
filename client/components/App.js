import React from "react";
import NavigationBar from "./NavigationBar";
import { Route } from "react-router-dom";
import SignupComponent from "./SignupComponent";
import MainPageComponent from "./MainPageComponent";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <Route exact path="/" component={MainPageComponent} />
        <Route path="/signup" component={SignupComponent} />
      </div>
    );
  }
}

export default App;
