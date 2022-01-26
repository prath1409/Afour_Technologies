// ======== Exercise 4.0 ========
  // TypeScript is intelligent about the possible types of a variable,
  // depending on the code path.
  // Instructions:
  // • Simply inspect the possible types by hovering over `text` to see
  //   how the inferred type changes if assumptions can be safely made
  //   about the possible types within the given code path.

  function trimmedLength1(text: string | null | undefined) {
    text; // text: string | null | undefined

    if (typeof text === 'string') {
      text; // text: string

      return text.trim().length;
    }

    text; // text: null | undefined
  }

  function trimmedLength2(text: string | null | undefined) {
    text; // text: string | null | undefined

    if (typeof text === 'string') {
      text; // text: string

      return text.trim().length;
    } else if (text == null) {
      text; // text: null | undefined (remember == coerces undefined)

      return;
    }

    text; // text: never
  }

  function trimmedLength3(text: string | null | undefined) {
    if (text) {
      return text.trim().length;
    }

    text; // text: string | null | undefined (because '' == false)
  }

  function trimmedLength4(text: string | null | undefined) {
    if (!text) {
      text;
      return;
    }

    return text.trim().length; // text: string
  }

  function trimmedLength5(text: any) {
    text; // text: any

    if (typeof text === 'string') {
      return text.trim().length; // text: string
    }

    text; // text: any (note how TS does not subtract types from `any`)
  }

  console.log('[Exercise 4.0]', `${trimmedLength1("   hi     ")}`);