let teamsDatabase = {};
const cleanUpTeam = () => {
    for(let user in teamsDatabase){
        teamsDatabase[user] = [];
    }
}

const bootstrapTeam = (userId) =>{
    teamsDatabase[userId] = [];
}

const getTeamOfUser = (userId) =>{
    return teamsDatabase[userId]
}

const addPokemon = (userId, pokemon) => {
    teamsDatabase[userId].push(pokemon);
}
const deletePokemon = (userId, index) =>{
    if(teamsDatabase[userId][index]) {
        teamsDatabase[userId].splice(index, 1)
    }
}

const setTeam = (userId, team) => {
    teamsDatabase[userId] = team;
}

exports.bootstrapTeam = bootstrapTeam;
exports.addPokemon = addPokemon;
exports.deletePokemon = deletePokemon;
exports.setTeam = setTeam;
exports.getTeamOfUser = getTeamOfUser;
exports.cleanUpTeam = cleanUpTeam;