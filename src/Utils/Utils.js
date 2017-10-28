import json from './projects.json'

function ProjectsListNav () {
  const source = json.slice(0, 5)
  const projects = JSON.stringify(source)
  console.log(projects)
  return JSON.parse(projects)
}
function ProjectsListHome () {
  const source = json.slice(0, 10)
  const projects = JSON.stringify(source)
  console.log(projects)
  return JSON.parse(projects)
}
function ProjectsList () {
  const projects = JSON.stringify(json)
  console.log(projects)
  return JSON.parse(projects)
}
export {ProjectsListNav, ProjectsListHome, ProjectsList}
