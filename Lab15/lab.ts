// lab.ts

// Question 01
function describePerson(person: { name: string; age: number; isStudent: boolean }): string {
  return `${person.name} is ${person.age} years old and ${person.isStudent ? "is" : "is not"} a student.`;
}

console.log(describePerson({ name: "Alice", age: 25, isStudent: true }));

// Question 02
function secondLargest(arr: number[]): number | undefined {
  let max = -Infinity;
  let second = -Infinity;

  for (const num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }

  return second !== -Infinity ? second : undefined;
}

console.log(secondLargest([20, 120, 111, 215, 54, 78])); // 120

// Question 03
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15

// Question 04
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

console.log(combined); // [1,2,3,4,5,6]

// Question 05
class StudentSimple {
  name: string;
  age: number;
  level: string;

  constructor(name: string, age: number, level: string) {
    this.name = name;
    this.age = age;
    this.level = level;
  }

  introduce(): string {
    return `Hi, I'm ${this.name}, a ${this.level} student and I'm ${this.age} years old.`;
  }
}

const studentSimple = new StudentSimple("John", 20, "100 level");
console.log(studentSimple.introduce());

// Question 06 - Converted from Lab 7 (Quiz, Student, Question)

class Question {
  qid: number;
  answer: string;

  constructor(qid: number, answer: string) {
    this.qid = qid;
    this.answer = answer;
  }

  checkAnswer(answer: string): boolean {
    return this.answer === answer;
  }
}

class Student {
  studentId: number;
  answers: Question[] = [];

  constructor(studentId: number) {
    this.studentId = studentId;
  }

  addAnswer(question: Question): void {
    this.answers.push(question);
  }
}

class Quiz {
  questions: Map<number, string>;
  students: Student[];

  constructor(questions: Question[], students: Student[]) {
    this.questions = new Map<number, string>();
    questions.forEach((q) => this.questions.set(q.qid, q.answer));
    this.students = students;
  }

  scoreStudentBySid(sid: number): number {
    const student = this.students.find((s) => s.studentId === sid);
    if (!student) return 0;

    let score = 0;
    for (const ans of student.answers) {
      const correctAnswer = this.questions.get(ans.qid);
      if (correctAnswer && ans.checkAnswer(correctAnswer)) {
        score++;
      }
    }

    return score;
  }

  getAverageScore(): number {
    const total = this.students.reduce((sum, student) => sum + this.scoreStudentBySid(student.studentId), 0);
    return this.students.length ? total / this.students.length : 0;
  }
}

// Sample data for Question 6
const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];

const quiz = new Quiz(questions, students);

console.log(quiz.scoreStudentBySid(10)); // 3
console.log(quiz.scoreStudentBySid(11)); // 2
console.log(quiz.getAverageScore());     // 2.5