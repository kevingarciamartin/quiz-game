export const ui = (() => {
  const titleScreen = document.querySelector("#title-screen");
  const game = document.querySelector("#game");
  const results = document.querySelector("#results");
  const title = document.querySelector("h1");

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
  };

  const renderResults = () => {
    titleScreen.style.display = "none";
    game.style.display = "none";
    results.style.display = "block";
  };

  return {
    renderTitleScreen,
    renderGame,
    renderResults,
  };
})();
