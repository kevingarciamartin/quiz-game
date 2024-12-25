import { ui } from "./ui";
import { api } from "./api";
import { game } from "./game";

export const eventhandling = (() => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      if (button.id === "play") {
        const data = await api.getQuizData();
        console.log(data.results);
        game.initGame(data.results);
        ui.renderGame();
        ui.renderRound(game.getRoundQuizData());
      } else if (button.id === "next-question") {
        if (game.isFinished()) {
          ui.renderResults(game.getPoints(), game.getRound() + 1);
        } else {
          game.increaseRound();
          ui.renderRound(game.getRoundQuizData());
        }
      } else if (button.classList.contains("quit-game")) {
        ui.renderTitleScreen();
      } else if (button.classList.contains("option")) {
        const correctAnswer = game.getCorrectAnswer();
        const isCorrect = button.textContent === correctAnswer;

        if (isCorrect) {
          game.increasePoints();
          ui.renderCorrectOption(isCorrect, button);
        } else {
          let correctOption;
          const options = document.querySelectorAll(".option");
          options.forEach((option) => {
            if (option.textContent === correctAnswer) {
              correctOption = option;
            }
          });
          ui.renderCorrectOption(isCorrect, button, correctOption);
        }

        ui.updateProgressBar(game.getRound(), isCorrect);
        ui.enableNextQuestion();
        ui.disableOptions();
      }
    });
  });
})();
