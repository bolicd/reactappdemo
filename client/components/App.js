import React from 'react';
import NavigationBar from './NavigationBar';
import { Route } from 'react-router-dom';
import SignupComponent from './SignupComponent';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <Route path="/signup" component={SignupComponent} />
      </div>
    );
  }
}

export default App;
