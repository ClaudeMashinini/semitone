module.exports = class JamBuddy {
  constructor() {
    this.notes = [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#"
    ];
  }
  selectNotes() {
    let output;
    firstNote = this.notes[Math.floor(Math.random() * this.notes.length)];
    secondNote = this.notes[Math.floor(random(1, 13)) - 1];

    output = [firstNote, secondNote];
    return output.sort();
  }
};
