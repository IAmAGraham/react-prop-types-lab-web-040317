import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return (
      <div className='product_stuff'>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

function weightRange(){
  var range = []
  for(var i = 80; i<300; i++){
    range.push(i)
  }
  return range
}

Product.propTypes = {
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  weight: PropTypes.oneOf(weightRange()).isRequired
}
