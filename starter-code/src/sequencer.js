class LetterSequence {

  static _repeat(count, character) {
    return character.repeat(count);
  }

  createSequence(sequence) {

    let characters      = sequence.split('');
    let containerString = '';
    let repeatCount     = 1;

    for (let i = 0; i < characters.length; i++){

      let currentChar, prevChar, nextChar;
      [currentChar, prevChar, nextChar] = [characters[i], characters[i - 1], characters[i + 1]];

      if (currentChar === prevChar){
        repeatCount++;
      }

      // If the sequence is broken, and the repeat count is greater than 1
      // add the letter and the repeat count to the return string
      if (currentChar !== nextChar && repeatCount >= 1){
        let repeats = repeatCount > 1 ? String(repeatCount) : '';
        containerString += (repeats + currentChar);
        repeatCount = 1;
      }
    }

    return containerString;

  }

  decodeSequence(sequence) {

    let containerString = '';
    let characters      = sequence.split('');

    for (let i = 0; i < characters.length; i++){

      let current, nextChar;
      [current, nextChar] = [characters[i], characters[i + 1]];

      // If the current character is not a number, then there must be a letter after it
      if (!isNaN(characters[i])){
        // So repeat it n times, and add it to our return value
        let letters = LetterSequence._repeat(current, nextChar);
        containerString += letters;
      // If the current character is a letter, and the last character is a letter, then
      // it must be a lone letter
      } else if (isNaN(characters[i]) && isNaN(characters[i - 1])){
        containerString += characters[i];
      }
    }

    return containerString;
  }
}

/*
const sequence = new LetterSequence();
console.log(sequence.createSequence("aabbccabbca"));
// => 2a2b2ca2bca
console.log(sequence.createSequence("aabbcc"));
// => "2a2b2c"
console.log(sequence.createSequence("aabbbcc"));
console.log(sequence.decodeSequence("2a2b2ca2bca"));
// => aabbccabbca
console.log(sequence.decodeSequence("2a2b2c"));
// => aabbcc
console.log(sequence.decodeSequence("2a3b2c"));
// => aabbbcc*/


module.exports = LetterSequence;
