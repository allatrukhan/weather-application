const Router = require ("express");
const User = require("../models/User");
const {check, validationResult} = require("express-validator");
const router = new Router();

router.post("/registration", 
[
    check('firstName', "First name must be string, between 3 and 12 characters").isString().isLength({min: 3, max: 12}),
    check('lastName', "Last name must be string, between 3 and 12 characters").isString().isLength({min: 3, max: 12}),
    check('email', "Uncorrect email").isEmail(),
    check('password', "Password must be between 8 and 16 characters").isLength({min: 8, max: 16})
], 
async (request, response)=>{
    try{
      
      const errors = validationResult(request);
      if(!errors.isEmpty()){
        return response.status(400).json({message : "Uncorrect request", errors})
      }

      const {firstName, lastName, email, password} = request.body;

      const candidate = await User.findOne({email})  

      console.log(candidate);
      
      if(candidate) {
        return response.status(400).json({message : `User with email ${email} already exsists`})
      }
      
      const hashPassword = await bcrypt.hash(password, 8);
      const user = new User ({firstName, lastName, email, password: hashPassword});
      
      await user.save();
      
      return response.json({message: "User was created"});
    }
    catch (e){
        console.log(e);
        response.send({message: "Server error"});
    }
}
)

module.exports = router;