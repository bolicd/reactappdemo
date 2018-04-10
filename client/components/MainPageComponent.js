import React from "react";
import { connect } from "react-redux";
import getMockData from "./../actions/getMockData";
import { debug } from "util";
import NewsListComponent from './NewsListComponent';

class MainPageComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getMockData();
  }


  render() {
    return (
      <div className="container">
        <h1>Main news</h1>
        {<NewsListComponent newsList={this.props.news} newsLoading={this.props.newsLoading} />}
      </div>

    )
  }
}

function mapStateToProps(state) {
  const { mockData } = state;
  return { 
    newsLoading: mockData && mockData.loading,
    news: (mockData && mockData.news && mockData.news.data) || [] 
  };
}

export default connect(mapStateToProps, { getMockData })(MainPageComponent);
