const {
    filterSongsBySaib,
    filterSongsOverThreeMinutes,
    filterTitleTracks,
    filterByGenre,
    filterAllMoviesReleasedAtOrBeforeYear,
    filterByDirector,
    filterNumsLessThan5,
} = require("../src/02-filter");

const { nums, words } = require("../data/data.js");
const pokemon = require("../data/poke");
const shuffledPokemon = require("../data/poke_remix");
const movies = require("../data/movies");
const alternative = require("../data/alternative-movies");

console.log(`
.--.
|__| .-------------------.
|=.| |.------------------.|
|--| || Let's .filter()! ||
|  | |'------------------'|
|__|~')__________________('
`)

describe("filterSongsBySaib()", () => {

    let songs;
    beforeEach(() => {
      jest.resetModules();
      songs = require("../data/songs");
      console.log = jest.fn();
    });
  
    test("should use the `.filter()` method", () => {
      const hasFilter = !!filterSongsBySaib.toString().match(/\.filter(\s*\(|\()/g);
      expect(hasFilter).toBeTruthy();
    });
  
    test("should return all songs by the artist Saib", () => {
      const actual = filterSongsBySaib(songs);
      const expected = [
        {
          title: "Pineapple Jam",
          album: "Bluewerks Vol. 1: Up Down Left Right",
          artist: "Saib",
          runtimeInSeconds: 186,
        },
        {
          title: "Samui Sunrise",
          album: "Samui Sunrise",
          artist: "Saib",
          runtimeInSeconds: 204,
        },
      ];
      expect(actual).toEqual(expected);
    });

});

describe("filterSongsOverThreeMinutes()", () => {

    let songs;
    beforeEach(() => {
      jest.resetModules();
      songs = require("../data/songs");
    });
  
    test("should use the `.filter()` method", () => {
      const hasFilter = !!filterSongsOverThreeMinutes
        .toString()
        .match(/\.filter(\s*\(|\()/g);
      expect(hasFilter).toBeTruthy();
    });
  
    test("should return all songs over three minutes (180 seconds)", () => {
      const actual = filterSongsOverThreeMinutes(songs);
      const expected = [
        {
          title: "Berlin Tsukin",
          album: "Bi-To Te-Pu",
          artist: "Taiyo Ky",
          runtimeInSeconds: 193,
        },
        {
          title: "Pineapple Jam",
          album: "Bluewerks Vol. 1: Up Down Left Right",
          artist: "Saib",
          runtimeInSeconds: 186,
        },
        {
          title: "Samui Sunrise",
          album: "Samui Sunrise",
          artist: "Saib",
          runtimeInSeconds: 204,
        },
        {
          title: "Regular Guy",
          album: "Regular Guy",
          artist: "Peanut",
          runtimeInSeconds: 215,
        },
        {
          title: "Kyona",
          album: "Kyona",
          artist: "Two Sleepy",
          runtimeInSeconds: 188,
        },
      ];
      expect(actual).toEqual(expected);
    });

});

describe("filterTitleTracks()", () => {

    let songs;
    beforeEach(() => {
      jest.resetModules();
      songs = require("../data/songs");
    });
  
    test("should use the `.filter()` method", () => {
      const hasFilter = !!filterTitleTracks.toString().match(/\.filter(\s*\(|\()/g);
      expect(hasFilter).toBeTruthy();
    });
  
    test("should return all songs where the title matches the album", () => {
      const actual = filterTitleTracks(songs);
      const expected = [
        {
          title: "Dormancy",
          album: "Dormancy",
          artist: "Arcade Portal",
          runtimeInSeconds: 126,
        },
        {
          title: "Samui Sunrise",
          album: "Samui Sunrise",
          artist: "Saib",
          runtimeInSeconds: 204,
        },
        {
          title: "Regular Guy",
          album: "Regular Guy",
          artist: "Peanut",
          runtimeInSeconds: 215,
        },
        {
          title: "Kyona",
          album: "Kyona",
          artist: "Two Sleepy",
          runtimeInSeconds: 188,
        },
      ];
      expect(actual).toEqual(expected);
    });

});

describe("filterNumsLessThan5()", () => {

    test("should use the `.filter()` method", () => {
        const hasFilter = !!filterNumsLessThan5.toString().match(/\.filter(\s*\(|\()/g);
        expect(hasFilter).toBeTruthy();
      });

    test("A new array with all values less than 5", () => {
    filterNumsLessThan5;
    expect(/\.filter/.test(filterNumsLessThan5.toString())).toBe(true);
    expect(filterNumsLessThan5(nums)).toStrictEqual([1, 2, 3, 4, 0]);
    });

    test("should return an empty array if no movies match the genre", () => {
        const actual = filterNumsLessThan5([]);
        const expected = [];
        expect(actual).toEqual(expected);
    });

    test("should return an empty array if there no numbers less than 5", () => {
        const actual = filterNumsLessThan5([10, 29, 44, 39, 459, 228]);
        const expected = [];
        expect(actual).toEqual(expected);
    });

    test("BONUS ROUND: can you do it in less than 70 characters?", () => {
        const characterMatch = filterNumsLessThan5.toString().length;
        const expected = 69;
        expect(characterMatch).toEqual(expected)
      });

});

describe("filterByGenre()", () => {

    test("should use the `.filter()` method", () => {
        const hasFilter = !!filterByGenre.toString().match(/\.filter(\s*\(|\()/g);
        expect(hasFilter).toBeTruthy();
      });

    test("should return all movies that include the specified genre", () => {
      const genre = "Mystery";
      const actual = filterByGenre(movies, genre);
      const expected = [
        movies[2], // Coco
      ];
      expect(actual).toEqual(expected);
    });
    test("should dynamically change depending on the genre inputted", () => {
      const genre = "Fantasy";
      const actual = filterByGenre(movies, genre);
      const expected = [
        movies[0], // Toy Story 4
        movies[1], // Inside Out
        movies[2], // Coco
        movies[5], // How to Train Your Dragon
        movies[8], // Fantasia
        movies[9], // James and the Giant Peach
      ];
      expect(actual).toEqual(expected);
    });

    test("should dynamically change depending on the movies inputted", () => {
      const genre = "Action";
      const actual = filterByGenre(alternative, genre);
      const expected = [
        alternative[0], // Black Panther
        alternative[1], // Wonder Woman
        alternative[3], // Skyfall
      ];
      expect(actual).toEqual(expected);
    });

    test("should be case-insensitive", () => {
      const genre = "FANTASY";
      const actual = filterByGenre(movies, genre);
      const expected = [
        movies[0], // Toy Story 4
        movies[1], // Inside Out
        movies[2], // Coco
        movies[5], // How to Train Your Dragon
        movies[8], // Fantasia
        movies[9], // James and the Giant Peach
      ];
      expect(actual).toEqual(expected);
    });

    test("should return an empty array if no movies match the genre", () => {
      const genre = "Horror";
      const actual = filterByGenre(movies, genre);
      const expected = [];
      expect(actual).toEqual(expected);
    });

    test("should return an empty array if there are no movies", () => {
      const genre = "Action";
      const actual = filterByGenre([], genre);
      const expected = [];
      expect(actual).toEqual(expected);
    });
});

describe("filterAllMoviesReleasedAtOrBeforeYear()", () => {

    test("should use the `.filter()` method", () => {
        const hasFilter = !!filterAllMoviesReleasedAtOrBeforeYear.toString().match(/\.filter(\s*\(|\()/g);
        expect(hasFilter).toBeTruthy();
    });

    test("should return all movies where the `released` date is equal to or less than the year given", () => {
      const year = 2000;
      const actual = filterAllMoviesReleasedAtOrBeforeYear(movies, year);
      const expected = [
        movies[7], // The Lion King
        movies[8], // Fantasia
        movies[9], // James and the Giant Peach
      ];
      expect(actual).toEqual(expected);
    });

    test("should dynamically change depending on the year inputted", () => {
      const year = 1950;
      const actual = filterAllMoviesReleasedAtOrBeforeYear(movies, year);
      const expected = [
        movies[8], // Fantasia
      ];
      expect(actual).toEqual(expected);
    });

    test("should dynamically change depending on the movies inputted", () => {
      const year = 2017;
      const actual = filterAllMoviesReleasedAtOrBeforeYear(alternative, year);
      const expected = [
        alternative[1], // Wonder Woman
        alternative[2], // Jaws
        alternative[3], // Skyfall
      ];
      expect(actual).toEqual(expected);
    });

    test("should return an empty array if no movies were released at or before the given year", () => {
      const year = 1940;
      const actual = filterAllMoviesReleasedAtOrBeforeYear(movies, year);
      const expected = [];
      expect(actual).toEqual(expected);
    });

    test("should return an empty array if there are no movies", () => {
      const year = 2000;
      const actual = filterAllMoviesReleasedAtOrBeforeYear([], year);
      const expected = [];
      expect(actual).toEqual(expected);
    });

    test("BONUS ROUND: should use the `.reverse()` method", () => {
        const hasReverse = !!filterAllMoviesReleasedAtOrBeforeYear.toString().match(/\.reverse(\s*\(|\()/g);
        expect(hasReverse).toBeTruthy();
    });

});

describe("filterByDirector()", () => {

    test("should use the `.filter()` method", () => {
        const hasFilter = !!filterByDirector.toString().match(/\.filter(\s*\(|\()/g);
        expect(hasFilter).toBeTruthy();
    });    

    test("should return an empty array if there are no movies", () => {
        const director = "Akira Kurosawa";
        const actual = filterByDirector([], director);
        const expected = [];
        expect(actual).toEqual(expected);
      });

      test("should return an empty array if the 'director' name does not match any movie", () => {
        const director = "Akira Kurosawa";
        const actual = filterByDirector(movies, director);
        const expected = [];
        expect(actual).toEqual(expected);
      });

      test("should return all movies where the `director` is equal to the director name given", () => {
        const director = "Brad Bird";
        const actual = filterByDirector(movies, director);
        const expected = [
          movies[3], // The Incredibles
        ];
        expect(actual).toEqual(expected);
      });

      test("should dynamically change depending on the movies inputted", () => {
        const director = "Patty Jenkins";
        const actual = filterByDirector(alternative, director);
        const expected = [
          alternative[1], // Wonder Woman
        ];
        expect(actual).toEqual(expected);
      });

      test("BONUS ROUND: can you do it in less than 110 characters?", () => {
        const characterMatch = filterByDirector.toString().length;
        const expected = 109;
        expect(characterMatch).toBeCloseTo(expected, 113)
      });

});