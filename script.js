class SklTracker {
    constructor() {
        this.classes = [];
        this.currentClass = null;
    }

    addClass(className) {
        const newClass = { name: className, homework: [], assessments: [] };
        this.classes.push(newClass);
        this.currentClass = newClass;
        this.updateDisplay();
    }

    addHomework(homeworkName) {
        if (this.currentClass) {
            this.currentClass.homework.push(homeworkName);
            this.updateDisplay();
        }
    }

    addAssessment(assessmentName) {
        if (this.currentClass) {
            this.currentClass.assessments.push(assessmentName);
            this.updateDisplay();
        }
    }

    updateDisplay() {
        const classInfoElement = document.getElementById('classInfo');
        if (this.currentClass) {
            const classContent = `
                <h2>Class: ${this.currentClass.name}</h2>
                <h3>Homework:</h3>
                <ul>${this.currentClass.homework.map(item => `<li>${item}</li>`).join('')}</ul>
                <h3>Assessments:</h3>
                <ul>${this.currentClass.assessments.map(item => `<li>${item}</li>`).join('')}</ul>
            `;
            classInfoElement.innerHTML = classContent;
        } else {
            classInfoElement.innerHTML = '<p>No class selected.</p>';
        }
    }
}

const sklTracker = new SklTracker();

function addClass() {
    const className = prompt('Enter class name:');
    if (className) {
        sklTracker.addClass(className);
    }
}

function addHomework() {
    const homeworkName = prompt('Enter homework name:');
    if (homeworkName) {
        sklTracker.addHomework(homeworkName);
    }
}

function addAssessment() {
    const assessmentName = prompt('Enter assessment name:');
    if (assessmentName) {
        sklTracker.addAssessment(assessmentName);
    }
}
