// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    
    phrase() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }

}

class Instructor extends Person {
    constructor (attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor (attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listsSubjects() {
        return `${this.favSubjects}`
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }

}

class TeamLeader extends Instructor {
    constructor (attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }

}

// Instructors

const keiran = new Instructor({
    name: 'Keiran',
    location: 'Florida',
    age: 28,
    favLanguage: 'React',
    specialty: 'Back-end',
    catchPhrase: `Hey guys!`
  });

  console.log(keiran.favLanguage);

const brad = new Instructor({
    name: 'Brad',
    location: 'Arizona',
    age: 32,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Let's code!`
  });

  console.log(brad.age);
  console.log(brad.demo('CSS'));

//   Team Leaders

const Tim = new TeamLeader({
    name: 'Tim',
    location: 'Minnesota',
    age: 26,
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `How's it going?`,
    gradClassName: 'Web18',
    favInstructor: 'Dan',
});

console.log(Tim.catchPhrase);
console.log(Tim.standUp('webPT8'));

const elijah = new TeamLeader({
    name: 'Elijah',
    location: 'Pennsylvania',
    age: 29,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `I love to code!`,
    gradClassName: 'Web21',
    favInstructor: 'Josh',
});

console.log(elijah.gradClassName);
console.log(elijah.standUp('webPT8_sun'));

// Students

const Leon = new Student({
    name: 'Leon',
    location: 'Florida',
    age: 24,
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    className: 'WebPT8',
    previousBackground: 'EMT',
});

console.log(Leon.location);
console.log(Leon.sprintChallenge('JavaScript III'));

const Jake = new Student({
    name: 'Jake',
    location: 'Alaska',
    age: 19,
    favSubjects: ['HTML', 'Ruby', 'Java'],
    className: 'Web20',
    previousBackground: 'Chef',
});

console.log(Jake.favSubjects);
console.log(Jake.PRAssignment('Preprocessing II'));

// Persons

const dani = new Person({
    name: "Dani",
    location: "Florida",
    age: 25,
});

console.log(dani.name);

const steven = new Person({
    name: "Steven",
    location: "Florida",
    age: 25,
});

console.log(steven.age);


