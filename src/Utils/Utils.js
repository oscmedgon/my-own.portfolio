import projcts from './projects.json'
import personalData from './personalData.json'

function ProjectsListNav () {
  const source = projcts.slice(0, 5)
  const projects = JSON.stringify(source)
  return JSON.parse(projects)
}
function ProjectsListHome () {
  const source = projcts.slice(0, 10)
  const projects = JSON.stringify(source)

  return JSON.parse(projects)
}
function ProjectsList () {
  const projects = JSON.stringify(projcts)
  return JSON.parse(projects)
}
function PersonalData () {
  const data = JSON.stringify(personalData)
  return JSON.parse(data)
}
export {ProjectsListNav, ProjectsListHome, ProjectsList, PersonalData}
