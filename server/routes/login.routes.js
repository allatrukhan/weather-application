const Router = require ("express");
const User = require("../models/User");
const {check, validationResult} = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");
const router = new Router();

router.get("/login", 
[
    check('email', "Uncorrect email").isEmail(),
    check('password', "Password must be between 8 and 16 characters").isLength({min: 8, max: 16})
], 
async (request, response)=>{
    try{
      
        const {email, password} = request.body;
        const user = await User.findOne({email}) 
        console.log(user);
        if(!user){
            return result.status(400).json({message : "User not found"})
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if(!isPasswordValid){
            return result.status(400).json({message : "Invaild password"})
        }
        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"});
        return result.json({
            token,
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        })
    }
    catch (e){
        console.log(e);
        response.send({message: "Server error"});

    }
}
)

module.exports = router;