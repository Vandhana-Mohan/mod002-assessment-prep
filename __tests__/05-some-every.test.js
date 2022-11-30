const {
    isEverySongOverTwoMinutes,
    areSomeSongsOverFourMinutes,
    areSomeSongsByPeanut,
} = require("../src/05-some-every");

const songs = require("../data/songs.js");
const { TestWatcher } = require("jest");

console.log(`
.--.
|__| .------------------------------.
|=.| |.----------------------------.|
|--| || Let's .some()! or .every() ||
|  | |'----------------------------'|
|  | |            benQ              |
|__|~')____________________________('
`);

describe("isEverySongOverTwoMinutes()", () => {

    test("should use the `.some() method", () =>{
        const hasSome = !!isEverySongOverTwoMinutes.toString().match(/\.some(\s*\(|\()/g);
        expect(hasSome).toBeTruthy();
    });

    test("should return `true` if all of the songs are over two minutes in length (120 seconds), otherwise return `false`", () => {
        const actual = isEverySongOverTwoMinutes(songs);
        const expected = false;
        expect(actual).toEqual(expected);
    });

});

describe("areSomeSongsOverFourMinutes()", () => {

    test("should use the `.some()` method", () => {
        const hasSome = !!areSomeSongsOverFourMinutes.toString().match(/\.some(\s*\(|\()/g);
        expect(hasSome).toBeTruthy();
    });
    
    test("should return `true` if any song is over four minutes (240 seconds), otherwise return `false`", () => {
        const actual = areSomeSongsOverFourMinutes(songs);
        const expected = false;
        expect(actual).toEqual(expected);
    });

});

describe("areSomeSongsByPeanut()", () => {

    test("should use the `.some()` method", () => {
        const hasSome = !!areSomeSongsByPeanut.toString().match(/\.some(\s*\(|\()/g);
        expect(hasSome).toBeTruthy();
    });
    
      test("should return `true` if any song is by the artist 'Peanut', otherwise return `false`", () => {
        const actual = areSomeSongsByPeanut(songs);
        const expected = true;
        expect(actual).toEqual(expected);
    });
    
});


