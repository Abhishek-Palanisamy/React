import React, { Component } from 'react';
import PropTypes from 'prop-types';
class PropsValidation extends Component {
  render() {
    return (
      <div>
      <h3>Hello {this.props.name}-{this.props.num}</h3></div>
    )
  }
}
PropsValidation.propTypes = {
    name:PropTypes.string,
    num:PropTypes.number.isRequired,
}
PropsValidation.defaultProps={
name:"Abhishek"
}

export default PropsValidation