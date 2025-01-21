class User {
  #password;
  #login;

  static test = 10;

  constructor(firstName, lastName, login, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#login = login;
    this.#password = password;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getPassword() {
    return this.#password;
  }

  setPassword(newPassword) {
    this.#password = newPassword;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }
}

console.dir(User);
// User.test = 10;
// console.log(User.test);

const user = new User('Jose', 'Arnold', 'test@gmail.com', 'qwerty123');
console.log(user);
// console.log(user.getFullName());
// // console.log(user.#password);
// console.log(user.getPassword());
// user.setPassword('newpassword');
// console.log(user.getPassword());

// console.log(user.login);
// user.login = 'newLogin@gmail.com';
// console.log(user.login);

// const anotherUser = new User('Harold', 'McBride', 'test2@gmail.com', 'qwerty123321');
// console.log(anotherUser);
// console.log(anotherUser.getFullName());

console.log(Math);
