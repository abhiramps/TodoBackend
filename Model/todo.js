var mongoose =require('mongoose');

var Todo = mongoose.model('Todo', {
    Description: String,
    Date: String,
    Status: String,
   
})

module.exports=Todo;