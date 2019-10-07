import React, { Component } from 'react'
import './style/index.less'

class HeadAndFoot extends Component {
  render () {
    const { children } = this.props
    return <div className='headerAndFooter'>
      <div className='top'>
        <h1>HDD</h1>
      </div>
      <div className='content'>
        {children}
      </div>
      <div className='bottom' data-flex='main:center'>
        2019-08-09 @copyright 版权归胡明显个人所有 hudadacool@163.com
      </div>
    </div>
  }
}

export default HeadAndFoot
