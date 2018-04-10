import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoaderHoc from './../hoc/LoaderHoc';

class NewsListComponent extends Component {

    constructor(props){
        super(props);
        this.renderNews = this.renderNews.bind(this);
    }

    renderNews({_id,headline,body}) {
        return (
            <li className="list-group-item" key={_id}>
                <h3>{headline}</h3>
                <p>{body}</p>
            </li>
        )
    }

    render(){
        return (
            <div>
                <ul className="list-group">
                {this.props.newsList.map(this.renderNews)}
                </ul>
            </div>
        )
    }
};

NewsListComponent.propTypes = {
    newsList: PropTypes.array.isRequired,
    newsLoading: PropTypes.bool.isRequired
};

export default LoaderHoc(NewsListComponent);
