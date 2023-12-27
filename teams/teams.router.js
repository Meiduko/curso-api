const express = require('express');
const router = express.Router();
const axios = require('axios').default;

const teamsController = require('./teams.controller');
const { getUser } = require('../auth/users.controller');

router.route('/')
    .get((req, res) => {
        let user = getUser(req.user.userId);
        res.status(200).json({
            trainer: user.userName,
            team: teamsController.getTeamOfUser(req.user.userId)
        })
    })
    .put((req, res) => {
        teamsController.setTeam(req.user.userId, req.body.team);
        res.status(200).send();
    })

router.route('/pokemons')
    .post((req, res) => {
        let pokemonName = req.body.name;
        console.log('calling pokeapi');
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
            .then(function (response){
                //handle success
                let pokemon = {
                    name: pokemonName,
                    pokedexNumber: response.data.id
                }
                teamsController.addPokemon(req.user.userId, pokemon);
                res.status(201).send(pokemon);
            })
            .catch(function (error) {
                //handle error
                res.status(400).json({message: error});
                console.log(error);
            })
            .then(function (){
                //always executed
            })
    })

router.route('/pokemons/:pokeid')
    .delete((req, res) => {
        teamsController.deletePokemon(req.user.userId, req.params.pokeid);
        res.status(200).send('Hello World!')
    })

exports.router = router;