// ======== Exercise 5.3 ========
  // Goals:
  // • Explicitly make the title and salary properties publicly available
  // • Reduce class to three lines of code while maintaining functionality

  class Employee {
    //title: string;
    //salary: number;
    constructor(public title: string, public salary: number) {
    //   this.title = title;
    //   this.salary = salary;
    }
  }

  const employee = new Employee('Engineer', 100000);

  console.log('[Exercise 5.3]', `The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);
