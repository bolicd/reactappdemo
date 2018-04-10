import React, { Component } from 'react';
import '../styles/styles.css';

const LoaderHoc = (OriginalCompoment) =>{
    return class LoaderHoc extends Component{
        render(){
            return this.props.newsLoading ? <div className="loader center-position"></div> : <OriginalCompoment {...this.props}/>;
        }
    }
};

export default LoaderHoc;