import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Row, Col, Icon
} from 'antd'
import Header from '../../layout/Header'
import LoopImg from 'comp/loopImg'
import styles from './style.scss'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showSwiper: false,
      index: 0,
      imageList: [
        {
          url: require('../../asserts/img/timg.jpeg'),
          title: '嘎嘎嘎 哈哈哈 哦哦哦 嗷嗷嗷 嘎嘎嘎 哈哈哈 哦哦哦 嗷嗷嗷'
        },
        {
          url: require('../../asserts/img/timg1.jpeg'),
          title: '嘎嘎嘎 哈哈哈 哦哦哦 嗷嗷嗷 嘎嘎嘎 哈哈哈 哦哦哦 嗷嗷嗷'
        },
        {
          url: require('../../asserts/img/timg2.jpeg'),
          title: '嘎嘎嘎 哈哈哈 哦哦哦 嗷嗷嗷 嘎嘎嘎 哈哈哈 哦哦哦 嗷嗷嗷'
        },
        {
          url: require('../../asserts/img/timg3.jpeg'),
          title: '嘎嘎嘎 哈哈哈 哦哦哦 嗷嗷嗷 嘎嘎嘎 哈哈哈 哦哦哦 嗷嗷嗷'
        },
        {
          url: require('../../asserts/img/timg.jpeg'),
          title: '嘎嘎嘎 哈哈哈 哦哦哦 嗷嗷嗷 嘎嘎嘎 哈哈哈 哦哦哦 嗷嗷嗷'
        },
        {
          url: require('../../asserts/img/timg1.jpeg'),
          title: '嘎嘎嘎 哈哈哈 哦哦哦 嗷嗷嗷 嘎嘎嘎 哈哈哈 哦哦哦 嗷嗷嗷'
        }
      ]
    }
  }

  showSwiperVisible = (index) => {
    this.setState({
      showSwiper: true,
      index
    })
  }

  closeSwiperVisible = () => {
    this.setState({
      showSwiper: false
    })
  }

  getChild = (child) => {
    this.child = child
  }

  render () {
    const { imageList, showSwiper, index } = this.state
    const title = decodeURIComponent(this.props.location.search.substr(1))
    return (
      <div className={styles.box}>
        <Header />
        <div className={styles.contentBox}>
          <div className={styles.content}>
            <h3 data-flex='main:center'>{title}</h3>
            <Row gutter={32}>
              {
                imageList.map((item, index) => {
                  return (
                    <Col span={6} key={index}>
                      <div>
                        <div className={styles.imgBox} data-flex='main:center cross:center'>
                          <img onClick={() => this.showSwiperVisible(index)} src={item.url} width="100%" alt=""/>
                        </div>
                      </div>
                    </Col>
                  )
                })
              }
            </Row>
          </div>
        </div>
        {
          showSwiper && <div>
            <div className={styles.closeBox}>
              <Icon type='close' onClick={this.closeSwiperVisible} />
            </div>
            <LoopImg list={imageList} index={index} />
          </div>
        }
      </div>
    )
  }
}

Home.propTypes = {
  location: PropTypes.object
}

export default Home
