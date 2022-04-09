module.exports = class {
  constructor(model) {
    this.model = model;
  }

  create(doc) {
    return this.model.create(doc);
  }

  find() {
    return this.model.find().lean();
  }
};
