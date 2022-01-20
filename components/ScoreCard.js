import PropTypes from 'prop-types'
import Link from 'next/link'
import useScoreDelete from '../lib/useScoreDelete'
import { getUserId } from '../lib/userAuth'

const CONFIRM_MESSAGE = 'Are you sure you want to delete the score?'

const ScoreCard = ({ id, playedAt, totalScore, userId, userName, home }) => {
  const { deleteScore } = useScoreDelete(id, userId)
  return (
    <div className="flex flex-row p-3 my-4 shadow-md lg:w-1/3 md:w-1/2">
      <div className="w-5/6">
        <div className="italic text-gray-400">
          {playedAt}
        </div>
        <div>
          {home ?
            <Link href={`golfers/${userId}`}>
              <a className="no-underline hover:underline ...">{`${userName}`}</a>
            </Link>
            : `${userName}`
          }
          {` posted a score of ${totalScore}`}
        </div>
      </div>
      <div className="w-1/6">
        <div className="flex items-center justify-center h-full w-full">
          {getUserId() === userId && (
            <span
              className="cursor-pointer"
              onClick={() => confirm(CONFIRM_MESSAGE) && deleteScore()}
            >
              ❌
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ScoreCard
