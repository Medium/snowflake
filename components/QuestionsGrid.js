import type { Tracks, TrackId } from '../constants'
import QuestionGroup from './QuestionGroup'


type Props = {
  trackIds: Array,
  tracks: Tracks,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

function QuestionsGrid({trackIds, tracks, handleMileStoneChangeFn}) {
  return (
    trackIds.map((trackId, trackIndex) => {
      return (
        <div key={trackIndex} className='quiz-section'>
          <h1 className='quiz-section-heading'>{tracks[trackId].longDisplayName}</h1>
          <QuestionGroup
            trackId={trackId}
            trackIndex={trackIndex}
            questions={tracks[trackId].questions}
            handleMileStoneChangeFn={(track, question, milestone) => handleMileStoneChangeFn(track, question, milestone)} />
          </div>
        )
      }
    )
  )
}

export default QuestionsGrid
