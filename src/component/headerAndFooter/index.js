import React, { Component } from 'react'
import styles from './style/index.scss'
import PropTypes from 'prop-types'
class HeadAndFoot extends Component {
  constructor (props) {
    super(props)
    this.state = {
      height: 0
    }
    this.caculateHeight = this.caculateHeight.bind(this)
  }

  caculateHeight () {
    const body = document.documentElement || document.body
    const height = body.clientHeight
    this.setState({
      height
    })
  }

  componentDidMount () {
    this.caculateHeight()
    window.addEventListener('resize', this.caculateHeight)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.caculateHeight)
  }

  render () {
    const { children } = this.props
    const { height } = this.state
    return <div className={styles.headerAndFooter} data-flex='dir:top box:justify' style={{ minHeight: height + 'px' }}>
      <div className={styles.top}>
        <h1>HDD</h1>
      </div>
      <div className={styles.content} style={{ height: 'auto' }}>
        {children}
      </div>
      <div className={styles.bottom} data-flex='main:center'>
        2019-08-09 @copyright 版权归胡明显个人所有 hudadacool@163.com
      </div>
    </div>
  }
}

HeadAndFoot.propTypes = {
  children: PropTypes.object
}

export default HeadAndFoot
