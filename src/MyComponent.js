import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  onClicked: PropTypes.func,
  title: PropTypes.any
};

const defaultProps = {
  name: "Default name f app"
}

class MyComponent extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }


  render() {
    const {title, name, onClick}= this.props;
      return (
      <div className="Component">
        <h1>Title: {title} </h1>
        <h1>Name: {name} </h1>
        <div onClick={onClick}> Click Me </div>

      </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
