import React from 'react'
import {Switch, Route} from 'react-router-dom'

import ProjectsHome from '../Projects/ProjectsHome'
import Projects from '../Projects/Projects'
import About from '../About/About'
import './Content.css'

const Content = () => {
  return (
    <div className='container content'>
      <Switch>
        <Route exact path='/' component={ProjectsHome} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
      </Switch>

    </div>
  )
}

export default Content
