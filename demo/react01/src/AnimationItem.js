import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AnimationItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  state = {  }
  render() { 
    return ( 
      <li onClick={this.handleClick}>
        {this.props.content} {this.props.from}
      </li>
     );
  }
  handleClick() {
    this.props.deleteItem(this.props.index)
  }
}

AnimationItem.propTypes = {
  from: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
};

AnimationItem.defaultProps = {
  from: '日本',
}
 
export default AnimationItem;