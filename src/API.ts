
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answer: string[]; 
  question: string;
  type: string;
}

// To be able to have the correct_answer and the incorrect_answer in the same array, to show in the UI.
// this type const specifies that, grab the Question created above, and add a new created property answers, 
// which will be an array of strings. 
// So this will use the types from the Question, but add this new answers property to it, and create this
// QuestionState type instead. 
export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard',
}

// specify how many questions we want to grab with the parameter amount, 
// and specify the parameter difficulty with the enum Difficulty - which will make sure that difficulty can only use the specified values.
// in the endpint const I'm making sure that you can change the amount and difficulty. 
// the await const will await the fetch itself and then await when its converted to json. 
export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `http://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json()
    console.log(data);
}