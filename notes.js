const fs = require("fs");

const getNotes = function () {
  let data = fs.readFileSync("./data/notes.txt", "utf-8");
  console.log("Notes Fetched", data);
};

const addNotes = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New Note Added");
  } else {
    console.log("A note title already taken");
  }
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("./data/notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("./data/notes.json", dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
};
