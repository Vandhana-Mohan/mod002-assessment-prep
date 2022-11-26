const {
    mapSongTitles,
    mapSongDetails,
    mapTitleAndArtist,
    mapArrayValuesSquaredTimesIndex,
    mapArrayWordsUpperCased,
    mapCountByType,
    mapAverageTotalStatScore,
    mapHighestAttackScore, 
} = require("../src/01-map");

const { nums, words } = require("../data/data.js");
const pokemon = require("../data/poke");
const shuffledPokemon = require("../data/poke_remix");

console.log(`
.--.
|__| .----------------.
|=.| |.---------------.|
|--| || Let's .map()! ||
|  | |'---------------'|
|__|~')_______________('
`);

describe("mapSongTitles()", () => {
    let songs;
    beforeEach(() => {
      jest.resetModules();
      songs = require("../data/songs");
    });
  
    test("should use the `.map()` method", () => {
      const hasMap = !!mapSongTitles.toString().match(/\.map(\s*\(|\()/g);
      expect(hasMap).toBeTruthy();
    });
  
    test("should return an array of all song titles", () => {
      const actual = mapSongTitles(songs);
      const expected = [
        "Berlin Tsukin",
        "Up",
        "Daylight",
        "Dormancy",
        "Pineapple Jam",
        "Samui Sunrise",
        "Regular Guy",
        "In the Middle of Nowhere",
        "Pink Elephants",
        "Kyona",
      ];
      expect(actual).toEqual(expected);
    });
});

describe("mapSongDetails()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
  });

  test("should use the `.map()` method", () => {
    const hasMap = !!mapSongDetails.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should return an array with the song title and artist", () => {
    const actual = mapSongDetails(songs);
    const expected = [
      "Berlin Tsukin by Taiyo Ky",
      "Up by Sebastian Kamae",
      "Daylight by hiyasu",
      "Dormancy by Arcade Portal",
      "Pineapple Jam by Saib",
      "Samui Sunrise by Saib",
      "Regular Guy by Peanut",
      "In the Middle of Nowhere by Soulaced",
      "Pink Elephants by Timestreet",
      "Kyona by Two Sleepy",
    ];
    expect(actual).toEqual(expected);
  });
});

describe("mapTitleAndArtist()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
  });

  test("should use the `.map()` method", () => {
    const hasMap = !!mapTitleAndArtist.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should return an array of objects where the key is the song title and the value is the song artist", () => {
    const actual = mapTitleAndArtist(songs);
    const expected = [
      { "Berlin Tsukin": "Taiyo Ky" },
      { Up: "Sebastian Kamae" },
      { Daylight: "hiyasu" },
      { Dormancy: "Arcade Portal" },
      { "Pineapple Jam": "Saib" },
      { "Samui Sunrise": "Saib" },
      { "Regular Guy": "Peanut" },
      { "In the Middle of Nowhere": "Soulaced" },
      { "Pink Elephants": "Timestreet" },
      { Kyona: "Two Sleepy" },
    ];
    expect(actual).toEqual(expected);
  });
});

describe("mapArrayValuesSquaredTimesIndex()",() => {

  test("should use the `.map()` method", () => {
    const hasMap = !!mapArrayValuesSquaredTimesIndex.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("A new array of values that are squared and then multiplied by their index number", () => {
    expect(/\.map/.test(mapArrayValuesSquaredTimesIndex.toString())).toBe(true);
    expect(mapArrayValuesSquaredTimesIndex(nums)).toStrictEqual([
      0, 4, 18, 48, 100, 180, 294, 448, 648, 900, 0,
    ]);
  });
});

describe("mapArrayWordsUpperCased()", () => {

  test("should use the `.map()` method", () => {
    const hasMap = !!mapArrayWordsUpperCased.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("A new array of words that are all uppercase", () => {
    expect(/\.map/.test(mapArrayWordsUpperCased.toString())).toBe(true);
    expect(mapArrayWordsUpperCased(words)).toStrictEqual([
      "THE",
      "QUICK",
      "BROWN",
      "FOX",
      "JUMPS",
      "OVER",
      "THE",
      "LAZY",
      "DOG",
    ]);
  });
});

describe("mapCountByType()", () => {

  test("should use the `.map()` method", () => {
    const hasMap = !!mapCountByType.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should return an object where the keys are types and the values are the number of Pokemon with that type", () => {
      const actual = mapCountByType(pokemon);
      const expected = {
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
      expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the pokemon inputted", () => {
      const actual = mapCountByType(shuffledPokemon);
      const expected = {
          Grass: 1,
          Psychic: 1,
          Fighting: 2,
          Water: 2,
          Normal: 4,
          Bug: 1,
          Fire: 1,
          Flying: 2
      };
      expect(actual).toEqual(expected);
  });

  test("should return an empty object if there are no pokemon", () => {
      const actual = mapCountByType([]);
      const expected = {};
      expect(actual).toEqual(expected);
  });

});

describe("mapAverageTotalStatScore()", () => {

  test("should use the `.map()` method", () => {
    const hasMap = !!mapAverageTotalStatScore.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should return the average attack stat score among all Pokemon as a number", () => {
      const actual = mapAverageTotalStatScore(pokemon);
      const expected = 407.22;
      expect(actual).toBeCloseTo(expected, 2);
  });

  test("should dynamically change depending on the Pokemon inputted", () => {
      const actual = mapAverageTotalStatScore(shuffledPokemon);
      const expected = 327.45;
      expect(actual).toBeCloseTo(expected, 2);
  });

  test("should return `0` if there are no Pokemon", () => {
      const actual = mapAverageTotalStatScore([]);
      const expected = 0;
      expect(actual).toBeCloseTo(expected, 2);
  });

  test("BONUS ROUND!! should use the `.reduce()` method as well!!", () => {
    const hasReduce = !!mapAverageTotalStatScore.toString().match(/\.reduce(\s*\(|\()/g);
    expect(hasReduce).toBeTruthy();
  });

});

describe("mapHighestAttackScore", () => {

  test("should use the `.map()` method", () => {
    const hasMap = !!mapHighestAttackScore.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should return the highest attack stat score among all Pokemon as a number", () => {
      const actual = mapHighestAttackScore(pokemon);
      const expected = 134;
      expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the pokemon inputted", () => {
      const actual = mapHighestAttackScore(shuffledPokemon);
      const expected = 105;
      expect(actual).toEqual(expected);
  });

  test("should return `0` if there are no pokemon", () => {
      const actual = mapHighestAttackScore([]);
      const expected = 0;
      expect(actual).toEqual(expected);
  });

  test("BONUS ROUND: should use the `.Math.max()` method", () => {
    const hasMath = !!mapHighestAttackScore.toString().match(/\Math.max(\s*\(|\()/g);
    expect(hasMath).toBeTruthy();
  });

  test("EXTRA BONUS ROUND: should use the `.reduce()` method", () => {
    const hasReduce = !!mapHighestAttackScore.toString().match(/\.reduce(\s*\(|\()/g);
    expect(hasReduce).toBeTruthy();
  });

  test("EXTRA EXTRA BONUS ROUND: can you do it in less than 140 characters?", () => {
    const characterMatch = mapHighestAttackScore.toString().length;
    const expected = 136;
    expect(characterMatch).toBeCloseTo(expected, 140)
  });
});