import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'antd'
import HeadAndFoot from 'component/headerAndFooter/index'
import styles from './style/index.scss'
// services
import { getBlogList } from 'api/blog.js'
import moment from 'moment'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articleList: []
    }
    this.goArticle = this.goArticle.bind(this)
  }

  goArticle (id) {
    this.props.history.push({
      pathname: '/article',
      search: '?' + id
    })
  }

  componentDidMount () {
    // 获取博客列表
    getBlogList({
      author: ''
    }).then(res => {
      if (res.errno === 0) {
        this.setState({
          articleList: res.data
        })
      }
    })
  }

  render () {
    const { articleList } = this.state
    return (
      <HeadAndFoot>
        <div className={styles.articleListBox}>
          {articleList.length > 0 && <div>
            {
              articleList.map((article, index) => {
                return (<div key={index} className={styles.article} data-flex='cross:center'>
                  <span className={styles.createTime}>{moment(article.createtime).format('YYYY-MM-DD')}</span>
                  <span className={styles.titleBox}>
                    <span
                      className={styles.title}
                      onClick={e => this.goArticle(article.id)}
                      style={{ WebkitBoxOrient: 'vertical' }}
                    >{article.title}</span>
                  </span>
                </div>)
              })
            }
          </div>}
          {articleList.length === 0 && <div>暂无数据</div>}
          {articleList.length > 0 && <div className={styles.paginationBox}>
            <Pagination defaultCurrent={1} total={50} />
          </div>}
        </div>
      </HeadAndFoot>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object
}

export default Home
