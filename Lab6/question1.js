// Question 1: Object Literal
const studentPrototype = {
  inputNewGrade: function(newGrade) {
    this.grades.push(newGrade);
  },
  computeAverageGrade: function() {
    const sum = this.grades.reduce((acc, val) => acc + val, 0);
    return this.grades.length ? sum / this.grades.length : 0;
  }
};

const student1 = Object.create(studentPrototype);
student1.firstName = "Alice";
student1.lastName = "Smith";
student1.grades = [80, 90];

const student2 = Object.create(studentPrototype);
student2.firstName = "Bob";
student2.lastName = "Johnson";
student2.grades = [70, 85, 90];

const students = [student1, student2];

// Compute overall average
const allGrades = students.flatMap(s => s.grades);
const overallAvg = allGrades.reduce((sum, g) => sum + g, 0) / allGrades.length;
console.log("Overall Average:", overallAvg);
