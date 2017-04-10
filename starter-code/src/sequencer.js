/*jshint esversion: 6*/

class LetterSequence{

static createSequence (sequence){
  const characters      = sequence.split("");
  let containerString = "";
  let repeatCount     = 1;

  for (let i = 0; i < characters.length; i++){

    let [currentChar, prevChar, nextChar ] = characters;

    if (currentChar === prevChar){
      repeatCount++;
    }

    // If the sequence is broken, and the repeat count is greater than 1
    // add the letter and the repeat count to the return string
    if (currentChar !== nextChar && repeatCount >= 1){
      let repeats = repeatCount > 1 ? String(repeatCount) : "";
      containerString += (repeats + currentChar);
      repeatCount = 1;
    }
  }

  return containerString;
}

static decodeSequence (sequence){
  let containerString = "";
  const characters      = sequence.split("");

  for (let i = 0; i < characters.length; i++){

    let [current, nextChar] = characters;

    // If the current character is not a number, then there must be a letter after it
    if (!isNaN(characters[i])){
      // So repeat it n times, and add it to our return value
      let letters = this.repeat(current, nextChar);
      containerString += letters;
    // If the current character is a letter, and the last character is a letter, then
    // it must be a lone letter
    } else if (isNaN(characters[i]) && isNaN(characters[i - 1])){
      containerString += characters[i];
    }
  }
  
  return containerString;
}

// Maybe there's a function to do this in ES6...?

static repeat(count, character){
  let characters = "";

  if (count <= 1){
    count = 1;
  }

  for (let i = 0; i < count; i++){
    characters += character;
  }

  return characters;
}
}
module.exports = LetterSequence;
