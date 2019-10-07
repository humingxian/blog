import React, { Component } from 'react'
const ReactMarkdown = require('react-markdown')
class ShowMD extends Component {
  componentDidMount () {

  }

  render () {
    const input = '# This is a header\n\nAnd this is a paragraph'
    return (
      <div id='testeditor'>
        <ReactMarkdown source={input} />
      </div>
    )
  }
}

export default ShowMD
