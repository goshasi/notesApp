/*const pNotes = document.getElementById("p-note");
let dataNote = [
    { title: "note1", "text": "hi this is text one" },

];

function readNote() {
    document.getElementById("notesList").innerHTML = " ";
    let index = 0;
    for (key of dataNote) {
        let content =
            `
               <div class="notesList">
                    <div class="note not1">
                         <h1 id="title">${dataNote.title}</h1>
                         <p>${dataNote.text}</p>
                         
                    </div>
               </div>
            `;

        document.getElementById("notesList").innerHTML += content;
        index++;
    }

}
readNote();


// create 
pNotes.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        let obj = {
            "title": "1",
            "text": pNotes.textContent,
        };
        dataNote.push(obj);
        readNote();
    }
});
const noteTitle = document.getElementById("note-title");
const notetext = document.getElementById("note-content");
*/

const addBtn = document.getElementById("add-note-btn");
const noteTitle = document.getElementById("note-title");
const notetext = document.getElementById("note-content");
const noteList = document.querySelector(".notesList");


// 2 get data
const allNotes = JSON.parse(localStorage.getItem("allNotes"));
if (allNotes) {
    allNotes.forEach(eletxt => addNote(eletxt));
}
// ✅
addBtn.addEventListener("click", () => addNote());

function addNote(text = { title: "", content: "" }) {
    const noteEle = document.createElement("div");
    noteEle.classList.add("note");
    noteEle.innerHTML =
        `
        <h2>${noteTitle.value}</h2>
        <p>${notetext.value}</p>
        <button id="delete-note" class="btn"><i class="fa-solid fa-trash-can"></i></button>
    `;
    // note'un içindeki silme btn'u
    noteEle.querySelector("button").addEventListener("click", function () {
        noteEle.remove();
        getsNote();
    });

    noteList.appendChild(noteEle);

}

// ana silme btn'u✅
const deleteBtn = document.getElementById("delete-note");
deleteBtn.addEventListener("click", function () {
    noteList.remove();
    getsNote();
});
// 1 set data

function getsNote() {
    const noteElements = document.querySelectorAll("textarea");
    const allNotes = [];
    noteElements.forEach(note => allNotes.push(note.value));
    localStorage.setItem("allNotes", JSON.stringify(allNotes));
} 