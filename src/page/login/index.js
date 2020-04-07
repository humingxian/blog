import React, { Component } from 'react'
// import { Modal } from 'antd'

import Password from './password'

// const { confirm } = Modal

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: 'password', // password: 密码登录， verification: 验证码登录 forgetPassword: 忘记密码
      enterpriseList: [],
      selectEnterpriseVisible: false,
      enterprise: {}
    }
  }

  changeType = (type) => {
    this.setState({ type })
  }

  render () {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 0 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 }
      }
    }
    return (
      <div style={{ overflow: 'hidden', height: '100%', backgroundImage: `url('${require('../../asserts/img/bg.jpg')}')`, backgroundSize: 'cover' }}>
        <Password
          { ...this.props }
          changeType={ this.changeType }
          formItemLayout={ formItemLayout }
        />
      </div>
    )
  }
}

export default Login
