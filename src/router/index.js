import React from 'react'
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '../component/loading/index'

const Home = Loadable({
  loading: Loading,
  loader: () => import('../page/home')
})

const Article = Loadable({
  loading: Loading,
  loader: () => import('../page/article')
})

const About = Loadable({
  loading: Loading,
  loader: () => import('../page/about')
})

const ShowMD = Loadable({
  loading: Loading,
  loader: () => import('../page/showMD')
})

const Todo = Loadable({
  loading: Loading,
  loader: () => import('../page/todo')
})

const aRouter = [{
  path: '/',
  exact: true,
  render: () => <Redirect to="/home"/>
}, {
  path: '/home',
  name: 'home',
  component: Home
}, {
  path: '/article',
  name: 'article',
  component: Article
}, {
  path: '/about',
  name: 'about',
  component: About
}, {
  path: '/md',
  name: 'md',
  component: ShowMD
}, {
  path: '/todo',
  name: 'todo',
  component: Todo
}, {
  path: '/error',
  name: 'error',
  component: () => <div>404</div>
}, {
  path: '/*',
  render: () => <Redirect to="/error"/>
}]

export default () => (<HashRouter>
  <Switch>
    {
      aRouter.map((props, index) => {
        return <Route {...props} key={index} />
      })
    }
  </Switch>
</HashRouter>)
