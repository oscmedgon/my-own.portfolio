import React from 'react';
import {ProgressBar} from 'react-bootstrap';

import {PersonalData} from '../../Utils/Utils';
import './About.css';

const About = () => {
  const data = PersonalData();
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'>
          <img src={data.img} alt='person' className='img-responsive img-circle' />
        </div>
        <div className='col-md-10 row AboutContent'>
          <h2 className='sectionTitle'>Datos personales</h2>
          <div className='col-md-4'>
            <ul className='list-unstyled'>
              <li><strong>Name: </strong> {data.name}</li>
              <li><strong>Hometown: </strong> {data.cityOrigin}</li>

            </ul>
          </div>
          <div className='col-md-6'>
            <ul className='list-unstyled'>
              <li><strong>Profesion: </strong>{data.profesion}</li>
              <li><strong>Residing at: </strong> {data.actualCity}</li>
            </ul>
          </div>
        </div>
        <div className='col-md-12 experience'>
          <div>
            <h3>
              About me
            </h3>
            {data.description.map((description, i) => {
              return (<p key={i}>{description}<br /></p>);
            })}
          </div>
        </div>
        <div className='col-md-12'>
          <h3>
            Experience
          </h3>
          <div className='experience row'>
            {data.experience.map((job, i) => {
              return (
                <div className='col-md-4' key={i}>
                  <ul className='list-unstyled'>
                    <li>
                      <strong>Job description: </strong>{job.description}
                    </li>
                    <li>
                      <strong>Company name: </strong>{job.company}
                    </li>
                    { job.endDate &&
                    <li>
                      <strong>From </strong>{job.startDate}<strong> to </strong>{job.endDate}
                    </li>
                    ||
                    <li>
                      <strong>Started </strong>{job.startDate}
                    </li>
                    }
                    <li>
                      <strong>City: </strong>{job.City}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className='row'>
            <div className='experience col-md-6'>
              <h3>Education</h3>
              {data.education.map((course, i) => {
                return (
                  <div key={i}>
                    <ul className='list-unstyled'>
                      <li>
                        <strong>Title: </strong> {course.title}
                      </li>
                      <li>
                        <strong>School: </strong> {course.school}
                      </li>
                      <li>
                        <strong>From </strong> {course.startDate} <strong> to </strong> {course.endDate}
                      </li>
                      <li>
                        <strong>City: </strong>{course.City}
                      </li>
                      <li>
                        <strong>Status: </strong> {course.status ? 'finished' : 'In progress'}
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className='col-md-6'>
              <h3>Programming skills</h3>
              <div>
                {data.skills.map((skill, i) => {
                  return (
                    <ProgressBar key={i} now={skill.value} label={skill.label} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
