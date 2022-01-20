import Layout from '../../components/Layout'
import ScorePostWidget from '../../components/ScorePostWidget'
import ScoreCard from '../../components/ScoreCard'
import { useRouter } from 'next/router'
import useGolferScores from '../../lib/useGolferScores'

export default function GolferScores() {
  const router = useRouter()
  const id = router.query.id
  const { data, error } = useGolferScores(id)
  let name
  let scores
  if (data) {
    name = data.name
    scores = data.scores
  }
  return (
    <Layout>
      <>
        {error ? (
          error
        ) : (
          <>
            <ScorePostWidget id={id}/>
            {scores && scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={score.user_id}
                userName={name}
              />
            ))}
          </>
        )}
      </>
    </Layout>
  )
}
