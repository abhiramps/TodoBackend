var express = require('express');
var router = express.Router();
var Todo = require('../Model/todo')

router.post('/', async (req, res) => {
  const data = new Todo({    //it is used to add data to db
    Description: req.body.Description,
    Date: req.body.Date,
    Status: req.body.Status,
  });
  await data.save();
  
  // return { message: "item added to list", details: data }
  res.send({ message: "item added to list", details: data })
})

router.get('/',(req,res)=>{
  Todo.find()
  .then((response)=>{
    // return 
    res.send(response)
  })
})

router.patch('/:id', async (req,res)=>{
  await Todo.findOneAndUpdate({
    _id:req.params.id
  },req.body.payload)
  res.send("item updated")
})
module.exports = router;
