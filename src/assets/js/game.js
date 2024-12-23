export const game = (() => {
  let quizData = [];
  let round = 0;
  let points = 0;

  const setQuizData = (data) => (quizData = data);

  const getRoundQuizData = () => quizData[round];

  const getRound = () => round;
  const setRound = (rd = 0) => (round = rd);
  const increaseRound = () => round++;

  const getPoints = () => points;
  const setPoints = (pts = 0) => (points = pts);
  const increasePoints = () => points++;

  return {
    setQuizData,
    getRoundQuizData,
    getRound,
    setRound,
    increaseRound,
    getPoints,
    setPoints,
    increasePoints,
  };
})();