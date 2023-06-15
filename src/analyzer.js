const analyzer = {
  getCharacterCount: (text) => {
    // Esta función retorna el recuento de caracteres en el parámetro `text` de tipo `string`.
    return text.length;
  },
    
  getCharacterCountExcludingSpaces: (text) => {
    // Esta función retorna el recuento de caracteres excluyendo espacios y signos de puntuación en el parámetro `text` de tipo `string`.
    const cleanedText = text.replace(/[^\w\s]/g, '');
    let count = 0;
    for (let i = 0; i < cleanedText.length; i++) {
      if (cleanedText[i] !== ' ' && cleanedText[i].trim().length !== 0 && isNaN(cleanedText[i])) {
        count++;
      }
    }
    return count;
  },
  
  getWordCount: (text) => {
    if (typeof text !== 'string') {
      return 0;
    }
    return text.split(' ').length;
  },
    
  getNumberCount: (text) => {
    // Esta función retorna la cantidad de números en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g) || [];
    let count = 0;
    numbers.forEach((number) => {
      const parsedNumber = parseFloat(number);
      if (!isNaN(parsedNumber) && isFinite(parsedNumber)) {
        count++;
      }
    });
    return count;
  },
    
  getNumberSum: (text) => {
    // Esta función retorna la suma de todos los números en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g) || [];
    let sum = 0;
    numbers.forEach((number) => {
      const parsedNumber = parseFloat(number);
      if (!isNaN(parsedNumber) && isFinite(parsedNumber)) {
        sum += parsedNumber;
      }
    });
    return sum;
  },

  getAverageWordLength: (text) => {
    // Esta función retorna la longitud media de palabras en el parámetro `text` de tipo `string`.
    const words = text.split(' ');
    const wordCount = words.length;
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    const averageLength = wordCount > 0 ? totalLength / wordCount : 0;
    return parseFloat(averageLength.toFixed(2));
  }
};

export default analyzer;

  

  