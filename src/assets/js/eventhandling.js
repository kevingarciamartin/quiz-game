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
        game.setQuizData(data.results);
        game.setRound();
        game.setPoints();
        ui.renderGame();
        ui.renderRound(game.getRoundQuizData());
      } else if (button.id === "next-question") {
      } else if (button.classList.contains("quit-game")) {
        ui.renderTitleScreen();
      } else if (button.classList.contains("option")) {
      }
    });
  });
})();
