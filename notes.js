const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  let data = fs.readFileSync("./data/notes.txt", "utf-8");
  console.log("Notes Fetched", data);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("New Note Added"));
  } else {
    console.log(chak.red("A note title already taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesUpdated = notes.filter((note) => note.title !== title);
  if (notes.length == notesUpdated.length)
    console.log(chalk.red("Note Does not Exist, Add the Note"));
  else {
    saveNotes(notesUpdated);
    console.log(chalk.green("Note Remmoved"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse("Your Notes!"));
  notes.forEach((note) => console.log(chalk.green(note.title)));
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) console.log(chalk.green(`${note.title}:`), note.body);
  else console.log(chalk.red.inverse("Note not found"));
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("./data/notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("./data/notes.json", dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
