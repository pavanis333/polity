import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, HelpCircle } from 'lucide-react'
import { getSubtopic, getTopic, getSubtopicFlashcardIds } from '../data/topics'
import { getReviewStats, getBestScore, getAttemptCount, getDueCards } from '../utils/spaced-repetition'

export default function SubtopicPage() {
  const { topicId, subtopicId } = useParams()
  const topic = getTopic(topicId)
  const sub = getSubtopic(topicId, subtopicId)

  if (!topic || !sub) {
    return (
      <div>
        <Link to="/" className="back-link"><ArrowLeft size={16} /> Back</Link>
        <h1 className="page-title">Not found</h1>
      </div>
    )
  }

  const cardIds = getSubtopicFlashcardIds(topicId, subtopicId)
  const stats = getReviewStats(cardIds)
  const dueCards = getDueCards(cardIds)
  const best = getBestScore(`${topicId}/${subtopicId}`)
  const attempts = getAttemptCount(`${topicId}/${subtopicId}`)

  const flashcardsPath = `/topic/${topicId}/${subtopicId}/flashcards`
  const quizPath = `/topic/${topicId}/${subtopicId}/quiz`

  return (
    <div>
      <Link to={`/topic/${topicId}`} className="back-link">
        <ArrowLeft size={16} /> Back to {topic.name}
      </Link>

      <h1 className="page-title">{sub.name}</h1>
      <p className="page-subtitle">Part of {topic.name}</p>

      <div className="progress-stats" style={{ marginBottom: 32 }}>
        <Link to={flashcardsPath}>
          <div className="stat-card stat-card-clickable">
            <div className="stat-value">{sub.flashcards.length}</div>
            <div className="stat-label">📖 Flashcards</div>
          </div>
        </Link>
        <Link to={flashcardsPath}>
          <div className="stat-card stat-card-clickable">
            <div className="stat-value">{dueCards.length}</div>
            <div className="stat-label">🔄 Due for Review</div>
          </div>
        </Link>
        <Link to={flashcardsPath}>
          <div className="stat-card stat-card-clickable">
            <div className="stat-value">{stats.mastered}</div>
            <div className="stat-label">✅ Mastered</div>
          </div>
        </Link>
        <Link to={quizPath}>
          <div className="stat-card stat-card-clickable">
            <div className="stat-value">{best ? `${best.percentage}%` : '—'}</div>
            <div className="stat-label">📝 Best Quiz ({attempts} tries)</div>
          </div>
        </Link>
      </div>

      <div className="btn-group">
        <Link to={flashcardsPath} className="btn btn-primary">
          <BookOpen size={18} />
          {dueCards.length > 0 ? `Review ${dueCards.length} Due Cards` : 'Study Flashcards'}
        </Link>
        <Link to={quizPath} className="btn btn-secondary">
          <HelpCircle size={18} />
          Take Quiz ({sub.quiz.length} questions)
        </Link>
      </div>
    </div>
  )
}
