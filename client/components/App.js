import React from 'react';
import NavigationBar from './NavigationBar';
import { Route } from 'react-router-dom';
import SignupForm from './SignupForm';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <Route path="/signup" component={SignupForm} />
      </div>
    );
  }
}

export default App;
