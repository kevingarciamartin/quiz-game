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

export function replaceHTMLCharacters(string) {
  string = string.replaceAll("&quot;", '"');
  string = string.replaceAll("&#039;", "'");
  string = string.replaceAll("&eacute;", "é");
  string = string.replaceAll("&amp;", "&");
  string = string.replaceAll("&rsquo;", "’");
  string = string.replaceAll("&ldquo;", "“");
  return string;
}
