import './index.css';
import React from 'react';
const isEmpty = (array) =>
  array === null ||
  array === undefined ||
  (array.hasOwnProperty('length') && array.length === 0 )

const Loading = (loadingProp) => WrappedComponent => {
  return class LoadingHOC extends React.Component {
    state = { l: true};
    componentDidMount() {
      setTimeout(() => {
        this.setState({l: false});
      }, 2000);
    }

    render () {
      return (
        <>
          {(isEmpty(this.props[loadingProp]))?<div className="loader"/>:<WrappedComponent {...this.props}/>}
        </>
      )
    }
  }
}

export default Loading;
