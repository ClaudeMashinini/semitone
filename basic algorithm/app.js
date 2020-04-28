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
      "G#",
    ];
  }
  selectNotes() {
    let output, firstNote, secondNote;
    firstNote = this.notes[Math.floor(Math.random() * this.notes.length)];
    secondNote = this.notes[Math.floor(Math.random() * (12 - 1) + 1) - 1];

    output = [firstNote, secondNote];
    this.final = output.sort();
    return this.final;
  }
  checkAnswer(prod) {
    return this.notes.indexOf(this.final[1]) -
      this.notes.indexOf(this.final[0]) ===
      prod
      ? true
      : false;
  }
};
