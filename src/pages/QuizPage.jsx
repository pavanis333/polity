import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, RotateCcw } from 'lucide-react'
import { getSubtopic, getTopic } from '../data/topics'
import { saveQuizScore } from '../utils/spaced-repetition'

export default function QuizPage() {
  const { topicId, subtopicId } = useParams()
  const topic = getTopic(topicId)
  const sub = getSubtopic(topicId, subtopicId)

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])

  if (!topic || !sub) {
    return (
      <div>
        <Link to="/" className="back-link"><ArrowLeft size={16} /> Back</Link>
        <h1 className="page-title">Not found</h1>
      </div>
    )
  }

  const questions = sub.quiz

  if (questions.length === 0) {
    return (
      <div>
        <Link to={`/topic/${topicId}/${subtopicId}`} className="back-link">
          <ArrowLeft size={16} /> Back to {sub.name}
        </Link>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <p style={{ fontSize: '3rem', marginBottom: '16px' }}>📝</p>
          <h2>No quiz questions yet</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Content will be added soon.</p>
        </div>
      </div>
    )
  }

  const q = questions[currentQ]
  const progress = ((currentQ + (answered ? 1 : 0)) / questions.length) * 100

  const handleSelect = (idx) => {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    const isCorrect = idx === q.correct
    if (isCorrect) setScore(s => s + 1)
    setAnswers(a => [...a, { question: currentQ, selected: idx, correct: q.correct, isCorrect }])
  }

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      const finalScore = score
      saveQuizScore(`${topicId}/${subtopicId}`, finalScore, questions.length)
      setFinished(true)
    }
  }

  const handleRestart = () => {
    setCurrentQ(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
    setFinished(false)
    setAnswers([])
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div>
        <Link to={`/topic/${topicId}/${subtopicId}`} className="back-link">
          <ArrowLeft size={16} /> Back to {sub.name}
        </Link>
        <div className="quiz-score">
          <h2>{pct >= 80 ? '🎉 Excellent!' : pct >= 50 ? '👍 Good effort!' : '📚 Keep studying!'}</h2>
          <div className="score-value">{pct}%</div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 32 }}>
            You got {score} out of {questions.length} correct
          </p>

          {/* Review wrong answers */}
          {answers.filter(a => !a.isCorrect).length > 0 && (
            <div style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto 32px' }}>
              <h3 style={{ marginBottom: 16, color: 'var(--danger)' }}>Review Mistakes:</h3>
              {answers.filter(a => !a.isCorrect).map((a, i) => {
                const quest = questions[a.question]
                return (
                  <div key={i} style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: 16,
                    marginBottom: 12
                  }}>
                    <p style={{ fontWeight: 600, marginBottom: 8 }}>{quest.question}</p>
                    <p style={{ color: 'var(--danger)', fontSize: '0.9rem' }}>
                      Your answer: {quest.options[a.selected]}
                    </p>
                    <p style={{ color: 'var(--success)', fontSize: '0.9rem' }}>
                      Correct: {quest.options[a.correct]}
                    </p>
                    {quest.explanation && (
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: 8 }}>
                        {quest.explanation}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={handleRestart}>
              <RotateCcw size={18} /> Try Again
            </button>
            <Link to={`/topic/${topicId}/${subtopicId}`} className="btn btn-secondary">
              Back to {sub.name}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Link to={`/topic/${topicId}/${subtopicId}`} className="back-link">
        <ArrowLeft size={16} /> Back to {sub.name}
      </Link>

      <div className="quiz-container">
        <div className="quiz-progress">
          <div className="quiz-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 8 }}>
          Question {currentQ + 1} of {questions.length}
        </div>

        <div className="quiz-question">{q.question}</div>

        <div className="quiz-options">
          {q.options.map((opt, idx) => {
            let className = 'quiz-option'
            if (answered) {
              className += ' disabled'
              if (idx === q.correct) className += ' correct'
              else if (idx === selected && idx !== q.correct) className += ' wrong'
            } else if (idx === selected) {
              className += ' selected'
            }

            return (
              <button key={idx} className={className} onClick={() => handleSelect(idx)}>
                <strong style={{ marginRight: 8, color: 'var(--text-muted)' }}>
                  {String.fromCharCode(65 + idx)}.
                </strong>
                {opt}
              </button>
            )
          })}
        </div>

        {answered && q.explanation && (
          <div className="quiz-explanation">
            <strong>Explanation:</strong> {q.explanation}
          </div>
        )}

        {answered && (
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <button className="btn btn-primary" onClick={handleNext}>
              {currentQ < questions.length - 1 ? 'Next Question →' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
