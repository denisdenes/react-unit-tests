export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetters = secretWord.split('');
  const guessedLetterSet = new Set(guessedWord.split(''));

  // count how many letters the sets have in common
  return secretLetters.filter(letter => guessedLetterSet.has(letter)).length;
}
