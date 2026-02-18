import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TopicPage from './pages/TopicPage'
import SubtopicPage from './pages/SubtopicPage'
import FlashcardPage from './pages/FlashcardPage'
import QuizPage from './pages/QuizPage'
import ProgressPage from './pages/ProgressPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/topic/:topicId" element={<TopicPage />} />
        <Route path="/topic/:topicId/:subtopicId" element={<SubtopicPage />} />
        <Route path="/topic/:topicId/:subtopicId/flashcards" element={<FlashcardPage />} />
        <Route path="/topic/:topicId/:subtopicId/quiz" element={<QuizPage />} />
      </Routes>
    </Layout>
  )
}
