export function sortArray(array) {
  return array.sort((a, b) => {
    if (typeof a === "string" && typeof b === "string") {
      return a.localeCompare(b);
    } else if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else {
      const strA = String(a);
      const strB = String(b);
      return strA.localeCompare(strB);
    }
  });
}
