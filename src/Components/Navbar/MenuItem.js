import React from 'react'
import {Link} from 'react-router-dom'

import {ProjectsListNav} from '../../Utils/Utils'

const list = ProjectsListNav()

const MenuItem = () => {
  return (
    <ul className='dropdown-menu'>
      {list.map((item, i) => {
        return (<li key={i}><a href={item.url} target='_BLANK'>{item.name}</a></li>)
      })
      }
      <li>
        <Link to='/projects'>
        See all projects
      </Link>
      </li>
    </ul>
  )
}

export default MenuItem
