// Data structure for all topics, subtopics, flashcards, and quizzes
// This is the single source of truth — add new content here

const topicsData = [
  // Example structure - will be populated with real UPSC content
  // {
  //   id: 'indian-polity',
  //   name: 'Indian Polity',
  //   icon: '🏛️',
  //   subtopics: [
  //     {
  //       id: 'fundamental-rights',
  //       name: 'Fundamental Rights',
  //       flashcards: [
  //         { id: 'fr-1', front: 'Question', back: 'Answer' },
  //       ],
  //       quiz: [
  //         {
  //           id: 'fr-q1',
  //           question: 'Which article...?',
  //           options: ['A', 'B', 'C', 'D'],
  //           correct: 0,  // index of correct option
  //           explanation: 'Because...'
  //         },
  //       ]
  //     }
  //   ]
  // }
]

export default topicsData

export function getTopic(topicId) {
  return topicsData.find(t => t.id === topicId)
}

export function getSubtopic(topicId, subtopicId) {
  const topic = getTopic(topicId)
  if (!topic) return null
  return topic.subtopics.find(s => s.id === subtopicId)
}

export function getAllFlashcardIds() {
  const ids = []
  topicsData.forEach(topic => {
    topic.subtopics.forEach(sub => {
      sub.flashcards.forEach(fc => ids.push(fc.id))
    })
  })
  return ids
}

export function getSubtopicFlashcardIds(topicId, subtopicId) {
  const sub = getSubtopic(topicId, subtopicId)
  if (!sub) return []
  return sub.flashcards.map(fc => fc.id)
}
