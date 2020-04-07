import React, { Component } from 'react'
import HeadAndFoot from 'component/headerAndFooter'
import styles from './style/index.scss'
import { getBlogDetail } from 'api/blog'
import moment from 'moment'
import PropTypes from 'prop-types'

class Article extends Component {
  state = {
    article: {}
  }

  getDetail = () => {
    const { search } = this.props.location
    const id = parseInt(search.slice(1))
    getBlogDetail(id).then(res => {
      console.log(res)
      if (res.errno === 0) {
        this.setState({
          article: res.data
        })
      }
    })
  }

  componentDidMount () {
    this.getDetail()
  }

  render () {
    const { article } = this.state
    return (
      <div className={styles.box}>
        <HeadAndFoot style={{ color: '#fff' }}>
          <div className={styles.articleBox}>
            <p className={styles.title} data-flex='main:center'>{article.title}</p>
            <p className={styles.createTime} data-flex='main:center'>{moment(article.createtime).format('YYYY-MM-DD HH:mm:ss')}</p>
            <div className={styles.article} dangerouslySetInnerHTML={{ __html: article.content }}></div>
          </div>
        </HeadAndFoot>
      </div>
    )
  }
}
Article.propTypes = {
  location: PropTypes.object
}

export default Article
