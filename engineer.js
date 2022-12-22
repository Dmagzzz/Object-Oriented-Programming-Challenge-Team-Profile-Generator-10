const Employee = require ('./employee')

class Engineer extends Employee {
    #github;

    constructor(name, id, email, github) {
        super(name, id, email);
        this.#github =github;
    }

    getRole() {
        return 'engineer';
    }

    getGithub() {
        return this.#github;
    }
}

module.exports = Engineer;