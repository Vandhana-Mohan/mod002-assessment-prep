/**
 * DON'T TOUCH THE LINES BELOW!!!
 */
 const songData = require("../data/songs");
 const { nums, words } = require("../data/data");
 const examplePokemon = require("../data/poke");
 const movies = require("../data/movies");
 const moreMovies = require("../data/alternative-movies");
 const rickMorty = require("../data/rickMorty");

 // The lines above connect the data stored in the 'data' folder to this file.  

/**
 * Returns an array of all songs by the artist "Saib".
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
const filterSongsBySaib = (songs) => {};

/**
 * Returns an array of all songs where the runtime is over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
const filterSongsOverThreeMinutes = (songs) => {};

/**
 * Returns an array of songs where the song title is the same as the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
const filterTitleTracks = (songs) => {};

const filterNumsLessThan5 = (nums) => {};

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
    {
        // Coco
    }
    ]
*
* EXAMPLE:
*  filterByGenre(movies, "Horror")
*  //> []
*/
const filterByGenre = (movies, genre) => {};

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
    {
        // The Lion King
    },
    {
        // Fantasia
    },
    {
        // James and the Giant Peach
    }
    ];
*/
const filterAllMoviesReleasedAtOrBeforeYear = (movies, year) => {};

const filterByDirector = (movies, director) => {};

const filterCharactersBySpecies = (rickMorty, species) => {
    return rickMorty.filter( char => char.id < 10 );
};

module.exports = {
    filterSongsBySaib,
    filterSongsOverThreeMinutes,
    filterTitleTracks,
    filterNumsLessThan5,
    filterByGenre,
    filterAllMoviesReleasedAtOrBeforeYear,
    filterByDirector,
    filterCharactersBySpecies,
};