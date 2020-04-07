import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGoods } from '../../store/actions/shoppingCart'
import PropTypes from 'prop-types'

import { Input, Button } from 'antd'

class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      iptVal: ''
    }
    this.addGoods = this.addGoods.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  addGoods () {
    this.state.iptVal && this.props.addGoodsForProps(this.state.iptVal)
    this.setState({
      iptVal: ''
    })
  }

  onChange (e) {
    this.setState({
      iptVal: e.target.value
    })
  }

  render () {
    const { shoppingCart } = this.props
    return (
      <div>
        <h1>About</h1>
        <div>
          <Input type="text" value={this.state.iptVal} onChange={this.onChange} style={{ width: '300px' }}/>
          <Button type="primary" onClick={this.addGoods}>新增</Button>
        </div>
        <ul>
          {
            shoppingCart.map((item, index) => {
              return <li key={index} >{item.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

// 将store里的state映射到组件中的props里
const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart
})

// 将store里的方法映射到组件中的props里
const mapDispatchToProps = dispatch => ({
  addGoodsForProps: name => dispatch(addGoods(name))
})

About.propTypes = {
  shoppingCart: PropTypes.array,
  addGoodsForProps: PropTypes.func
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(About)
