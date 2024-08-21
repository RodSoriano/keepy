import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .command('new <note>', 'Create a new note', (yargs) => { // Create
    return yargs.positional('note', {
      type: 'string',
      description: 'The note to create',
    });
  }, (argv) => console.info(argv.note))
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'Tags to add to the note',
  })
  .command('all', 'List all notes', () => {}, async (argv) => {}) // Index
  .command('find <filter>', 'Find matching note', (yargs) => { // Show
    return yargs.positional('filter', {
      type: 'string',
      description: 'The filter is applied to note.content',
    });
  }, () => {})
  .command('remove <id>', 'Remove a note', (yargs) => { // Delete
    return yargs.positional('id', {
      type: 'number',
      description: 'The id of the note to remove',
    });
  }, () => {})
  .command('web [port]', 'Start the web server', (yargs) => { // Web
    return yargs.positional('port', {
      type: 'number',
      description: 'The port to start the server on',
      default: 5000,
    });
  }, () => {})
  .command('clean', 'Remove all notes', () => {}, () => {}) // Clean
  .demandCommand(1)
  .parse();
