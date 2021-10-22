class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getName(name) {
      /* console.log(`This is the Manager ${name}`); */
      return this.name;
  }

  getId(id) {
     /*  console.log(`Employee Id: ${id}`); */
      return this.id;
  }

  getEmail(email) {
      /* console.log(`Employee email: ${email}`); */
      return this.email;
  }

  getRole(role) {
    /* console.log(`Employee email: ${role}`); */
    return 'Employee';

  }
}

module.exports = Employee;