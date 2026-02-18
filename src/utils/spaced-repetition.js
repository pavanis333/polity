// Spaced repetition utilities using SM-2 algorithm (simplified)
// Data stored in localStorage

const STORAGE_KEY = 'upsc_revision_data'

export function getStorageData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function saveStorageData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

// Get card review data
export function getCardData(cardId) {
  const data = getStorageData()
  return data[cardId] || {
    ease: 2.5,
    interval: 0,      // days
    repetitions: 0,
    nextReview: 0,     // timestamp
    lastRating: null,
  }
}

// Update card based on rating: 'hard' (0), 'medium' (3), 'easy' (5)
export function rateCard(cardId, rating) {
  const data = getStorageData()
  const card = data[cardId] || {
    ease: 2.5,
    interval: 0,
    repetitions: 0,
    nextReview: 0,
    lastRating: null,
  }

  const ratingMap = { hard: 0, medium: 3, easy: 5 }
  const q = ratingMap[rating] ?? 3

  if (q < 3) {
    // Reset
    card.repetitions = 0
    card.interval = 1
  } else {
    if (card.repetitions === 0) {
      card.interval = 1
    } else if (card.repetitions === 1) {
      card.interval = 3
    } else {
      card.interval = Math.round(card.interval * card.ease)
    }
    card.repetitions += 1
  }

  card.ease = Math.max(1.3, card.ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)))
  card.nextReview = Date.now() + card.interval * 24 * 60 * 60 * 1000
  card.lastRating = rating
  card.lastReviewed = Date.now()

  data[cardId] = card
  saveStorageData(data)
  return card
}

// Get cards due for review (nextReview <= now)
export function getDueCards(cardIds) {
  const now = Date.now()
  return cardIds.filter(id => {
    const card = getCardData(id)
    return card.nextReview <= now
  })
}

// Get review stats for a set of cards
export function getReviewStats(cardIds) {
  const now = Date.now()
  let reviewed = 0
  let due = 0
  let mastered = 0 // 3+ successful repetitions

  cardIds.forEach(id => {
    const card = getCardData(id)
    if (card.repetitions > 0) reviewed++
    if (card.nextReview <= now && card.repetitions > 0) due++
    if (card.nextReview > now && card.repetitions === 0) due++ // never reviewed = due
    if (card.repetitions === 0) due++
    if (card.repetitions >= 3) mastered++
  })

  return { total: cardIds.length, reviewed, due, mastered }
}

// Quiz score tracking
const QUIZ_KEY = 'upsc_quiz_scores'

export function getQuizScores() {
  try {
    const raw = localStorage.getItem(QUIZ_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function saveQuizScore(subtopicId, score, total) {
  const scores = getQuizScores()
  if (!scores[subtopicId]) scores[subtopicId] = []
  scores[subtopicId].push({
    score,
    total,
    percentage: Math.round((score / total) * 100),
    timestamp: Date.now()
  })
  localStorage.setItem(QUIZ_KEY, JSON.stringify(scores))
}

export function getBestScore(subtopicId) {
  const scores = getQuizScores()
  const attempts = scores[subtopicId] || []
  if (attempts.length === 0) return null
  return attempts.reduce((best, a) => a.percentage > best.percentage ? a : best, attempts[0])
}

export function getAttemptCount(subtopicId) {
  const scores = getQuizScores()
  return (scores[subtopicId] || []).length
}
