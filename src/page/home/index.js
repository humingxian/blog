import React, { Component } from 'react'
import { Pagination } from 'antd'

import HeadAndFoot from 'component/headerAndFooter/index'

import './style/index.less'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articleList: [1, 2, 3, 4, 5, 6]
    }
  }

  goArticle = id => {
    this.props.history.push({
      pathname: '/article',
      query: { id }
    })
  }

  componentDidMount () {}

  render () {
    const { articleList } = this.state
    return (
      <HeadAndFoot>
        <div className='articleListBox'>
          <div>
            {
              articleList.map((article, index) => {
                return (<div key={index} className='article' data-flex='cross:center'>
                  <span className='createTime'>{'2018-09-12'}</span>
                  <span className='titleBox'>
                    <span
                      className='title'
                      onClick={e => this.goArticle(article)}
                      style={{ WebkitBoxOrient: 'vertical' }}
                    >VUE.JS: 2015 IN REVIEW</span>
                  </span>
                </div>)
              })
            }
          </div>
          <div className='paginationBox'>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </HeadAndFoot>
    )
  }
}

export default Home
