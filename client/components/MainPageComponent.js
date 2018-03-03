import React from "react";
import { connect } from "react-redux";
import getMockData from "./../actions/getMockData";

class MainPageComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getMockData();
  }

  render() {
    console.log(this.props.news);

    return <div className="container">Main news</div>;
  }
}

function mapStateToProps(state) {
  const { mockData } = state;
  return { news: (mockData && mockData.news && mockData.news.data) || [] };
}

export default connect(mapStateToProps, { getMockData })(MainPageComponent);
