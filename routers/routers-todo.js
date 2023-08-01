const express = require(`express`)
const router = express.Router()
const todoControllers = (`../controllers/crud-todo`)

// router.get(`/`, todoControllers.get)
// router.get('/:id', todoControllers.getById)
// router.post('/create', todoControllers.create)
// router.patch('/update/:id', todoControllers.update)
// router.delete('/delete/:id',todoControllers.delete)

//Get
router.get("/", (req, res) => {
  todoControllers.find((err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

//GetForId
router.get("/:id", (req, res) =>{
  todoControllers.find({_id: req.body.id}, (err, result) => {
    if (err) throw new Error(err);
    res.end(result)
  });
});

//Post
router.post("/create", (req, res) => {
  todoControllers.create(
    req.body, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

//Delete
router.delete("/delete/", (req, res) => {
  todoControllers.findOneAndRemove({ _id: req.body.id }, (err, result) => {
    if (err) throw new Error(err);
    res.end(result);
  });
});

// Put
router.put("/update/:id", (req, res) => {
  todoControllers.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
    if(err) throw new Error(err);
    res.json(result);
  });
});

module.exports = router


