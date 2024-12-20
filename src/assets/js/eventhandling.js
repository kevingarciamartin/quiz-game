import { ui } from "./ui";

export const eventhandling = (() => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id === "play") {
        ui.renderGame();
      } else if (button.id === "next-question") {
      } else if (button.classList.contains("quit-game")) {
        ui.renderTitleScreen();
      } else if (button.classList.contains("option")) {
      }
    });
  });
})();
