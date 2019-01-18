const User = require('../../models/user');


 async function getAllItems(req,res,next){
     //await fetching from db
     console.log("my secured route")
    res.send({items: "all items"});
}


module.exports = {
    getAllItems
}