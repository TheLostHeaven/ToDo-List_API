const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    todo: {
      type: String,
      required: true,
      maxLength: 50
    }
})


module.exports = mongoose.model("todo", TodoSchema)

