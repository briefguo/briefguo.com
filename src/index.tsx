import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loading from './components/Loading'
import ParticleBackground from './components/ParticleBackground'

const Index = React.lazy(() => import('./pages/index'))
const Projects = React.lazy(() => import('./pages/projects'))
const About = React.lazy(() => import('./pages/about'))
const Blog = React.lazy(() => import('./pages/blog'))
const Contact = React.lazy(() => import('./pages/contact'))

const BriefguoApp = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
        <ParticleBackground></ParticleBackground>
      </BrowserRouter>
    </Suspense>
  )
}

ReactDOM.render(<BriefguoApp />, document.getElementById('__APP__'))
