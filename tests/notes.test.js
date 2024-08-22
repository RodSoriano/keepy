import { jest } from '@jest/globals';

jest.unstable_mockModule('../src/db.js', () => ({
  insertDB: jest.fn(),
  saveDB: jest.fn(),
  getDB: jest.fn(),
}));

const { insertDB, getDB, saveDB } = await import('../src/db.js');
const { newNote, allNotes, removeNote } = await import('../src/notes.js');

beforeEach(() => {
  insertDB.mockClear();
  saveDB.mockClear();
  getDB.mockClear();
});

describe('Notes operations', () => {
  test('newNote should inserts data and returns it', async () => {
    const note = {
      id: 1,
      content: 'my test note',
      tags: ['test'],
    };
    insertDB.mockResolvedValue();

    const result = await newNote(note.content, note.tags);

    expect(result.content).toEqual(note.content);
  });

  test('allNotes should list all notes', async () => {
    const db = {
      notes: ['note1', 'note2', 'note3'],
    }
    getDB.mockResolvedValue(db);

    const result = await allNotes();

    expect(result).toEqual(db.notes);
  });

  test('removeNote does nothing if ID is not found', async () => {
    const notes = [
      { id: 1, content: 'note 1' },
      { id: 2, content: 'note 2' },
      { id: 3, content: 'note 3' },
    ];
    saveDB.mockResolvedValue(notes);

    const idToRemove = 4;
    const result = await removeNote(idToRemove);

    expect(result).toBeUndefined();
  });
});
