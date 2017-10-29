import React from 'react'
import {ProgressBar} from 'react-bootstrap'
import './About.css'

const About = () => (
  <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-2'>
        <img src='https://avatars3.githubusercontent.com/u/29759668?s=460&v=4' alt='person' className='img-responsive img-circle' />
      </div>
      <div className='col-md-10 row AboutContent'>
        <h2 className='sectionTitle'>Datos personales</h2>
        <div className='col-md-4'>
          <ul className='list-unstyled'>
            <li><strong>Name:</strong> Óscar Medina Goñi</li>
            <li><strong>Hometown:</strong> Pamplona (Spain)</li>

          </ul>
        </div>
        <div className='col-md-6'>
          <ul className='list-unstyled'>
            <li><strong>Profesion: Web Developer</strong></li>
            <li><strong>Residing at:</strong> Hospitalet de Llobregat(Spain)</li>
          </ul>
        </div>
      </div>
      <div className='col-md-12 experience'>
        <div>
          <h3>
            About me
          </h3>
          <p>
            My career in web development started en 2015 during the second course of my professional education in Seville, where I learned xhtml and css.<br /><br />
            Two month later I knew that I wanted to work as web developer at all cost, I studied some new technologies on my own like html5 and css3, but when I did i though, “This it's not good enough.” and I started to study php on my own with some help of my teacher and made two big projects with php.<br /><br />
            Some months later my studies finished and started and got a job in my home town, but not related with web development, I did my best to learn all of this new job but two years later my contract ended and I decided to go back to web development and I went to Barcelona to study a bootcamp at Skylab Coders academy, and here I am, this it's the present studying JavaScript, react and much more, but this it's not the end, it's just the beginning.
          </p>
        </div>
      </div>
      <div className='col-md-12'>
        <h3>
          Experience
        </h3>
        <div className='experience row'>
          <div className='col-md-4'>
            <ul className='list-unstyled'>
              <li>
                <strong>Job description:</strong> Fiber Optic Network Operator
              </li>
              <li>
                <strong>Company name:</strong> ZENER PLUS SL
              </li>
              <li>
                <strong>From</strong> September 2015 <strong>to</strong> July 2017
              </li>
              <li>
                <strong>City:</strong>Pamplona (Spain)
              </li>
            </ul>
          </div>
          <div className='col-md-4'>
            <ul className='list-unstyled'>
              <li>
                <strong>Job description:</strong> Administrative internship
              </li>
              <li>
                <strong>Company name:</strong> SYSTEM FORMACION
              </li>
              <li>
                <strong>From</strong> March 2015 <strong>to</strong> June 2017
              </li>
              <li>
                <strong>City:</strong>Seville (Spain)
              </li>
            </ul>
          </div>
          <div className='col-md-4'>
            <ul className='list-unstyled'>
              <li>
                <strong>Job description:</strong> Grade 3 journeyman
              </li>
              <li>
                <strong>Company name:</strong> Volkswagen Navarra
              </li>
              <li>
                <strong>From</strong> November 2012 <strong>to</strong> January 2013
              </li>
              <li>
                <strong>City:</strong>Pamplona (Spain)
              </li>
            </ul>
          </div>
          <div className='col-md-4'>
            <ul className='list-unstyled'>
              <li>
                <strong>Job description:</strong> Grade 3 journeyman
              </li>
              <li>
                <strong>Company name:</strong> Volkswagen Navarra
              </li>
              <li>
                <strong>From</strong> January 2012 <strong>to</strong> February 2012
              </li>
              <li>
                <strong>City:</strong>Pamplona (Spain)
              </li>
            </ul>
          </div>
          <div className='col-md-4'>
            <ul className='list-unstyled'>
              <li>
                <strong>Job description:</strong> Grade 3 journeyman
              </li>
              <li>
                <strong>Company name:</strong> Volkswagen Navarra
              </li>
              <li>
                <strong>From</strong> September 2009 <strong>to</strong> September 2011
              </li>
              <li>
                <strong>City:</strong>Pamplona (Spain)
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='experience col-md-6'>
            <h3>Education</h3>
            <div>
              <ul className='list-unstyled'>
                <li>
                  <strong>Title:</strong> Full Stack Developer Javascript
                </li>
                <li>
                  <strong>School:</strong> Skylab Coders Academy
                </li>
                <li>
                  <strong>From</strong> September 2017 <strong>to</strong> December 2017
                </li>
                <li>
                  <strong>City:</strong>Barcelona (Spain)
                </li>
                <li>
                  <strong>Status:</strong> In progress.
                </li>
              </ul>
            </div>
            <div>
              <ul className='list-unstyled'>
                <li>
                  <strong>Title:</strong> Medium-Level Sys Admin Degree
                </li>
                <li>
                  <strong>School:</strong> I.E.S Ramón del Valle Inclán
                </li>
                <li>
                  <strong>From</strong> September 2013 <strong>to</strong> March 2015
                </li>
                <li>
                  <strong>City:</strong>Seville (Spain)
                </li>
                <li>
                  <strong>Status:</strong> Finished.
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-6'>
            <h3>Programming skills</h3>
            <div>
              <ProgressBar now={85} label='HTML5/CSS3' />
              <ProgressBar now={85} label='Bootstrap' />
              <ProgressBar now={80} label='JavaScript' />
              <ProgressBar now={70} label='JQuery' />
              <ProgressBar now={70} label='ReactJS' />
              <ProgressBar now={40} label='PHP' />
              <ProgressBar now={40} label='MySQL' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
