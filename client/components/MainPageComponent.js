import React from "react";
import { connect } from "react-redux";
import getMockData from './../actions/getMockData';

class MainPageComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getMockData();
  }


  render() {
    debugger;
    console.log(this.props.mockData);
  return (
    <div className="container">
      Main news
      
    </div>
  );
  }
}

function mapStateToProps(state) {
  debugger;
  return { mockData: state.mockData };
}

export default connect(mapStateToProps, { getMockData })(MainPageComponent);