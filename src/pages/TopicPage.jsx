import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, HelpCircle } from 'lucide-react'
import { getTopic, getSubtopicFlashcardIds } from '../data/topics'
import { getReviewStats, getBestScore, getAttemptCount } from '../utils/spaced-repetition'

export default function TopicPage() {
  const { topicId } = useParams()
  const topic = getTopic(topicId)

  if (!topic) {
    return (
      <div>
        <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to Topics</Link>
        <h1 className="page-title">Topic not found</h1>
      </div>
    )
  }

  return (
    <div>
      <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to Topics</Link>
      <h1 className="page-title">{topic.icon} {topic.name}</h1>
      <p className="page-subtitle">{topic.subtopics.length} subtopics</p>

      <div className="card-grid">
        {topic.subtopics.map(sub => {
          const cardIds = getSubtopicFlashcardIds(topicId, sub.id)
          const stats = getReviewStats(cardIds)
          const best = getBestScore(`${topicId}/${sub.id}`)
          const attempts = getAttemptCount(`${topicId}/${sub.id}`)
          const progress = stats.total > 0 ? (stats.reviewed / stats.total) * 100 : 0

          return (
            <Link to={`/topic/${topicId}/${sub.id}`} key={sub.id}>
              <div className="card">
                <div className="card-title">{sub.name}</div>
                <div className="card-meta">
                  <span><BookOpen size={14} style={{ verticalAlign: 'middle' }} /> {sub.flashcards.length} cards</span>
                  <span><HelpCircle size={14} style={{ verticalAlign: 'middle' }} /> {sub.quiz.length} questions</span>
                </div>
                {best && (
                  <div style={{ marginTop: 8 }}>
                    <span className={`badge ${best.percentage >= 80 ? 'badge-success' : best.percentage >= 50 ? 'badge-warning' : 'badge-danger'}`}>
                      Best: {best.percentage}% ({attempts} attempts)
                    </span>
                  </div>
                )}
                <div className="card-progress">
                  <div className="card-progress-bar" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
