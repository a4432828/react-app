import React, { Component, Fragment } from 'react'

export default class Item extends Component {

  handleClick = () => {
    console.log(this.props.index)
    this.props.deleteItem()
  }

  render() {
    const {content} = this.props
    return (
      <Fragment>
        <li onClick={this.handleClick}>{content}</li>
      </Fragment>
    )
  }
}
