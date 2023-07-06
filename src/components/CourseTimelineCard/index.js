// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {details} = props
  const {
    categoryId,
    courseTitle,
    description,
    duration,
    id,
    tagsList,
    title,
  } = details
  return (
    <div className="courseOuter">
      <div className="rowDiv">
        <h1>{courseTitle}</h1>
        <p>
          <AiFillClockCircle />
          {duration}
        </p>
      </div>
      <p>{description}</p>
      <ul className="specialList">
        {tagsList.map(eachItem => (
          <li className="listElement" id={eachItem.id}>
            <p>{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
