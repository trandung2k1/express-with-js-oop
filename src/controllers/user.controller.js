'use strict';
class UserController {
  #service;
  constructor(service) {
    this.#service = service;
  }

  async findAllUser() {
    return await this.#service.findAllUser();
  }
}

module.exports = UserController;
