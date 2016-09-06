Chordy allows a user to input a fretboard configuration with any tuning, and it will tell the user what the chord is.

Live at: http://delicious-mind.surge.sh/

It was originally made in [Python](https://github.com/Nathello/Chordy) to help my husband Chris learn, that's why the JS is a bit odd in places!

This version is vanilla JS, with only Handlebars for templating. It uses pure CSS3 to render the fretboard - thanks to Russel Williams.

Chordy Algorithm

Take in an array of finger positions on strings.

0 => open 1+ => fret chosen X => not used

Fretboard reader takes this in and translates it into an array of notes, with any duplicates removed.

["1","X","2","3","4","1"] becomes FEA#D#F

Chord finder takes in this array of notes and changes it into an array starting with the root note, followed by the distance in semitones to the other notes in ascending order.

CEG becomes [1,5,8]

Chord lookup takes this and the root note, converts it to a string key and finds the relevant chord type in it's internal collection.

![Screenshot](screenshot.png?raw=true "Screenshot")
