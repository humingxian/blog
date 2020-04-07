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

const TestUseState = Loadable({
  loading: Loading,
  loader: () => import('../page/testUseState')
})

const Error = () => {
  return <div>404</div>
}
Error.displayName = 'Hello'

const RedirectHome = () => {
  return <Redirect to='/home'/>
}
RedirectHome.displayName = 'RedirectHome'

const RedirectError = () => {
  return <Redirect to='/error'/>
}
RedirectError.displayName = 'RedirectError'

const aRouter = [{
  path: '/',
  exact: true,
  component: RedirectHome
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
  path: '/testUseState',
  name: 'testUseState',
  component: TestUseState
}, {
  path: '/error',
  name: 'error',
  component: Error
}, {
  path: '/*',
  component: RedirectError
}]

export default function Routers () {
  return (<HashRouter>
    <Switch>
      {
        aRouter.map((props, index) => {
          return <Route {...props} key={index} />
        })
      }
    </Switch>
  </HashRouter>)
}
Routers.displayName = 'Routers'
