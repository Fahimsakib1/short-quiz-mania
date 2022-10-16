export const LoadQuizData = async () => {
    const LoadQuizData = await fetch ('https://openapi.programming-hero.com/api/quiz');
    const QuizData = await LoadQuizData.json();
    return QuizData;
}