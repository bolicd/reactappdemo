import React from 'react';

export default class SignupForm extends React.Component {

constructor(props){
  super(props);
  this.state={
    username: ''
  };

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}

onChange(e){
  this.setState({[e.target.name]:e.target.value});
}

onSubmit(e){
  e.preventDefault();
  console.log(this.state);
}

render(){
  return (
    <form onSubmit={this.onSubmit}>
      <h1>Click here to signup (mock)</h1>
      <div className="form-group">
        <label className="form-group">Username</label>
        <input type="text"
          name="username"
          onChange={this.onChange}
          className="form-control" />
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-lg">Sign up</button>
      </div>
    </form>
  )
}

};
