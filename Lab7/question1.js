
// Question 1 - Using constructor functions and prototype-based inheritance

function Question(qid, answer) {
    this.qid = qid;
    this.answer = answer;
}

Question.prototype.checkAnswer = function(givenAnswer) {
    return this.answer === givenAnswer;
};

function Student(studentId) {
    this.studentId = studentId;
    this.answers = []; // Array of Question instances representing student answers
}

Student.prototype.addAnswer = function(question) {
    this.answers.push(question);
};

function Quiz(questionsArray, studentsArray) {
    this.questions = new Map(); // qid => correct answer
    questionsArray.forEach(q => this.questions.set(q.qid, q.answer));
    this.students = studentsArray;
}

Quiz.prototype.scoreStudentBySid = function(sid) {
    const student = this.students.find(s => s.studentId === sid);
    if (!student) return 0;

    let score = 0;
    for (let ans of student.answers) {
        const correctAnswer = this.questions.get(ans.qid);
        if (ans.checkAnswer(correctAnswer)) {
            score++;
        }
    }
    return score;
};

Quiz.prototype.getAverageScore = function() {
    const total = this.students.reduce((acc, student) => acc + this.scoreStudentBySid(student.studentId), 0);
    return total / this.students.length;
};

// Sample test
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

console.log('Score for Student 10:', quiz.scoreStudentBySid(10)); // Expected: 3
console.log('Score for Student 11:', quiz.scoreStudentBySid(11)); // Expected: 2
console.log('Average Score:', quiz.getAverageScore());           // Expected: 2.5
