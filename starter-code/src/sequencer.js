class LetterSequence {

  createSequence(sequence) {

  const characters    = sequence.split("");
  let containerString = "";
  let repeatCount     = 1;

  characters.forEach((el, i) => {
    let currentChar = characters[i];
    let prevChar    = characters[i - 1];
    let nextChar    = characters[i + 1];
  
    if (currentChar === prevChar){
      repeatCount++
    }
    if (currentChar !== nextChar && repeatCount >= 1){
      let repeats = repeatCount > 1 ? String(repeatCount) : ""
      containerString += (repeats + currentChar)
      repeatCount = 1;
    }
  })

  return containerString;
  }

  decodeSequence(sequence) {

    const characters      = sequence.split("");
    let containerString = "";

    characters.forEach((el, i) => {
    let current         = characters[i];
    let nextChar        = characters[i + 1];

    if (!isNaN(characters[i])){
      let letters = this.repeat(current, nextChar);
      containerString += letters;
    } 
    else if (isNaN(characters[i]) && isNaN(characters[i - 1])){
      containerString += characters[i]
    }
  })

  return containerString;
  }

  repeat(count, character) {
    let characters = "";
  
    if (count <= 1){
      count = 1
    }
  
    for (var i = 0; i < count; i++){
      characters += character;
    }
  
    return characters;
  }
}

module.exports = LetterSequence;