import React, { Component } from 'react';
import '../styles/styles.css';

const LoaderHoc = (propName) => (OriginalCompoment) =>{
    return class LoaderHoc extends Component{

        isEmpty(prop){
            return (
                    prop === null ||
                    prop === undefined ||
                    (prop.hasOwnProperty('length') && prop.length === 0) ||
                    (prop.constructor === Object && Object.keys(prop).length === 0)
            );
        }

        render(){
            return this.isEmpty(this.props[propName]) ? <div className="loader center-position"></div> : <OriginalCompoment {...this.props}/>;
        }
    }
};

export default LoaderHoc;