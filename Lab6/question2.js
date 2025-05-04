// Question 2: Constructor Function
function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = [];
}

Student.prototype.inputNewGrade = function(newGrade) {
  this.grades.push(newGrade);
};

Student.prototype.computeAverageGrade = function() {
  const sum = this.grades.reduce((acc, val) => acc + val, 0);
  return this.grades.length ? sum / this.grades.length : 0;
};

const s1 = new Student("Carol", "Taylor");
s1.inputNewGrade(75);
s1.inputNewGrade(85);

const s2 = new Student("David", "Brown");
s2.inputNewGrade(90);
s2.inputNewGrade(95);

const studentArray = [s1, s2];
const combinedGrades = studentArray.flatMap(s => s.grades);
const avgAll = combinedGrades.reduce((sum, g) => sum + g, 0) / combinedGrades.length;

console.log("Average of all students:", avgAll);
