// ======== Exercise 2.4 ========
  // The purpose of this exercise is simply to illustrate a use of `readonly`

  interface UserSchema {
    readonly id: number;
    name: string;
  }

  class User implements UserSchema {
    constructor(public name: string, readonly id: number) {}
  }

  const user = new User('Dog', 1);

  console.log(user.id); // readable

  user.name = 'Harold'; // writable
  //user.id = 5; // not writable

  console.log(`User:`, user);