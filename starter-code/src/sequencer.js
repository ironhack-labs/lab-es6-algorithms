class LetterSequence {
  createSequence(sequence) {
      const characters = sequence.split("");
      let containerString = "";
      let repeatCount = 1;

      characters.forEach((element, index) => {
          let currentChar = characters[index];
          let prevChar = characters[index - 1];
          let nextChar = characters[index + 1];

          if (currentChar === prevChar) {
              repeatCount++;
          }

          // If the sequence is broken, and the repeat count is greater than 1
          // add the letter and the repeat count to the return string
          if (currentChar !== nextChar && repeatCount >= 1) {
              let repeats = repeatCount > 1 ? String(repeatCount) : "";
              containerString += (...repeats, ...currentChar);
              repeatCount = 1;
          }
      });
      return containerString;
  }
  decodeSequence(sequence) {
      let containerString = "";
      const characters = sequence.split("");

      characters.forEach((element, index) => {
          let current = characters[index];
          let nextChar = characters[index + 1];

          // If the current character is not a number, then there must be a letter after it
          if (!isNaN(characters[index])) {
              // So repeat it n times, and add it to our return value
              let letters = this._repeat(current, nextChar);
              containerString += letters;
              // If the current character is a letter, and the last character is a letter, then
              // it must be a lone letter
          } else if (isNaN(characters[index]) && isNaN(characters[index - 1])) {
              containerString += characters[index];
          }
      });
      return containerString;
  }
}

// Maybe there's a function to do this in ES6...?

LetterSequence.prototype._repeat = function(count, character) {
  var characters = "";

  if (count <= 1) {
      count = 1;
  }

  for (var i = 0; i < count; i++) {
      characters += character;
  }

  return characters;
};

module.exports = LetterSequence;
