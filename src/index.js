import analyzer from './analyzer.js';

// Escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

const userInput = document.querySelector('textarea[name="user-input"]');
userInput.addEventListener('keyup', textAnalyzer);

function textAnalyzer() {
  const textarea = document.querySelector('textarea[name="user-input"]');
  const getWordCount = analyzer.getWordCount(textarea.value);
  const getCharacterCount = analyzer.getCharacterCount(textarea.value);
  const getCharacterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(textarea.value);
  const getAverageWordLength = analyzer.getAverageWordLength(textarea.value);
  const getNumberCount = analyzer.getNumberCount(textarea.value);
  const getNumberSum = analyzer.getNumberSum(textarea.value);
  document.querySelector('.getWordcount').innerHTML = getWordCount;
  document.querySelector('.getCharacterCount').innerHTML = getCharacterCount;
  document.querySelector('.getCharacterCountExcludingSpaces').innerHTML = getCharacterCountExcludingSpaces;
  document.querySelector('.getAverageWordLength').innerHTML = getAverageWordLength;
  document.querySelector('.getNumberCount').innerHTML = getNumberCount;
  document.querySelector('.getNumberSum').innerHTML = getNumberSum;
}

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
  userInput.value = '';
  updateMetrics();
});

function updateMetrics() {
  // Código para calcular y mostrar las métricas
}

