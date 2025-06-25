
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const user = new Schema({
    email: { type: String, unique: true },
    password: String,
    name: String
})
const todo = new Schema({
    title: String,
    done: {type:Boolean ,default: false},
    userId: ObjectId,
    createdAt: { type: Date, default: Date.now },
    deadline:Date
});
const userModel = mongoose.model('users', user);
const TodoModel = mongoose.model('todos', todo);


module.exports = {
    UserModel: userModel,
    TodoModel: TodoModel
};
