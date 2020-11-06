import React from 'react';
// Components
import QuestionCard from './components/QuestionCard';

const App = () => {

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
        <button className="start" onclick={startTrivia}>
          Start
        </button>
        <p className="score">Score:</p>
        <p>Loading Questions..</p>
        <QuestionCard />
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      </div>
  );

}

export default App;
