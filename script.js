function addNote() {
  const title = document.getElementById('note-title').value;
  const content = document.getElementById('note-content').value;

  if (!title || !content) {
    alert('Please enter both title and content');
    return;
  }

  const note = { title, content };
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));

  document.getElementById('note-title').value = '';
  document.getElementById('note-content').value = '';
  showNotes();
}

function deleteNote(index) {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  showNotes();
}

function showNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  const notesList = document.getElementById('notes-list');
  notesList.innerHTML = '';

  notes.forEach((note, index) => {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    notesList.appendChild(noteDiv);
  });
}

window.onload = showNotes;
