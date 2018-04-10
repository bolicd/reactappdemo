import React, { Component } from 'react';

const LoaderHoc = (OriginalCompoment) =>{
    return class LoaderHoc extends Component{
        render(){
            return <OriginalCompoment {...this.props}/>;
        }
    }
};

export default LoaderHoc;