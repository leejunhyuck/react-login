var models = require("../models")



module.exports = {


    Insert:async function(req){
           
        const body=req.body;
        
        try{
       let result = await models.User.create({
            
           userid:body.userid,
           password:body.userpw,
           name:body.name
           

        })
    
        return result;
    }catch(e){

        console.log("insert error")
        throw "insert error"
    }


       
    },


    getUser: async function(req){

   

        try{
            console.log(req.body.userid)
            let user = await models.User.findOne({

                where: {
                    userid:req.body.userid,
                    password:req.body.userpw
                  }
            })
           
             return user.dataValues.name
            
            
    
        }catch(e){
    
            console.log("get Error")
            throw res.status(400)
        }
    
    
    }
    








}


