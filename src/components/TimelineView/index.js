// Write your code here
import './index.css'
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)
  return (
    <div className="bg-container">
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <h1>CCBP 4.0</h1>
      <div className="specialDiv">
        <Chrono
          items={timelineItemsList}
          className="chrono-container"
          mode="VERTICAL"
        >
          {timelineItemsList.map(eachItem => {
            const {categoryId} = eachItem
            if (categoryId === 'PROJECT') {
              return <ProjectTimelineCard details={eachItem} />
            }
            return <CourseTimelineCard details={eachItem} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
