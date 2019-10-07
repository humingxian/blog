import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, addTodo } from '../../store/actions/todo'
// import { Input, Button } from 'antd'

// server
import { getList } from '../../api/order'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      iptVal: ''
    }
  }

  addTodo = () => {
    this.state.iptVal && this.props.addTodo(this.state.iptVal)
    this.setState({
      iptVal: ''
    })
  }

  onChange = (e) => {
    this.setState({
      iptVal: e.target.value
    })
  }

  componentDidMount () {
    getList({
      userCode: 1000041,
      pageNum: 1,
      orderSource: 'pc_jc',
      orderState: ''
    }).then(res => {
      console.log(res.data)
    })
  }

  render () {
    const { todos } = this.props
    return (
      <div>
        <h1>Home</h1>
        <div>
          <Input type='text' value={this.state.iptVal} onChange={this.onChange} style={{ width: '300px' }}/>
          <Button type='primary' onClick={this.addTodo}>新增</Button>
        </div>
        <ul>
          {
            todos.map((item, index) => {
              return <li
                key={index} onClick={e => this.props.toggleTodo(item.id)} style={item.completed ? { textDecoration: 'line-through' } : {}}
              >{item.text}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

// 将store里的state映射到组件中的props里
const mapStateToProps = state => ({
  todos: state.todos
})

// 将store里的方法映射到组件中的props里
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  addTodo: text => dispatch(addTodo(text))
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(Home)
