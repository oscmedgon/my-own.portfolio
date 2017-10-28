import React from 'react'
import {Link} from 'react-router-dom'
import './Projects.css'

import {ProjectsListHome} from '../../Utils/Utils'

const list = ProjectsListHome()
const ProjectsHome = () => {
  return (
    <div className='row'>

      {list.map((item, i) => {
        return (
          <div className='col-sm-6 project' key={i}>
            <div className='row'>
              <div className='col-sm-4 col-md-offset-0 col-xs-8 col-xs-offset-2'>
                <img src={item.img} className='img-responsive img-rounded' alt='project' />
              </div>
              <div className='col-sm-8 col-xs-12'>
                <h3 className='ProjectTitle' ><a href={item.url} target='_BLANK'>{item.name}</a></h3>
                <p className='ProjectDesctiption'>{item.description}</p>
                <p className='ProjectDate'>{item.date}</p>
              </div>
              <p className='col-xs-12 tecnologies'>
                {item.languages.map((language, i) => {
                  return <span className='label label-info tecnologies' key={i} >{language}</span>
                })}
              </p>
            </div>
          </div>
        )
      })
    }
    <h2>Showing {list.length} projects</h2>
    <div className='alert alert-info' role='alert'>
      This section just shows the last 10 projects, to see all my projects click the following Link.&nbsp;
      <Link to='/projects' className='btn btn-primary' role='button'>See all projects</Link>
    </div>
    </div>
  )
}

export default ProjectsHome
