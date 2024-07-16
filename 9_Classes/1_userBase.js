class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map((element) => {
      return element.getName();
    });
  }

  getIntroductions() {
    return this.users.map((element) => {
      return element.getIntroduction();
    });
  }
}

module.exports = { UserBase };
