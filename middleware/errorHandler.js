const { constants } = require("../constant");

const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode ? res.statusCode:500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title:"Validation faild",
            message:err.message,
            stackTrace:err.stack})

            break;
        case constants.NOT_FOUND:
            res.json({title:"Not found",
            message:err.message,
            stackTrace:err.stack})

        case constants.UNAUTHORIZED:
            res.json({
                title:"Unnauthorized",
            message:err.message,
            stackTrace:err.stack})

        case constants.FORBIDDEN:
            res.json({title:"forbbiden",
            message:err.message,
            stackTrace:err.stack})

        case constants.SERVER_ERROR:
            res.json({title:"server error",
            message:err.message,
            stackTrace:err.stack})
        default:
            console.log("No error,All good");
            break;
    }
};
module.exports=errorHandler;