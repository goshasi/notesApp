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
const textareaEl = document.querySelector("textarea");
const noteList = document.querySelector(".notesList");


// 2 get data
/*
const allNotes = JSON.parse(localStorage.getItem("allNotes"));
if (allNotes) {
    allNotes.forEach(eletxt => addNote(eletxt));
}

let allNote = localStorage.getItem("keyname");
allNote.forEach(item => {
    addNote(item);
});
*/

function getDataFromStorage() {
    return JSON.parse(window.localStorage.getItem("allNotes"));
}

// ✅
addBtn.addEventListener("click", () => addNote());

function addNote(text = { title: "", content: "" }) {
    const noteEle = document.createElement("div");
    noteEle.classList.add("note");
    noteEle.innerHTML =
        `
        <h2>${noteTitle.value}</h2>
        <p>${textareaEl.value}</p>
        <button id="delete-note" class="btn"><i class="fa-solid fa-trash-can"></i></button>
    `;
    // note'un içindeki silme btn'u
    noteEle.querySelector("#delete-note").addEventListener("click", function () {
        noteEle.remove();

    });
    getDataFromStorage();
    noteList.appendChild(noteEle);

}

// ana silme btn'u✅
const deleteBtn = document.getElementById("delete-note");
deleteBtn.addEventListener("click", function () {
    noteList.remove();
    getDataFromStorage();
});

addBtn.addEventListener("click", () => getsNote());
function getsNote() {
    const allNotes = [];
    const noteElements = document.querySelectorAll(".note");
    //console.log(noteElements);

    noteElements.forEach(note => allNotes.push(note));
    localStorage.setItem("allNotes", JSON.stringify(allNotes));

}

// 1 set data
/*
for man

addBtn.addEventListener("click", () => getsNote());

function getsNote() {
    //let allNote = document.querySelectorAll(noteEle);
    //console.log(allNote);
    localStorage.setItem("keyname", addNote());
}
getsNote();
}





function gets() {

    let titles = localStorage.getItem("valuetit");
    let texts = localStorage.getItem("valuetex");
}
gets();

function display() {
    localStorage.setItem("valuetex", textareaEl.value);
    localStorage.setItem("valuetit", noteTitle.value);
    console.log(textareaEl.value);
}
display();
*/


