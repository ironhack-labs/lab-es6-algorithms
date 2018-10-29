class LetterSequence {

  createSequence(sequence) {
    let characters = sequence.split("");
    let containerString = "";
    let repeatCount = 1;

    for (let i = 0; i < characters.length; i++) {
      let [prevChar, currentChar, nextChar] = [
        characters[i - 1],
        characters[i],
        characters[i + 1]
      ];

      if (currentChar === prevChar) {
        repeatCount++
      }

      // If the sequence is broken, and the repeat count is greater than 1
      // add the letter and the repeat count to the return string
      if (currentChar !== nextChar && repeatCount >= 1) {
        const repeats = repeatCount > 1 ? String(repeatCount) : ""
        containerString += (repeats + currentChar)
        repeatCount = 1;
      }
    }

    return containerString;
  }

  decodeSequence(sequence) {
    let containerString = "";
    let characters = sequence.split("");

    for (let i = 0; i < characters.length; i++) {
      const current = characters[i];
      const nextChar = characters[i + 1];

      // If the current character is not a number, then there must be a letter after it
      if (!isNaN(characters[i])) {
        // So repeat it n times, and add it to our return value
        // const letters = this._repeat(current, nextChar);
        let letters = nextChar.repeat(current)
        containerString += letters;
        // If the current character is a letter, and the last character is a letter, then
        // it must be a lone letter
      } else if (isNaN(characters[i]) && isNaN(characters[i - 1])) {
        containerString += characters[i]
      }
    }

    return containerString;
  }
}


module.exports = LetterSequence;
