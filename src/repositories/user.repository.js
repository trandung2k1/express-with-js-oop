'use strict';

class UserRepository {
  #model;
  constructor(model) {
    this.#model = model;
  }
  findAll() {
    return this.#model.find().lean();
  }
}

module.exports = UserRepository;
