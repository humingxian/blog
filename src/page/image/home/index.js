import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Row, Col
} from 'antd'
import Header from '../../layout/Header'
import styles from './style.scss'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
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
        },
        {
          url: require('../../asserts/img/timg2.jpeg'),
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
        }

      ]
    }
  }

  render () {
    const { imageList } = this.state
    return (
      <div className={styles.box}>
        <Header />
        <div className={styles.contentBox}>
          <div className={styles.content}>
            <h2>热门推荐</h2>
            <Row gutter={32}>
              {
                imageList.map((item, index) => {
                  return (
                    <Col span={6} key={index}>
                      <div className={styles.itemBox} onClick={ () => this.props.history.push({ pathname: '/list', search: encodeURIComponent(item.title) })}>
                        <div className={styles.imgBox} data-flex='main:center cross:center'>
                          <div className={styles.image} style={{ backgroundImage: `url(${item.url})` }} width='100%' alt=''/>
                        </div>
                        <div className={styles.imageTitle} style={{ WebkitBoxOrient: 'vertical' }} >{item.title}</div>
                      </div>
                    </Col>
                  )
                })
              }
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object
}

export default Home
