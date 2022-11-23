/**
 * DON'T TOUCH THE LINES BELOW!!!
 */
const songData = require("../data/songs");
const { nums, words } = require("../data/data");
const examplePokemon = require("../data/poke");

/**
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 * 
 * MUST USE '.map()'
 */
const mapSongTitles = ( songs ) => songs.map( song => song.title ) // a new array with all song title

/**
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the format "<TITLE> by <ARTIST>".
 *
 * EXAMPLE:
 *  getSongDetails(songs);
 *  > [ "Berlin Tsukin by Taiyo Ky", "Up by Sebastian Kamae", ... ]
 * 
 *  MUST USE '.map()'
 */
const mapSongDetails = (songs) => songs.map( song => `${song.title} by ${song.artist}` ) // new array with song title and artist

/**
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  > [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 * 
 * MUST USE '.map()'
 */
const mapTitleAndArtist = (songs) => songs.map( song => ({[song.title] : song.artist})) // Array of Objects with song title as key and song artist as value

/**
 * Returns an array of numbers, where each object is squared and then multiplied by their index.
 * @param {number[]} nums - An array of numbers.
 * @returns {number[]} An array of numbers.
 * 
 * MUST USE '.map()'
 * Remember that the parameters for '.map()' include '.map( (element, index, array) {/__/});'
 * 
 */
const mapArrayValuesSquaredTimesIndex = (nums) => {};

/**
 * Returns an array of strings, where each string is uppercased.
 * @param {string[]} words - An array of strings.
 * @returns {string} An array of strings. 
 */
const mapArrayWordsUpperCased = (words) => {};

/**
 * countByType()
 * -----------------------------
 * Returns an object where the keys are Pokemon types and the values are the number of Pokemon in the array with that type. If the inputted `pokemon` array is empty, return `{}`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {Object} An object where keys are Pokemon types (e.g. "Water") and the values are how many Pokemon in the array have that type (e.g. 22).
 *
 * EXAMPLE:
 *  countByType(pokemon);
 *  //> {
        Grass: 11,
        Poison: 14,
        Fire: 8,
        Flying: 12,
        Water: 22,
        Bug: 8,
        Normal: 14,
        Electric: 5,
        Ground: 10,
        Steel: 3,
        Fairy: 5,
        Fighting: 5,
        Psychic: 13,
        Rock: 4,
        Ice: 4,
        Ghost: 2,
        Dragon: 3
    };
 */
const mapCountByType = (pokemon) => {};

/**
 * getAverageTotalStatScore()
 * -----------------------------
 * Averages all of the `total` stat scores from all Pokemon and returns it, as a number. 
 * If the inputted `pokemon` array is empty, return `0`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {number} The average `total` stat across all Pokemon.
 *
 * EXAMPLE:
 *  getAverageTotalStatScore(pokemon);
 *  //> 407.22
 */
const mapAverageTotalStatScore = (pokemon) => {};

/**
 * getHighestAttackStatScore()
 * -----------------------------
 * Returns the highest `attack` stat score among all Pokemon. If the inputted `pokemon` array is empty, return `0`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {number} The highest `attack` stat of all Pokemon.
 *
 * EXAMPLE:
 *  getHighestAttackStatScore(pokemon);
 *  //> 134
 */
const mapHighestAttackScore = (pokemon) => {};

module.exports = {
    mapSongTitles,
    mapSongDetails,
    mapTitleAndArtist,
    mapArrayValuesSquaredTimesIndex,
    mapArrayWordsUpperCased,
    mapCountByType,
    mapAverageTotalStatScore,
    mapHighestAttackScore,
};