const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 7000;

// recipie data
const recipes = require('./data/recipes-info.json');

// chef data
const chefs = require('./data/chefs-info.json');

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



app.listen(port, () => {
    console.log(`Yummy Eats is running on port: ${port}`)
})
