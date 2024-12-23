export const ui = (() => {
  const titleScreen = document.querySelector("#title-screen");
  const game = document.querySelector("#game");
  const results = document.querySelector("#results");
  const title = document.querySelector("h1");
  const progressBarElements = document.querySelectorAll(
    ".progress-bar-element"
  );
  const question = document.querySelector("#question");
  const options = document.querySelectorAll(".option");

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
    let quizQuestion = data.question;
    quizQuestion = quizQuestion.replaceAll("&quot;", '"');
    quizQuestion = quizQuestion.replaceAll("&#039;", "'");
    quizQuestion = quizQuestion.replaceAll("&eacute;", "é");
    question.textContent = `${quizQuestion}`;

    for (let i = 0; i < options.length; i++) {
      options[i].textContent = data.options[i];
    }
  };

  const renderResults = () => {
    titleScreen.style.display = "none";
    game.style.display = "none";
    results.style.display = "block";
  };

  return {
    renderTitleScreen,
    renderGame,
    renderRound,
    renderResults,
  };
})();
