import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'

import { FeedbackProvider } from './context/FeedbackContext'
import FeedbackStats from './components/FeedbackStats'
import FeedbackFrom from './components/FeedbackFrom'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackFrom />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<About></About>}></Route>
          </Routes>
          <AboutIconLink></AboutIconLink>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
