// ======== Exercise 4.2 ========
  // Instructions:
  // • Use a type guard to fill out the body of the `padLeft` function.

  function padLeft(value: string, padding: number | string): string {
    if(typeof padding==='number')
        return `${Array(padding+1).join(' ')}${value}`;
    else
        return padding+value;
  }

  console.log('[Exercise 4.2]', `
    ${padLeft('🐕', 0)}
    ${padLeft('🐕', '🐩')}
    ${padLeft('🐕', '🐩🐩')}
    ${padLeft('🐕', '🐩🐩🐩')}
    ${padLeft('🐕', '🐩🐩🐩🐩')}
  `);