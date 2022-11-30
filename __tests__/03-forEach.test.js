const {
    forEachWordOver4Count,
    forEachWordWithExclamation,
    forEachSongPrintDetails,
} = require("../src/03-forEach");

const { nums, words } = require("../data/data.js");
const songs = require("../data/songs.js");

console.log(`
.--.
|__| .--------------------.
|=.| |.-------------------.|
|--| || Let's .forEach()! ||
|  | |'-------------------'|
|  | |        ASUS         |
|__|~')___________________('
`)

describe("forEachWordOver4Count()", () =>{

    test("should use the `.forEach()` method", () => {
        const hasForEach = !!forEachWordOver4Count.toString().match(/\.forEach(\s*\(|\()/g);
        expect(hasForEach).toBeTruthy();
    });

    test("should return a number that counts how many words are over 4 characters long", () => {
        const actual = forEachWordOver4Count(words);
        const expected = 3;
        expect(actual).toEqual(expected);
    });

    test("BONUS ROUND: can you do it in less than 111 characters?", () => {
        const characterMatch = forEachWordOver4Count.toString().length;
        const expected = 101;
        expect(characterMatch).toBeCloseTo(expected, 110)
    });

});

describe("forEachWordWithExclamation()", () =>{

    beforeEach(() => {
      jest.resetModules();
      console.log = jest.fn();
    });

    test("should use the `.forEach()` method", () => {
        const hasForEach = !!forEachWordWithExclamation.toString().match(/\.forEach(\s*\(|\()/g);
        expect(hasForEach).toBeTruthy();
    });

    test("should log all words with '!' at the end of it", () => {

        forEachWordWithExclamation(words);

        expect(console.log).toHaveBeenCalledWith("the!");
        expect(console.log).toHaveBeenCalledWith("quick!");
        expect(console.log).toHaveBeenCalledWith("brown!");
        expect(console.log).toHaveBeenCalledWith("fox!");
        expect(console.log).toHaveBeenCalledWith("jumps!");
        expect(console.log).toHaveBeenCalledWith("over!");
        expect(console.log).toHaveBeenCalledWith("the!");
        expect(console.log).toHaveBeenCalledWith("lazy!");
        expect(console.log).toHaveBeenCalledWith("dog!");

    });

});

describe("forEachSongPrintDetails()", () =>{

    beforeEach(() => {
        jest.resetModules();
        console.log = jest.fn();
    });

    test("should use the `.forEach()` method", () => {
        const hasForEach = !!forEachSongPrintDetails.toString().match(/\.forEach(\s*\(|\()/g);
        expect(hasForEach).toBeTruthy();
    });

    test("should print both the title and artist", () => {
        forEachSongPrintDetails(songs);
    
        expect(console.log).toHaveBeenCalledWith("Berlin Tsukin by Taiyo Ky");
        expect(console.log).toHaveBeenCalledWith("Up by Sebastian Kamae");
        expect(console.log).toHaveBeenCalledWith("Daylight by hiyasu");
        expect(console.log).toHaveBeenCalledWith("Dormancy by Arcade Portal");
        expect(console.log).toHaveBeenCalledWith("Pineapple Jam by Saib");
        expect(console.log).toHaveBeenCalledWith("Samui Sunrise by Saib");
        expect(console.log).toHaveBeenCalledWith("Regular Guy by Peanut");
        expect(console.log).toHaveBeenCalledWith(
          "In the Middle of Nowhere by Soulaced"
        );
        expect(console.log).toHaveBeenCalledWith("Pink Elephants by Timestreet");
        expect(console.log).toHaveBeenCalledWith("Kyona by Two Sleepy");
      });

});

 
