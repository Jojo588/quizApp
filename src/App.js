import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Quiz from './pages/Quiz';
import questionList from './components/questionList';
import Results from './pages/Results';

function App() {
  const [results, setResults] = useState([]);
  // function to reset quiz
  const resetQuiz = () => {
    setResults([]);
  };

  return(
    <>
      <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/quizApp' : '/'}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="quiz" element={<Quiz questions={questionList} setResults={setResults} />} />
          <Route path="results" element={<Results results={results} questions={questionList} resetQuiz={resetQuiz} />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )

 
}
 
export default App;
