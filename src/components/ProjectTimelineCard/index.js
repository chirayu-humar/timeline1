// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {details} = props
  const {
    categoryId,
    description,
    duration,
    id,
    imageUrl,
    projectTitle,
    projectUrl,
    title,
  } = details
  return (
    <div className="projectOuter">
      <img alt="project" src={imageUrl} className="imageItem" />
      <div>
        <h1>{projectTitle}</h1>
        <p>
          <AiFillCalendar /> {duration}
        </p>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
