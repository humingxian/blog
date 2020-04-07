import React, { Component } from 'react'

import { Form, Input, Button } from 'antd'

const { TextArea } = Input

@Form.create()
class SuggestForm extends Component {
  constructor () {
    super()
    this.state = {}
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  };

  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 6
        }
      }
    }

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="昵称">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入昵称!'
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="邮箱">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: '请输入邮箱'
              },
              {
                required: true,
                message: '请输入邮箱'
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="建议">
          {getFieldDecorator('suggest', {
            rules: [
              {
                min: 2,
                message: '多给点建议啦^_^'
              },
              {
                required: true,
                message: '请输入你的建议^o^'
              }
            ]
          })(<TextArea rows={6} />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default SuggestForm
