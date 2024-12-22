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
      throw new Error(error);
    }
  };

  return {
    getQuizData,
  };
})();
