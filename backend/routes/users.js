var express = require('express');
var router = express.Router();
const userSerivce = require('../service/userService') 


/* 로그인 get */ 
router.post('/login', async function(req, res, next) {
    console.log("login post")

    try{
       let value = await userSerivce.getUser(req)
       console.log(value)
        
        let result ={
            name: value,
        }

        return res.status(200).json(result)
    }
    
    
    

catch(e){

    return res.status(400).json(e)
}

})


router.post('/',async function(req, res, next) {

    console.log("join post")

    try{
       await userSerivce.Insert(req)

       let msg = {
        message: "회원가입 성공하였습니다.",
    }

        
    return res.status(200).json(msg)
       
   
       
        
      
      
    }
    catch(e){

        return res.status(400).json(e)
    }





})





module.exports = router;
