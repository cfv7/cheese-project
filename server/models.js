const mongoose = require('mongoose');

const cheeseListSchema = mongoose.Schema({
  cheeseType: String
});
// this
cheeseListSchema.methods.apiRepr = function() {
  console.log(this);
  return {
    id: this._id,
    cheeseType: this.cheeseType
  };
}

const Cheese = mongoose.model('Cheese', cheeseListSchema);

module.exports = {Cheese}