import React, { Component } from 'react'
import { Form, Button, Input, Icon } from 'antd'
import PropTypes from 'prop-types'

@Form.create()
class Password extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.props.history.push({
          pathname: '/home'
        })
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const { formItemLayout } = this.props

    return (
      <div style={{ margin: '200px auto', width: '400px', padding: '50px', borderRadius: '6px', background: '#fff' }}>
        <div style={{ margin: '0 0 20px 0', fontSize: '16px', fontWeight: '800' }}>密码登录</div>
        <Form { ...formItemLayout } onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: '必填!' },
                { max: 11, message: '请输入账号!' }
              ]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入账号"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: '必填!' },
                { max: 12, min: 6, message: '请输入6-12位密码!' }
              ]
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                id="password"
                placeholder="请输入密码"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

Password.propTypes = {
  form: PropTypes.object,
  formItemLayout: PropTypes.object,
  history: PropTypes.object
}

export default Password
