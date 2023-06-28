const express = require('express');
const path = require('path');
const app = express();
const pokemons = require('./pokemon.json');
const fs = require("fs")

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { pokemons });
});

app.get('/pokemon/:Nr', (req, res) => {
  const Nr = req.params.Nr;
  const pokemon = pokemons.find(p => p.Nr === Nr);
  if (!pokemon) {
    res.send('Pokemon not found');
    return;
  }
  res.render('pokemon.pug', { pokemon: pokemon });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
