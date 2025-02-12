var notes = {};
const addNoteBtn = document.querySelector("#add-note-btn");
const titleInput = document.querySelector("#note-title");
const bodyInput = document.querySelector("#note-content");
const noteList = document.querySelector("#notesList");

// load all notes
window.addEventListener("load", displayNotes);

// yeni note ekleme with event
addNoteBtn.addEventListener("click", () => addNote());

function addNote() {
  if (titleInput.value.trim() === "") {
    alert("please enter ur title!");
    return;
  }
  if (bodyInput.value.trim() === "") {
    alert("please enter ur note!");
    return;
  }

  let id = saveNote(titleInput.value, bodyInput.value);

  addNoteToDom(titleInput.value, bodyInput.value, id);

  // notu ekledikten sonra texterea and inputu boşalt
  clearInputs();
}

//🚨localStorage note silme func.u
function removeNoteFromLocalStorage(id) {
  localStorage.removeItem(`note_${id}`);
  delete notes[id];
  displayNotes();    
}

// localStorage note divi göstermeI🤖
function displayNotes() {
    // remove current  notes from DOM 
    noteList.innerHTML = "";
    // get notes from local storage
    notes = getNotesFromLocalStorage();
    // display notes in DOM
    for (const key in notes) {
        addNoteToDom(notes[key].title, notes[key].content, key);
    }
}
// ana silme btn'u✅
const deleteBtn = document.getElementById("delete-note");
deleteBtn.addEventListener("click", deleteAllNotes);

function deleteAllNotes () {
   noteList.innerHTML = "";
   let confirmDelete = confirm("Are you sure you want to delete all notes?");
   if (confirmDelete !== "yes") {
     let ids = JSON.parse(localStorage.getItem("note_keys"));
     ids.forEach((id) => {
       console.log(id);
       localStorage.removeItem(`note_${id}`);
     });
     localStorage.removeItem("note_keys");
   }
 }

// set data in local storage✅
function saveNote(title, content) {
  let id = Math.random().toString(36).substr(2, 9);
  // let allNotes = JSON.parse(localStorage.getItem("allNotes")) || [];
  const note = {
    id: id,
    title: title,
    content: content,
  };

  localStorage.setItem(`note_${id}`, JSON.stringify(note));

  // add id
  let key = localStorage.getItem("note_keys");
  if (key != null) {
    var ids = JSON.parse(key);
  } else {
    var ids = [];
  }
  ids.push(id);

  localStorage.setItem("note_keys", JSON.stringify(ids));

  return id;
}
function getNotesFromLocalStorage() {
  let ids = JSON.parse(localStorage.getItem("note_keys"));

  ids.forEach((id) => {
    let note = JSON.parse(localStorage.getItem(`note_${id}`));
    // notes.push(note);
    notes[id] = note;
  });

  return notes;
}

function clearInputs() {
  titleInput.value = "";
  bodyInput.value = "";
}
function addNoteToDom(title, content, id) {
  let noteEle = document.createElement("div");
  noteEle.classList.add("note");

  let noteTitle = document.createElement("h2");
  noteTitle.innerHTML = title;
  noteEle.appendChild(noteTitle);

  let noteBody = document.createElement("p");
  noteBody.innerHTML = content;
  noteEle.appendChild(noteBody);

  let noteDeleteBtn = document.createElement("button");
  noteDeleteBtn.id = "delete-note";
  noteDeleteBtn.classList.add("btn");
  noteDeleteBtn.setAttribute("note-id", id);
  noteEle.appendChild(noteDeleteBtn);

  let noteDeleteIcon = document.createElement("i");
  noteDeleteIcon.classList.add("fa-solid", "fa-trash-can");
  noteDeleteBtn.appendChild(noteDeleteIcon);

  // note'un içindeki silme btn'u✅
  noteDeleteBtn.addEventListener("click", function (e) {
    let id = noteDeleteBtn.getAttribute("note-id");
    noteDeleteBtn.parentElement.remove();
    removeNoteFromLocalStorage(id);
  });

  noteList.appendChild(noteEle);
}
