const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Set Up Yargs
// Customize yargs version
yargs.version("1.1.0");

// Create Add Notes command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log(`Title: ${argv.title}, Body: ${argv.body}`);
  },
});

// Create Remove Notes Command
yargs.command({
  command: "remove",
  describe: "Remvoe a note",
  handler: function () {
    console.log("Remove a note");
  },
});

// Challenge - Add two new commands
//
// 1. Setup command to support "list" command (print placeholder for now)
// 2. Setup command to support "read" command (print placeholder for now)
// 3. Test the output

// List command
yargs.command({
  command: "list",
  describe: "List all the notes",
  handler: function () {
    console.log("List command executed");
  },
});

// Read commnad
yargs.command({
  command: "read",
  describe: "read the notes",
  handler: function () {
    console.log("Read all the notes");
  },
});

yargs.parse();

// console.log(yargs.argv);

// Challenge - Add an option to yargs
//
// 1. Setup a body option for the add command
// 2. Configure a description, make it required, and for it to be a string
// 3. log the body value in the function
// 4. test
