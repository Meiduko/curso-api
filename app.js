const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=> {
    //req es la request, la petición
    //res es la response
    console.log(req)
    res.status(200).send('Hello World!!')
})

app.post('/login', (req, res, next)=>{ 
}, ()=>{
    res.status(200).json(
        {token: 'token_test'}
    )
    
})

app.post('/team/pokemons', (req, res) =>{
    res.status(200).send('Hello World!!')
})

app.get('/team', 
    passport.authenticate('jwt', {session: false}),
    (req, res, next)=>{
    res.status(200).send('Hello World!!')
})

app.delete('/team/pokemons/:pokeid', (req, res)=>{
    res.status(200).send('Hello World!!')
})

app.put('/team', (req, res)=>{
    res.status(200).send('Hello World!!')
})

app.listen(port, ()=>{
    console.log('Server started at port 3000')
});

exports.app = app;