const Employee = require ('./employee')

class Intern extends Employee {
    #school;

    constructor(name, id, email, school) {
        super(name, id, email);
        this.#school = school;
    }

    getRole() {
        return 'engineer';
    }

    getGithub() {
        return this.#school;
    }
}

module.exports = Intern;