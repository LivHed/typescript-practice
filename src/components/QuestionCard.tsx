import React from 'react';

// because of typescript I have to type the props here, (can be called something else than Props too)
type Props = {
  question: string;
  answer: string[]; // meaning an array of strings
  callback: any;
  userAnswer: string;
  questionNr: number;
  totalQuestions: number;
}

// This says that from React we have something called FC, which is the types from React itself, 
// it will tell typescript that this is a functional component. And inside I specify that I want to use the Props created above.
// structure out/specify the props inside the brackets, to be able to use them inside the component.
const QuestionCard: React.FC<Props> = ({
  question, 
  answer, 
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (  
<div>Question Card</div>
);

export default QuestionCard;