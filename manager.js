const Employee = require ('./employee')

class Manager extends Employee {
    #officeNumber;

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.#officeNumber = officeNumber;
    }

    getRole() {
        return 'manager';
    }

    getGithub() {
        return this.#officeNumber;
    }
}

module.exports = Manager;