import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'
import { getSubtopic, getTopic, getSubtopicFlashcardIds } from '../data/topics'
import { rateCard, getCardData, getDueCards } from '../utils/spaced-repetition'

export default function FlashcardPage() {
  const { topicId, subtopicId } = useParams()
  const topic = getTopic(topicId)
  const sub = getSubtopic(topicId, subtopicId)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [showRating, setShowRating] = useState(false)
  const [mode, setMode] = useState('all')
  const [refreshKey, setRefreshKey] = useState(0)

  if (!topic || !sub) {
    return (
      <div>
        <Link to="/" className="back-link"><ArrowLeft size={16} /> Back</Link>
        <h1 className="page-title">Not found</h1>
      </div>
    )
  }

  const allCards = sub.flashcards
  const cardIds = allCards.map(c => c.id)
  const dueCardIds = getDueCards(cardIds)
  const cards = mode === 'due'
    ? allCards.filter(c => dueCardIds.includes(c.id))
    : allCards

  if (cards.length === 0) {
    return (
      <div>
        <Link to={`/topic/${topicId}/${subtopicId}`} className="back-link">
          <ArrowLeft size={16} /> Back to {sub.name}
        </Link>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <p style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</p>
          <h2 style={{ marginBottom: 8 }}>
            {mode === 'due' ? 'No cards due for review!' : 'No flashcards yet'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>
            {mode === 'due' ? 'All caught up. Come back later!' : 'Content will be added soon.'}
          </p>
          {mode === 'due' && (
            <button className="btn btn-secondary" onClick={() => setMode('all')}>
              Study All Cards Instead
            </button>
          )}
        </div>
      </div>
    )
  }

  const card = cards[currentIndex] || cards[0]
  const cardData = getCardData(card.id)

  const handleFlip = () => {
    setFlipped(!flipped)
    if (!flipped) setShowRating(true)
  }

  const handleRate = (rating) => {
    rateCard(card.id, rating)
    setShowRating(false)
    setFlipped(false)
    setRefreshKey(k => k + 1)

    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setFlipped(false)
      setShowRating(false)
    }
  }

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setFlipped(false)
      setShowRating(false)
    }
  }

  return (
    <div>
      <Link to={`/topic/${topicId}/${subtopicId}`} className="back-link">
        <ArrowLeft size={16} /> Back to {sub.name}
      </Link>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 className="page-title" style={{ marginBottom: 0 }}>Flashcards</h1>
        <div className="btn-group">
          <button
            className={`btn btn-sm ${mode === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => { setMode('all'); setCurrentIndex(0); setFlipped(false); setShowRating(false); }}
          >
            All ({allCards.length})
          </button>
          <button
            className={`btn btn-sm ${mode === 'due' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => { setMode('due'); setCurrentIndex(0); setFlipped(false); setShowRating(false); }}
          >
            Due ({dueCardIds.length})
          </button>
        </div>
      </div>

      <div className="flashcard-counter">
        {currentIndex + 1} / {cards.length}
        {cardData.repetitions > 0 && (
          <span style={{ marginLeft: 12 }}>
            <span className={`badge ${cardData.repetitions >= 3 ? 'badge-success' : 'badge-neutral'}`}>
              {cardData.repetitions} reviews
            </span>
          </span>
        )}
      </div>

      <div className="flashcard-container" onClick={handleFlip}>
        <div className={`flashcard ${flipped ? 'flipped' : ''}`}>
          <div className="flashcard-face">
            <div className="flashcard-label">Question</div>
            <div className="flashcard-text">{card.front}</div>
          </div>
          <div className="flashcard-face flashcard-back">
            <div className="flashcard-label">Answer</div>
            <div className="flashcard-text">{card.back}</div>
          </div>
        </div>
      </div>

      {/* Fixed-height controls area — prevents layout shift */}
      <div className="flashcard-actions">
        {/* Rating row — always takes up space, buttons fade in */}
        <div className="flashcard-rating-wrapper">
          <div className={`flashcard-rating ${flipped && showRating ? 'visible' : ''}`}>
            <button className="rating-btn hard" onClick={(e) => { e.stopPropagation(); handleRate('hard'); }}>
              😣 Hard
            </button>
            <button className="rating-btn medium" onClick={(e) => { e.stopPropagation(); handleRate('medium'); }}>
              🤔 Medium
            </button>
            <button className="rating-btn easy" onClick={(e) => { e.stopPropagation(); handleRate('easy'); }}>
              😎 Easy
            </button>
          </div>
        </div>

        {/* Navigation — always visible */}
        <div className="flashcard-controls">
          <button className="btn btn-secondary btn-sm" onClick={handlePrev} disabled={currentIndex === 0}>
            <ChevronLeft size={16} /> Prev
          </button>
          <button className="btn btn-secondary btn-sm" onClick={handleFlip}>
            <RotateCcw size={16} /> Flip
          </button>
          <button className="btn btn-secondary btn-sm" onClick={handleNext} disabled={currentIndex === cards.length - 1}>
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
