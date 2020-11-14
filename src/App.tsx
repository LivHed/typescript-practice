import React, {useState} from 'react';
import {fetchQuizQuestions} from './API';
// Components
import QuestionCard from './components/QuestionCard';
// Types 
import {Difficulty} from './API';

// API keep here atm: https://opentdb.com/api.php?amount=10&type=multiple

const App = () => {

  const TOTAL_QUESTIONS = 10;

  // The initial states for the app.
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  //the state for which questionnumber the user is currently on.
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  // to keep track on when the game is finnished.
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  // The function that will be fired off when the quiz is started. The API call will be made from this function.
  const startTrivia = async () => {

  }

  // The function that will be triggered when the user selects an answer. the function will take the event, that is specified as mouse event, (specified type for typescript)
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }
  // The function that will trigger when the user click for the next question.
  const nextQuestion = () => {

  }


  return (
      <div className="App">
        <h1>React Quiz</h1>
        <button className="start" onClick={startTrivia}>
          Start
        </button>
        <p className="score">Score:</p>
        <p>Loading Questions..</p>
      {/*  <QuestionCard 
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined } // check if there is some answers in the userAnsers state, and if there is we can grab the correct answer by specifying the number. : Otherwise we just give it undefined. 
          callback={checkAnswer}
      /> */}
        <button className="next" onClick={nextQuestion}>
      Next Question 
        </button>
      </div>
  );

}

export default App;
