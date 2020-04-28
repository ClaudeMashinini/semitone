const JamBuddy = require("../app");
let buddy = new JamBuddy();

describe("checking for the presence of a full note circle", function () {
  it("should have 12 notes, in chronological order", function () {
    expect(buddy.notes[0]).toBe("A");
    expect(buddy.notes[1]).toBe("A#");
    expect(buddy.notes[2]).toBe("B");
    expect(buddy.notes[3]).toBe("C");
    expect(buddy.notes[4]).toBe("C#");
    expect(buddy.notes[5]).toBe("D");
    expect(buddy.notes[6]).toBe("D#");
    expect(buddy.notes[7]).toBe("E");
    expect(buddy.notes[8]).toBe("F");
    expect(buddy.notes[9]).toBe("F#");
    expect(buddy.notes[10]).toBe("G");
    expect(buddy.notes[11]).toBe("G#");
  });
});

describe("basic functionality", function () {
  it("should be able to randomly pick two notes from the notes' array", function () {
    expect(buddy.selectNotes().length).toBe(2);
  });
  it("should be able to determine whether the predicted number of seminotes is true or not", function () {
    if (buddy.checkAnswer(2)) {
      expect(buddy.checkAnswer).toBe(true);
    } else {
      expect(buddy.checkAnswer).toBe(false);
    }
  });
});
