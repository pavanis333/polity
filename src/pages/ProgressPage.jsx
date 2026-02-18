import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import topicsData, { getSubtopicFlashcardIds, getAllFlashcardIds } from '../data/topics'
import { getReviewStats, getQuizScores, getBestScore, getAttemptCount } from '../utils/spaced-repetition'

export default function ProgressPage() {
  const allCardIds = getAllFlashcardIds()
  const allStats = getReviewStats(allCardIds)
  const quizScores = getQuizScores()

  // Count total quiz attempts
  let totalAttempts = 0
  let totalQuizScore = 0
  let totalQuizQuestions = 0
  Object.values(quizScores).forEach(attempts => {
    totalAttempts += attempts.length
    attempts.forEach(a => {
      totalQuizScore += a.score
      totalQuizQuestions += a.total
    })
  })

  const overallQuizPct = totalQuizQuestions > 0 ? Math.round((totalQuizScore / totalQuizQuestions) * 100) : 0

  return (
    <div>
      <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to Topics</Link>
      <h1 className="page-title">📊 Progress Dashboard</h1>
      <p className="page-subtitle">Track your revision progress</p>

      <div className="progress-stats">
        <div className="stat-card">
          <div className="stat-value">{allStats.total}</div>
          <div className="stat-label">Total Flashcards</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{allStats.reviewed}</div>
          <div className="stat-label">Reviewed</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{allStats.mastered}</div>
          <div className="stat-label">Mastered (3+ reviews)</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{totalAttempts}</div>
          <div className="stat-label">Quiz Attempts</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{overallQuizPct}%</div>
          <div className="stat-label">Avg Quiz Score</div>
        </div>
      </div>

      {topicsData.length === 0 ? (
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: 40 }}>
          No topics added yet. Progress will appear here once you start studying.
        </p>
      ) : (
        <div>
          {topicsData.map(topic => (
            <div key={topic.id} style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: 16 }}>{topic.icon} {topic.name}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {topic.subtopics.map(sub => {
                  const ids = getSubtopicFlashcardIds(topic.id, sub.id)
                  const stats = getReviewStats(ids)
                  const best = getBestScore(`${topic.id}/${sub.id}`)
                  const attempts = getAttemptCount(`${topic.id}/${sub.id}`)
                  const cardPct = stats.total > 0 ? Math.round((stats.reviewed / stats.total) * 100) : 0

                  return (
                    <Link to={`/topic/${topic.id}/${sub.id}`} key={sub.id}>
                      <div style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '14px 18px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.2s',
                      }}>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{sub.name}</div>
                          <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: 4 }}>
                            {stats.reviewed}/{stats.total} cards · {stats.mastered} mastered
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <span className={`badge ${cardPct >= 80 ? 'badge-success' : cardPct > 0 ? 'badge-warning' : 'badge-neutral'}`}>
                            {cardPct}% cards
                          </span>
                          {best ? (
                            <span className={`badge ${best.percentage >= 80 ? 'badge-success' : best.percentage >= 50 ? 'badge-warning' : 'badge-danger'}`}>
                              {best.percentage}% quiz
                            </span>
                          ) : (
                            <span className="badge badge-neutral">No quiz</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
