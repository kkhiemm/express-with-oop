module.exports = class {
  async find() {
    return this.repository.find();
  }

  async create(doc) {
    return this.repository.create(doc);
  }
};
