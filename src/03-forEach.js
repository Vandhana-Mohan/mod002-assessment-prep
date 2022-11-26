/**
 * DO NOT CHANGE THE LINE BELOW
 */

 const { nums, words } = require("../data/data");

 const forEachWordOver4Count = ( words ) => {
  let count = 0
  words.forEach(word => word.length > 4 ? count++ : 0)
  return count
 }
  
 const forEachWordWithExclamation = ( words ) => words.forEach(word => console.log(`${word}!`))

 const forEachSongPrintDetails = ( songs ) => songs.forEach(song => console.log(`${song.title} by ${song.artist}`))

module.exports = {

  forEachWordOver4Count,
  forEachWordWithExclamation,
  forEachSongPrintDetails,

};