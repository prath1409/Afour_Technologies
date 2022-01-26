// ======== Exercise 5.6 ========
  // Goals:
  // • Eliminate the error without changing references to `Student.school`

  class Student {
    public school: string = 'Harry Herpson High School';
    constructor(private name: string) {};
    introduction() {
      console.log('[Exercise 5.6]', `Hi, my name is ${this.name} and I attend ${this.school}`);
    }
  }

  const student = new Student('Morty');
  console.log(student.school);
  student.introduction();

