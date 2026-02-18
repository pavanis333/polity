import { Link } from 'react-router-dom'
import topicsData from '../data/topics'
import { getSubtopicFlashcardIds } from '../data/topics'
import { getReviewStats } from '../utils/spaced-repetition'

export default function Home() {
  return (
    <div>
      <h1 className="page-title">📚 Topics</h1>
      <p className="page-subtitle">Choose a topic to start revising</p>

      {topicsData.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
          <p style={{ fontSize: '3rem', marginBottom: '16px' }}>📖</p>
          <p style={{ fontSize: '1.1rem', marginBottom: '8px' }}>No topics added yet</p>
          <p style={{ fontSize: '0.9rem' }}>Content will appear here once source data is provided</p>
        </div>
      ) : (
        <div className="card-grid">
          {topicsData.map(topic => {
            const totalCards = topic.subtopics.reduce((sum, sub) => sum + sub.flashcards.length, 0)
            const totalQuizzes = topic.subtopics.reduce((sum, sub) => sum + sub.quiz.length, 0)

            let totalReviewed = 0
            let totalFlashcards = 0
            topic.subtopics.forEach(sub => {
              const ids = getSubtopicFlashcardIds(topic.id, sub.id)
              const stats = getReviewStats(ids)
              totalReviewed += stats.reviewed
              totalFlashcards += stats.total
            })
            const progress = totalFlashcards > 0 ? (totalReviewed / totalFlashcards) * 100 : 0

            return (
              <Link to={`/topic/${topic.id}`} key={topic.id} className="card-link">
                <div className="card">
                  <div className="card-title">
                    {topic.icon} {topic.name}
                  </div>
                  <div className="card-meta">
                    <span>{topic.subtopics.length} subtopics</span>
                    <span>{totalCards} cards</span>
                    <span>{totalQuizzes} questions</span>
                  </div>
                  <div className="card-progress">
                    <div className="card-progress-bar" style={{ width: `${progress}%` }} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
