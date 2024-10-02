onst result = ["CHANGE", "this", "array", "BY", "ThE", "RESULT", "oF", "youR", "FUNCTION", "TO", "test", "IT", "OUT"];

function capitalize(wordsArray) {
  return wordsArray.map(function(word) {
    return word.toUpperCase();
  });
}

console.log(capitalize(result));

// Définir displayResult si nécessaire
function displayResult(capitalizedWords) {
  console.log("Resultat final : ", capitalizedWords.join(', '));
}
