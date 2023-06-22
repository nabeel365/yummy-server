const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 7000;

// recipie data
const recipes = require('./data/recipes.json');

// chef data
const chefs = require('./data/chefs.json');


// cors
app.use(cors());



app.get('/', (req, res) => {
    res.send('yummy eats')
});

app.get('/recipes', (req, res) => {
    res.send(recipes);
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})



// particular chef data

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chef = chefs.find(chef => chef.id === id);
    res.send(chef);
});



// particular recipie data

app.get('/recipes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const recipie = recipes.find(recipie => recipie.id === id);
    res.send(recipie);
})



app.listen(port, () => {
    console.log(`Yummy Eats is running on port: ${port}`)
})
