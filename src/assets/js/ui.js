import { replaceHTMLCharacters } from "./util";

export const ui = (() => {
  const titleScreen = document.querySelector("#title-screen");
  const game = document.querySelector("#game");
  const results = document.querySelector("#results");
  const title = document.querySelector("h1");
  const progressBarElements = document.querySelectorAll(
    ".progress-bar-element"
  );
  const nextQuestion = document.querySelector("#next-question");
  const question = document.querySelector("#question");
  const options = document.querySelectorAll(".option");
  const points = document.querySelector("#points");
  const rounds = document.querySelector("#rounds");

  const renderTitleScreen = () => {
    titleScreen.style.display = "flex";
    game.style.display = "none";
    results.style.display = "none";
    title.style.fontSize = "4rem";
  };

  const renderGame = () => {
    titleScreen.style.display = "none";
    game.style.display = "flex";
    results.style.display = "none";
    title.style.fontSize = "clamp(2rem, 3vw + 0.5rem, 5rem)";
    progressBarElements.forEach((element) => {
      element.classList.remove("correct");
      element.classList.remove("incorrect");
    });
  };

  const renderRound = (data) => {
    const quizQuestion = replaceHTMLCharacters(data.question);
    question.textContent = `${quizQuestion}`;

    for (let i = 0; i < options.length; i++) {
      const quizOption = replaceHTMLCharacters(data.options[i]);
      options[i].textContent = quizOption;
      resetOption(options[i]);
    }

    disableNextQuestion();
    enableOptions();
  };

  const enableOptions = () => {
    options.forEach((option) => (option.disabled = false));
  };

  const disableOptions = () => {
    options.forEach((option) => (option.disabled = true));
  };

  const renderCorrectOption = (
    isCorrect,
    selectedButton,
    correctButton = null
  ) => {
    selectedButton.classList.add("selected");
    isCorrect
      ? selectedButton.classList.add("correct")
      : selectedButton.classList.add("incorrect");
    if (correctButton !== null) correctButton.classList.add("correct");
  };

  const resetOption = (option) => {
    option.classList.remove("selected");
    option.classList.remove("correct");
    option.classList.remove("incorrect");
  };

  const enableNextQuestion = () => (nextQuestion.disabled = false);

  const disableNextQuestion = () => (nextQuestion.disabled = true);

  const updateProgressBar = (round, isCorrect) => {
    isCorrect
      ? progressBarElements[round].classList.add("correct")
      : progressBarElements[round].classList.add("incorrect");
  };

  const renderResults = (points, rounds) => {
    titleScreen.style.display = "none";
    game.style.display = "none";
    results.style.display = "flex";

    renderScore(points, rounds)
  };

  const renderScore = (pts, rds) => {
    points.textContent = pts;
    rounds.textContent = rds;
  };

  return {
    renderTitleScreen,
    renderGame,
    renderRound,
    enableOptions,
    disableOptions,
    renderCorrectOption,
    enableNextQuestion,
    disableNextQuestion,
    updateProgressBar,
    renderResults,
  };
})();
