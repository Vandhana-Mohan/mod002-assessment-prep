/**
 * DON'T TOUCH THE LINES BELOW!!!
 */
 const songs = require("../data/songs");
 const { nums, words } = require("../data/data");
 const pokemon = require("../data/poke");
 const movies = require("../data/movies");
 const moreMovies = require("../data/alternative-movies");
 const dinosaurs = require("../data/dinosaurs");
 // The lines above connect the data stored in the 'data' folder to this file.  

 /**
 * findTheLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  findTheLongestDinosaur(dinosaurs);
 *  OUTPUT -> // { Brachiosaurus: 98.43 }
 */
 const findTheLongestDinosaur = (dinosaurs) => {};

/**
 * findTheShortestDinosaur()
 * ---------------------
 * Returns an object with the shortest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  findTheShortestDinosaur(dinosaurs);
 *  OUTPUT -> // { Compsognathus: 2.13 }
 */
 const findTheShortestDinosaur = (dinosaurs) => {};

/**
 * findDinosaurByName()
 * ---------------------
 * Returns an object with that matches the dinosaur name provided.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the meaning of its name.
 *
 * EXAMPLE:
 *  findDinosaurByName(dinosaurs, name);
 *  OUTPUT -> // { Draconex: Dragon King! }
 */
 const findDinosaurByName = (dinosaurs, name ) => {};

 /**
 * findThePokemonWithTheHighestAttackScore()
 * ---------------------
 * Returns an object with that matches the pokemon with the highest 'attack' score
 *
 * @param {Object[]} pokemon - An array of 'pokemon' objects. See the `data/poke.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the pokemon and the value is the highest 'attack' score.
 *
 * EXAMPLE:
 *  findThePokemonWithTheHighestAttackScore(pokemon);
 *  OUTPUT -> // { pokemonName: AttackScore }
 */
 const findThePokemonWithTheHighestAttackScore = (pokemon) => {};

 /**
 * findThePokemonWithTheLowestAttackScore()
 * ---------------------
 * Returns an object with that matches the pokemon with the highest 'attack' score
 *
 * @param {Object[]} pokemon - An array of 'pokemon' objects. See the `data/poke.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the pokemon and the value is the lowest 'attack' score.
 *
 * EXAMPLE:
 *  findThePokemonWithTheLowestAttackScore(pokemon);
 *  OUTPUT -> // { pokemonName: AttackScore }
 */
 const findThePokemonWithTheLowestAttackScore = (pokemon) => {};

 /**
 * findThePokemonByNationalNumber()
 * ---------------------
 * Returns an object with that matches the pokemon with its 'national_number'
 *
 * @param {Object[]} pokemon - An array of 'pokemon' objects. See the `data/poke.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the pokemon and the value is the national number.
 *
 * EXAMPLE:
 *  findThePokemonWithTheLowestAttackScore(pokemon, nationalNumber);
 *  OUTPUT -> // { pokemonName: nationalNumber }
 * 
 * typeof pokemon.national_number = 'string'
 * 
 */
 const findPokemonByNationalNumber = (pokemon, number) => {};

 /**
 * findThePokemonByName()
 * ---------------------
 * Returns an object with that matches the pokemon with its 'name'
 *
 * @param {Object[]} pokemon - An array of 'pokemon' objects. See the `data/poke.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the pokemon and the value is its first type.
 *
 * EXAMPLE:
 *  findThePokemonByName(pokemon, name);
 *  OUTPUT -> // { pokemonName: pokeObj.type[0] }
 */
 const findPokemonByName = (pokemon, name) => {};

 /**
 * findThePokemonByEvolution()
 * ---------------------
 * Returns an object with that matches the pokemon with its 'evolution'
 *
 * @param {Object[]} pokemon - An array of 'pokemon' objects. See the `data/poke.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the pokemon and the value is its the next evolution.
 *
 * EXAMPLE:
 *  findPokemonByEvolution(pokemon, name);
 *  OUTPUT -> // { pokemonName: pokeObj.evolution }
 */
 const findPokemonByEvolution = (pokemon, evolution) => {};

 module.exports = {
    findTheLongestDinosaur,
    findTheShortestDinosaur,
    findDinosaurByName,
    findThePokemonWithTheHighestAttackScore,
    findThePokemonWithTheLowestAttackScore,
    findPokemonByNationalNumber,
    findPokemonByName,
    findPokemonByEvolution,
 };
