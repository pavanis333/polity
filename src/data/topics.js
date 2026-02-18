// Data structure for all topics, subtopics, flashcards, and quizzes
// This is the single source of truth — add new content here

const topicsData = [
  {
    id: 'making-of-indian-constitution',
    name: 'Making of the Indian Constitution',
    icon: '🏛️',
    subtopics: [
      {
        id: 'important-dates-constituent-assembly',
        name: 'Important Dates of Constituent Assembly',
        flashcards: [
          {
            id: 'mic-dates-1',
            front: 'When was the first sitting of the Constituent Assembly held? Who boycotted it?',
            back: '9th December 1946. The Muslim League boycotted the first sitting.'
          },
          {
            id: 'mic-dates-2',
            front: 'Who was elected as the President of the Constituent Assembly and on what date?',
            back: 'Dr. Rajendra Prasad was elected as President on 11th December 1946.'
          },
          {
            id: 'mic-dates-3',
            front: 'Who became the temporary chairman of the Constituent Assembly and why?',
            back: 'Dr. Sachidanand Sinha, as the oldest member, became the temporary chairman.'
          },
          {
            id: 'mic-dates-4',
            front: 'Who were the Vice-Presidents of the Constituent Assembly?',
            back: 'H.C. Mukherjee and V.T. Krishnamachari.'
          },
          {
            id: 'mic-dates-5',
            front: 'Who introduced the Objective Resolution and on what date?',
            back: 'Jawaharlal Nehru introduced the Objective Resolution on 13th December 1946.'
          },
          {
            id: 'mic-dates-6',
            front: 'When was the Objective Resolution adopted?',
            back: '22nd January 1947.'
          },
          {
            id: 'mic-dates-7',
            front: 'When was the National Flag adopted by the Constituent Assembly?',
            back: '22nd July 1947.'
          },
          {
            id: 'mic-dates-8',
            front: 'When did the transfer of power establish the dominions of India and Pakistan?',
            back: '15th August 1947 for India, 14th August 1947 for Pakistan.'
          },
          {
            id: 'mic-dates-9',
            front: 'When did the Constituent Assembly ratify India\'s membership in the Commonwealth?',
            back: 'May 1949.'
          },
          {
            id: 'mic-dates-10',
            front: 'When was the Constitution of India adopted/enacted?',
            back: '26th November 1949.'
          },
          {
            id: 'mic-dates-11',
            front: 'What happened on 24th January 1950?',
            back: 'The National Song and National Anthem were adopted. Dr. Rajendra Prasad was elected as the first President of India. The final session of the Constituent Assembly was held.'
          },
          {
            id: 'mic-dates-12',
            front: 'When did the Constitution of India come into force?',
            back: '26th January 1950 — marking the establishment of India as a Republic.'
          },
          {
            id: 'mic-dates-13',
            front: 'Until when did the Constituent Assembly continue as the provisional Parliament?',
            back: 'Until the formation of the new Parliament in May 1952.'
          },
          {
            id: 'mic-dates-14',
            front: 'Who created the artwork for the Preamble? What inspired him?',
            back: 'Beohar Rammanohar Sinha. He was inspired by his visits to Ajanta, Ellora, Sanchi, and Mahabalipuram. He used motifs like lotus, peacock, and mythic symbols.'
          },
          {
            id: 'mic-dates-15',
            front: 'Distinguish between 26th November 1949 and 26th January 1950.',
            back: '26th November 1949: Constitution was adopted/enacted. 26th January 1950: Constitution came into force (Republic Day).'
          },
        ],
        quiz: [
          {
            id: 'mic-dates-q1',
            question: 'When was the first sitting of the Constituent Assembly held?',
            options: ['9th December 1946', '11th December 1946', '13th December 1946', '26th January 1947'],
            correct: 0,
            explanation: 'The first sitting of the Constituent Assembly was held on 9th December 1946. The Muslim League boycotted it.'
          },
          {
            id: 'mic-dates-q2',
            question: 'Who was the temporary chairman of the Constituent Assembly?',
            options: ['Dr. Rajendra Prasad', 'Jawaharlal Nehru', 'Dr. Sachidanand Sinha', 'H.C. Mukherjee'],
            correct: 2,
            explanation: 'Dr. Sachidanand Sinha, being the oldest member, was made the temporary chairman of the Constituent Assembly.'
          },
          {
            id: 'mic-dates-q3',
            question: 'The Objective Resolution was introduced by:',
            options: ['Dr. Rajendra Prasad', 'Dr. B.R. Ambedkar', 'Jawaharlal Nehru', 'Sardar Vallabhbhai Patel'],
            correct: 2,
            explanation: 'Jawaharlal Nehru introduced the Objective Resolution on 13th December 1946.'
          },
          {
            id: 'mic-dates-q4',
            question: 'When was the Objective Resolution adopted?',
            options: ['13th December 1946', '22nd January 1947', '22nd July 1947', '26th November 1949'],
            correct: 1,
            explanation: 'The Objective Resolution was introduced on 13th December 1946 but adopted on 22nd January 1947.'
          },
          {
            id: 'mic-dates-q5',
            question: 'The National Flag was adopted by the Constituent Assembly on:',
            options: ['15th August 1947', '22nd July 1947', '26th January 1950', '24th January 1950'],
            correct: 1,
            explanation: 'The National Flag was adopted on 22nd July 1947, before Independence Day.'
          },
          {
            id: 'mic-dates-q6',
            question: 'The Constitution of India was adopted on:',
            options: ['26th January 1950', '15th August 1947', '26th November 1949', '24th January 1950'],
            correct: 2,
            explanation: '26th November 1949 is when the Constitution was adopted/enacted. It came into force on 26th January 1950.'
          },
          {
            id: 'mic-dates-q7',
            question: 'Who were the Vice-Presidents of the Constituent Assembly?',
            options: [
              'Dr. Sachidanand Sinha and H.C. Mukherjee',
              'H.C. Mukherjee and V.T. Krishnamachari',
              'V.T. Krishnamachari and Jawaharlal Nehru',
              'Dr. Rajendra Prasad and H.C. Mukherjee'
            ],
            correct: 1,
            explanation: 'H.C. Mukherjee and V.T. Krishnamachari served as Vice-Presidents of the Constituent Assembly.'
          },
          {
            id: 'mic-dates-q8',
            question: 'Who created the artwork for the Preamble of the Indian Constitution?',
            options: ['Nandalal Bose', 'Beohar Rammanohar Sinha', 'Ram Kinkar Baij', 'Abanindranath Tagore'],
            correct: 1,
            explanation: 'Beohar Rammanohar Sinha created the Preamble\'s artwork, inspired by Ajanta, Ellora, Sanchi, and Mahabalipuram.'
          },
          {
            id: 'mic-dates-q9',
            question: 'Which group boycotted the first sitting of the Constituent Assembly?',
            options: ['Indian National Congress', 'Communist Party', 'Muslim League', 'Hindu Mahasabha'],
            correct: 2,
            explanation: 'The Muslim League boycotted the first sitting of the Constituent Assembly on 9th December 1946.'
          },
          {
            id: 'mic-dates-q10',
            question: 'When was the National Anthem and National Song adopted?',
            options: ['26th January 1950', '26th November 1949', '24th January 1950', '15th August 1947'],
            correct: 2,
            explanation: 'The National Song and National Anthem were adopted on 24th January 1950, two days before the Constitution came into force.'
          },
          {
            id: 'mic-dates-q11',
            question: 'The Constituent Assembly continued as the provisional Parliament until:',
            options: ['26th January 1950', 'May 1952', 'August 1950', 'January 1952'],
            correct: 1,
            explanation: 'The Constituent Assembly continued as the provisional Parliament of India until the formation of the new Parliament in May 1952.'
          },
          {
            id: 'mic-dates-q12',
            question: 'When did the Constituent Assembly ratify India\'s membership in the Commonwealth?',
            options: ['January 1949', 'May 1949', 'August 1949', 'November 1949'],
            correct: 1,
            explanation: 'In May 1949, the Constituent Assembly ratified India\'s membership in the Commonwealth.'
          },
        ]
      }
    ]
  }
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
