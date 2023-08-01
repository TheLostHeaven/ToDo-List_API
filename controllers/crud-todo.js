const Todo = require(`../models/todo`)

const todoControllers = {
create: async (req,res) => {
  try {
      const todo = req.body.todo
      await Todo.create ({
        todo : todo
      })
      res.json({msg:'Created'})

    } catch (error) {
      return res.status(500).json ({msg:error.message})
    }

  },

get: async (req,res) => {
  try {
      const todo = await Todo.find({})

      res.json(
        todo
        )
    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
  },

getById: async (req,res) => {
  try {
        const {id} = req.params
        const todo = await Todo.findById(id)
        res.json(
          todo
          )
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
},

update: async (req,res) =>{
  try{
      const {id} = req.params
      const todo = req.body.Todo
      await Todo.findByIdAndUpdate(id,{
        todo : todo
      })
      res.json({msg:'Updated'})
  }catch(error){
      console.error(error)
      return res.status(500).json({msg:error.message})
  }
},

delete: async (req,res)=>{
  try {
      const {id} = req.params
      await Todo.findByIdAndDelete(id)
      res.json({msg:'Deleted'})
  } catch (err) {
      console.error(err)
      return res.status(500).json({msg:err.message})
  }
},

}




// const todoControllers = {

  //CRUD Get ToDo
  // getTodo: async (req, res) =>{
  //   try{
  //     const todo = await Todo.find({})
  //       res.json(todo)
  //   } catch(error){
  //     return res.status(500).json({msg:error.message})
  //   }
  // },
  //CRUD Get For Id ToDo
  // getTodoById: async (req,res) =>{
  //     try {
  //         const {id} = req.params
  //         const todo = await Todo.findById(id)
  //         res.json(todo)

  //     } catch (error) {
  //         return res.status(500).json({msg:error.message})
  //     }
  // },



//}






//CRUD Create Todo
// const controllerTodo = {
  //   create : async (req, res) =>{
    //     try{
      //       const todo = req.body.todo
      //       await Todo.create({

//       })
//     }
//   }
// }







module.exports = todoControllers
