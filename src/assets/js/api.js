import { ui } from "./ui";

export const api = (() => {
  const baseURL = "https://opentdb.com/api.php";
  const params = {
    amount: 10,
    type: "multiple",
  };

  const getQuizData = async () => {
    const url = `${baseURL}?${new URLSearchParams(params)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      ui.renderError(
        "Network error when attempting to fetch quiz data. Please check your internet connection and try again."
      );
      return null;
    }
  };

  return {
    getQuizData,
  };
})();
