import React from 'react';
import { Link } from 'react-router-dom';

const Results = ({ results = [], questions, resetQuiz }) => {
    const correctCount = results.filter(r => r.isCorrect).length;
console.log(results);


    return (
      <div className="quizInterface">
        <h1>Quiz Results</h1>
        <p>You got {correctCount} out of {questions.length} correct.</p>
{/*   
        <ul>
          {results.map((res, index) => (
            <li key={index}>
              <strong>Q:</strong> {res.question}<br />
              <strong>Your Answer:</strong> {res.selected} <br />
              <strong>Correct Answer:</strong> {res.correct} <br />
              <span style={{ color: res.isCorrect ? 'green' : 'red' }}>
                {res.isCorrect ? 'Correct ✅' : 'Incorrect ❌'}
              </span>
              <hr />
            </li>
          ))}
        </ul> */}
  
        <Link to="/" className="backHome" onClick={resetQuiz}>Back to Home</Link>
      </div>
    );
  };
  

export default Results;
