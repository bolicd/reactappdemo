import React from "react";
import { connect } from "react-redux";
import getMockData from "./../actions/getMockData";
import { debug } from "util";

class MainPageComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getMockData();
  }

  renderNews({_id,headline,body}) {
    return (
    <li className="list-group-item" key={_id}>
      <h3>{headline}</h3>
      <p>{body}</p>
    </li>
    )
  }

  render() {
    console.log(this.props.newsLoading);

    return (
      <div className="container">
        <h1>Main news</h1>
        <ul className="list-group">
          {this.props.news.map(this.renderNews)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  debugger;
  const { mockData } = state;
  return { 
    newsLoading: mockData && mockData.loading,
    news: (mockData && mockData.news && mockData.news.data) || [] 
  };
}

export default connect(mapStateToProps, { getMockData })(MainPageComponent);
