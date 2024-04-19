const ToDo = require("../Models/Todo");

exports.updateTodo = async(req,res)=>{ 
    try{
        const {id} =req.params;
        const {title, description} =req.body

        const todo = await ToDo.findByIdAndUpdate(
            {_id:id},
            {title , description, updateAt: Date.now()}
        )
        res.status(200).json({
            success:true,
            data:ToDo,
            message: "data upadte succesfully"
        })

    }
      catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: error.message
        });
    }
}
