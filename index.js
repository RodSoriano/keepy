#! /usr/bin/env node

const noteIndex = 2;
const note = process.argv[noteIndex];
const newNote = {
  id: new Date(),
  content: note,
}

console.log(newNote);
