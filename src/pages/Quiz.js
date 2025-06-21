import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Quiz = ({ questions, setResults }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const navigate = useNavigate();

  // Shuffle questions only once on mount
  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, [questions]);

  const currentQuestion = shuffledQuestions[currentIndex];

  const chooseAnswer = (optionKey) => {
    setSelectedAnswer(optionKey);
    setIsAnswered(true);

    const isCorrect = currentQuestion.options[optionKey] === currentQuestion.correctAnswer;

    // Save result
    setResults(prev => [
      ...prev,
      {
        questionId: currentQuestion.id,
        question: currentQuestion.question,
        selected: currentQuestion.options[optionKey],
        correct: currentQuestion.correctAnswer,
        isCorrect,
      },
    ]);
  };

  const handleNext = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsAnswered(false);
      setSelectedAnswer(null);
    } else {
      navigate('/results');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedAnswer(shuffledQuestions[currentIndex - 1].selectedAnswer || null);
      setIsAnswered(shuffledQuestions[currentIndex - 1].selectedAnswer !== undefined);
    }
  };

  const getOptionClass = (optionKey) => {
    if (selectedAnswer === optionKey) return 'selected';
    return '';
  };

  if (shuffledQuestions.length === 0) return <p>Loading questions...</p>;

  return (
    <div className='quizInterface'>
      <h1>Question {currentIndex + 1}</h1>
      <p>{currentQuestion.question}</p>
      <ul>
        {Object.entries(currentQuestion.options).map(([key, value]) => (
          <li
            key={key}
            onClick={() => chooseAnswer(key)}
            className={getOptionClass(key)}
            style={{
              backgroundColor: selectedAnswer === key ? 'lightseagreen' : 'transparent',
              color: selectedAnswer === key ? 'white' : 'black'
            }}
          >
            {key.toUpperCase()}. {value}
          </li>
        ))}
      </ul>
      <div className='buttons'>
        {currentIndex > 0 ? (
          <button onClick={handlePrev}>Previous</button>
        ) : (
          <Link to="/" className="back" onClick={() => {
            alert('You Are Going Back To The Home Page!!!');
          }}>Back</Link>
        )}
        {currentIndex === shuffledQuestions.length - 1 ? (
          <button onClick={handleNext} style={{ color: 'green', backgroundColor: 'white', fontWeight: 'bolder' }}>Finish</button>
        ) : (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
