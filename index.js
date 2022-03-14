const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/' , (req,res)=> {
    res.json({
        message: 'Welcome to the Api'
    });
});

app.post('/api/posts' ,verifyToken, (req ,res) => {
    res.json({
      message: 'Post created'
    });
});

app.post('/api/login' , (req ,res) => {

    const user = {
        id: 1,
        username: 'michoma',
        email:'michomapeter67@gmail.com'
    }
    jwt.sign({user: user}, 'secretkey' , (err, token) =>{res.json({token})});
});

function verifyToken(req ,res ,next){
    const bearerHeader = req.headers[authorization];
    if(typeof bearerHeader !== 'undefined'){

    }else{
        res.sendStatus(403);
    }

}
app.listen(5000, () => console.log ('Server started on port 5000')); 
