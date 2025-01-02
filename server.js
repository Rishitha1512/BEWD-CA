const express = require('express')
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    const { username, email, password, DOB} = req.body;

    const regex = /^[a-zA-Z0-9]+$/

    if (!regex.test(username)){
        return res.json({error: "Invalid username format"})
    }

    const regex1 = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/

    if (!regex.test(email)){
        return res.json({error: "Invalid email format"})
    }

    const regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!regex2.test(password)){
        return res.json({error: "Password should contain at least one uppercase letter, one lowercase letter, one number and one special character"})
    }

    if(DOB < 18){
        return res.json({error: "User must be 18 or older"})
    }
    return res.send("User Created")
})

port = 3000;
app.listen(port,()=>{console.log('http://localhost:3000')})
