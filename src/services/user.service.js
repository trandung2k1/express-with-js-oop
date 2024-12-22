'use strict';
const UserRepository = require('../repositories/user.repository');

class UserService extends UserRepository {
  constructor(model) {
    super(model);
  }

  async findAllUser() {
    return this.findAll();
  }
}

module.exports = UserService;
