const anagrams = [
    { clue: "ahpt", answer: "path" },
    { clue: "ghilmnot", answer: "moonlight" },
    { clue: "cartorse", answer: "orchestra" },
    { clue: "setcre", answer: "secret" },
    { clue: "rmuaina", answer: "rumania" },
    { clue: "etcasl", answer: "castle" },
    { clue: "hessa", answer: "ashes" },
    { clue: "pwdorass", answer: "password" }
  ];

  // Función para obtener un anagrama diferente cada 24 horas
function getAnagramOfTheDay() {
  const today = new Date();  // Fecha actual
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  
  // Selecciona el anagrama del día utilizando el número del día del año
  const anagramIndex = dayOfYear % anagrams.length;
  
  return anagrams[anagramIndex];
}

// Muestra el anagrama correspondiente al día
let currentAnagram = getAnagramOfTheDay();
document.getElementById('anagram').textContent = currentAnagram.clue;

function checkAnswer() {
  const userAnswer = document.getElementById('solution').value.toLowerCase();
  const messageDiv = document.getElementById('message');

  if (userAnswer === currentAnagram.answer) {
    messageDiv.innerHTML = `<p>Correct! Here's your <a href="secret-library/secret-library.html" target="_blank">secret link</a>.</p>`;
  } else {
    messageDiv.innerHTML = `<p>Incorrect. Try again.</p>`;
  }
}