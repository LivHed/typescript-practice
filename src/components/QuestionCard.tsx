import React from 'react';

// because of typescript I have to type the props here, (can be called something else than Props too)
type Props = {
  question: string;
  answers: string[]; // meaning an array of strings
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
}

// This says that from React we have something called FC, which is the types from React itself, 
// it will tell typescript that this is a functional component. And inside I specify that I want to use the Props created above.
// structure out/specify the props inside the brackets, to be able to use them inside the component.
// In the wrapper div we're displaying which question we're currently on. grab the questionNr and totalQuestions from the props, 
// setting the html with the dangerouslySetInnerHTML,
// and mapping through the answers, and create an inline arrow function and use the impicit return with the paranthesis.
// and wraps the button inside of a div which will be disabled depending on if the user has answered something, (set this to true or false later on..)
// and the span will get the text in html format set with dangerouslySetInnerHTML, where we receive the answer.
const QuestionCard: React.FC<Props> = ({
  question, 
  answers, 
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (  
<div>
  <p className="number">
     Question: {questionNr} / {totalQuestions}
  </p>
  <p dangerouslySetInnerHTML={{ __html: question}} />
  <div>
    {answers.map(answer => (
      <div>
        <button disabled={userAnswer} onClick={callback}>
          <span dangerouslySetInnerHTML={{ __html: answer}} />
        </button>
      </div>
    ))}
  </div>
</div>
);

export default QuestionCard;