import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import start from './server.js';
import { prettyNotesList } from './utils.js';
import { allNotes, findNotes, newNote, removeAllNotes, removeNote } from './notes.js';

yargs(hideBin(process.argv))
  .command('new <note>', 'Create a new note', yargs => { // Create
    return yargs.positional('note', {
      type: 'string',
      description: 'The note to create',
    });
  }, async argv => {
    const tags = argv.tags ? argv.tags.split(',') : [];
    const note = await newNote(argv.note, tags);
    console.log('New note', note);
  })
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'Tags to add to the note',
  })
  .command('all', 'List all notes', () => {}, async () => {  // Index
    const notes = await allNotes();
    prettyNotesList(notes);
  })
  .command('find <filter>', 'Find matching note', yargs => { // Show
    return yargs.positional('filter', {
      type: 'string',
      description: 'The filter is applied to note.content',
    });
  }, async argv => {
    const matches = await findNotes(argv.filter);
    prettyNotesList(matches);
  })
  .command('remove <id>', 'Remove a note', yargs => { // Delete
    return yargs.positional('id', {
      type: 'number',
      description: 'The id of the note to remove',
    });
  }, async argv => {
    const id = await removeNote(argv.id);
    console.log(`The note "${id}" was removed`);
  })
  .command('web [port]', 'Start the web server', yargs => { // Web
    return yargs.positional('port', {
      type: 'number',
      description: 'The port to start the server on',
      default: 5009,
    });
  }, async argv => {
    const notes = await allNotes();
    start(notes, argv.port);
  })
  .command('clean', 'Remove all notes', () => {}, async () => { // Clean
    await removeAllNotes();
    console.log('Database has been cleared');
  })
  .demandCommand(1)
  .parse();
