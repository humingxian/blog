import React, { Component } from 'react'
import styles from './style.scss'
import { Icon } from 'antd'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

class LoopImg extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  getNode = (el) => {
    this.el = el
  }

  getSwiperBox = (el) => {
    this.swiperContainer = el
  }

  prevOrNext = (e) => {
    // console.log(e)
    if (e.keyCode === 39) {
      this.swiper.slideNext()
    }
    if (e.keyCode === 37) {
      this.swiper.slidePrev()
    }
  }

  initSwiper = () => {
    const _this = this
    const { index } = this.props
    this.swiper = new Swiper(this.swiperContainer, {
      direction: 'horizontal',
      loop: true, // 循环模式选项
      // effect: 'coverflow',
      clickable: true,
      speed: 600,
      initialSlide: index,
      // 如果需要分页器
      pagination: {
        el: '.swiperPagination'
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiperButtonNext',
        prevEl: '.swiperButtonPrev'
      }
    })
  }

  componentDidMount () {
    const clientWidth = document.body.clientWidth
    const clientHeight = document.body.clientHeight
    this.el.style.width = clientWidth + 'px'
    this.el.style.height = clientHeight + 'px'

    this.initSwiper()
    window.addEventListener('keydown', this.prevOrNext)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.prevOrNext)
  }

  render () {
    const { list } = this.props
    return (
      <div className={styles.loopImgBox} ref={this.getNode}>
        <div className={styles.singleImgBox}>
          <div className={styles.swiperContainer} ref={this.getSwiperBox}>
            <div className={[styles['swiper-wrapper'], 'swiper-wrapper'].join(' ')}>
              {
                list && list.length > 0 &&
                list.map((item, index) => {
                  return (
                    <div key={index} className={[styles['swiper-slide'], 'swiper-slide'].join(' ')} data-flex='main:center corss:center'>
                      <img src={item.url} alt="美女炸了"/>
                      <div className={styles.mask} />
                    </div>
                  )
                })
              }
            </div>
            <div className={['swiperPagination', styles.pagination].join(' ')}></div>
            <div className={['swiperButtonPrev', styles.swiperButtonPrev].join(' ')}>
              <Icon type="caret-left" />
            </div>
            <div className={['swiperButtonNext', styles.swiperButtonNext].join(' ')}>
              <Icon type="caret-right" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoopImg
