
export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard',
}

// specify how many questions we want to grab with the parameter amount, 
// and specify the parameter difficulty with the enum Difficulty - which will make sure that difficulty can only use the specified values.
export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    
}