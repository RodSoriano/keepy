export const prettyNotesList = data => {
  data.forEach(({ id, content, tags }) => {
    console.log('id: ', id);
    console.log('tags: ', tags);
    console.log('content: ', content);
    console.log('\n');
  });
};
