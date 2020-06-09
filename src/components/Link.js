import React, { Component } from 'react'

export default class Link extends Component {
  render() {
    const { link } = this.props
    const { description, url } = link;

    return (
      <div>
        {description}({ url })
      </div>
    )
  }
}
