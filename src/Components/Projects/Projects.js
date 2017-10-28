import React from 'react'
import './Projects.css'

import {ProjectsList} from '../../Utils/Utils'

const list = ProjectsList()
const Projects = () => {
  return (
    <div className='row'>
      <h2>Showing {list.length} projects</h2>
      {list.map((item, i) => {
        return (
          <div className='col-sm-6 project' key={i}>
            <div className='row'>
              <div className='col-sm-4 col-md-offset-0 col-xs-8 col-xs-offset-2'>
                <img src={item.img} className='img-responsive img-rounded' alt='placeholder image' />
              </div>
              <div className='col-sm-8 col-xs-12'>
                <h3 className='ProjectTitle' ><a href={item.url} target='_BLANK'>{item.name}</a></h3>
                <p className='ProjectDesctiption'>{item.description}</p>
                <p className='ProjectDate'>{item.date}</p>
              </div>
              <p className='col-xs-12 tecnologies'>
                {item.languages.map(language => {
                  return <button type='button' className='btn btn-success tecnologies'>{language}</button>
                })}
              </p>
            </div>
          </div>
        )
      })
    }
    </div>
  )
}

export default Projects
