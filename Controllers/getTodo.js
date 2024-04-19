const ToDo = require("../Models/Todo");

exports.getTodos = async(req,res)=>{ 
    try{
        const toDo = await ToDo.find({});
        res.status(200).json({
            success:true,
            data:toDo,
            message:"to data is fetched"
        });
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

exports.getTodoById = async(req,res)=>{ // Renamed to getTodoById
    try{
        const id = req.params.id;
        const toDo = await ToDo.findById({_id: id});
        if(!toDo){
            return res.status(404).json({
                success:false,
                message:"no data found at given id"
            });
        }
        res.status(200).json({
            success:true,
            data:toDo,
            message: `ToDo ${id} data successfully fetched`
        });
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