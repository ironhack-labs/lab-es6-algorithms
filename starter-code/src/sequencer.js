class LetterSequence{}

LetterSequence.createSequence = (sequence)=>{
  const characters      = [...sequence];
  let containerString = "";
  let repeatCount     = 1;

  for (let i = 0; i < characters.length; i++){
    let [prevChar, currentChar, nextChar] = [characters[i - 1], characters[i], characters[i + 1]];

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
};

LetterSequence.decodeSequence = function(sequence){
  let containerString = "";
  const characters = [...sequence];

  for (let i = 0; i < characters.length; i++){
    let [prevChar, current, nextChar] = [characters[i - 1],characters[i],characters[i + 1]];

    // If the current character is not a number, then there must be a letter after it
    if (!isNaN(current)){
      // So repeat it n times, and add it to our return value
      const letters = this._repeat(current, nextChar);
      containerString += letters;
    // If the current character is a letter, and the last character is a letter, then
    // it must be a lone letter
  } else if (isNaN(current) && isNaN(prevChar)){
      containerString += current;
    }
  }

  return containerString;
};

// Maybe there's a function to do this in ES6...?

LetterSequence._repeat = (count, character)=>{
  var characters = "";

  if (count <= 1){
    count = 1;
  }

  for (var i = 0; i < count; i++){
    characters += character;
  }

  return characters;
};

module.exports = LetterSequence;
