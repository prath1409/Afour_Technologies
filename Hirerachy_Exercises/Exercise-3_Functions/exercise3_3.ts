// ======== Exercise 3.3 ========
  // For a given word, we compute its Scrabble® score.
  // Instructions:
  // • Add type annotations wherever possible

  function computeScore(word:string):number {
    const letters: string[] = word.toUpperCase().split('');
    return letters.reduce((accum:number, curr:string) => accum += getPointsFor(curr), 0);
  }

  function getPointsFor(letter:string) {
    const lettersAndPoints:[string, number][] = [
      ['AEOIULNRST', 1],
      ['DG', 2],
      ['BCMP', 3],
      ['FHVWY', 4],
      ['K', 5],
      ['JX', 8],
      ['QZ', 10],
    ];

    return lettersAndPoints.reduce((computedScore:number, pointsTuple:[string, number]) => {
      const [letters, score]:[string, number] = pointsTuple;
      if (letters.split('').find((ll) => ll === letter)) {
        return computedScore += score;
      }
      return computedScore;
    }, 0);
  }

  console.log('[Exercise 3.3]', `zoo is worth ${computeScore('zoo')} points.`);