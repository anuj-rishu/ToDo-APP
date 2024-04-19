const ToDo = require("../Models/Todo");

exports.deleteTodo = async(req,res)=>{ 
    try{
        const {id} = req.params;
        await ToDo.findByIdAndDelete(id)
        res.json({
            success:true,
            message: "Todo deleted"  
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