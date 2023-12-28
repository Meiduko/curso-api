let teamsDatabase = {};

const cleanUpTeam = () => {
    return new Promise ((resolve, reject) =>{
        for(let user in teamsDatabase){
            teamsDatabase[user] = [];
        }
        resolve();
    })
}

const bootstrapTeam = (userId) =>{
    teamsDatabase[userId] = [];
}

const getTeamOfUser = (userId) =>{
    return new Promise((resolve, reject) => {
        resolve(teamsDatabase[userId]);
    });
}

const addPokemon = (userId, pokemon) => {
    return new Promise((resolve, reject) => {
        if (teamsDatabase[userId].length == 6) {
            reject('Already have 6 pokemon');
        } else {
            teamsDatabase[userId].push(pokemon);
            resolve();
        }
    });
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