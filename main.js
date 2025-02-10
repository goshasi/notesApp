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
// 2 get data
/*
const allNotes = JSON.parse(localStorage.getItem("allNotes"));
if (allNotes) {
    allNotes.forEach(eletxt => addNote(eletxt));
}

let allNote = localStorage.getItem("key");
allNote.forEach(item => {
    addNote(item);
});
*/



const addBtn = document.getElementById("add-note-btn");
const noteTitle = document.getElementById("note-title");
const textareaEl = document.querySelector("textarea");
const noteList = document.querySelector(".notesList");

// load all notes
window.addEventListener("load", displayNotes);

// yeni note ekleme with event
addBtn.addEventListener("click", () => addNote());

function addNote() {
    if (noteTitle.value.trim() === "" || textareaEl.value.trim() === "") {
        alert("please enter ur title and note!");
        return;
    }

    const noteEle = document.createElement("div");
    noteEle.classList.add("note");
    noteEle.innerHTML =
        `
        <h2>${noteTitle.value}</h2>
        <p>${textareaEl.value}</p>
        <button id="delete-note" class="btn"><i class="fa-solid fa-trash-can"></i></button>
        `;

    // note'un içindeki silme btn'u✅
    noteEle.querySelector("#delete-note").addEventListener("click", function () {
        noteEle.remove();
        removeNoteFromLocalStorage(note.title, note.content);
    });

    noteList.appendChild(noteEle);
    getsNote(noteTitle.value, textareaEl.value);

    // notu ekledikten sonra texterea and inputu boşalt
    noteTitle.value = "";
    textareaEl.value = "";
}

//🚨localStorage note silme func.u
function removeNoteFromLocalStorage(title, content) {
    const allNotes = JSON.parse(localStorage.getItem("allNotes")) || [];
    const updatedNotes = allNotes.filter((note) => note.title !== title || note.content !== content);
    localStorage.setItem("allNotes", JSON.stringify(updatedNotes));
}

// localStorage note divi göstermeI🤖
function displayNotes() {
    const allNotes = JSON.parse(localStorage.getItem("allNotes")) || [];

    allNotes.forEach((note) => {
        const noteEle = document.createElement("div");
        noteEle.classList.add("note");
        noteEle.innerHTML =
            `
            <h2>${note.title}</h2>
            <p>${note.content}</p>
            <button id="delete" class="btn"><i class="fa-solid fa-trash-can"></i></button>
            `;

        // note'un içindeki silme btn'u✅
        noteEle.querySelector("#delete").addEventListener("click", function () {
            noteEle.remove();
            removeNoteFromLocalStorage(note.title, note.content);
        });

        noteList.appendChild(noteEle);
    });
}

// ana silme btn'u✅
const deleteBtn = document.getElementById("delete-note");
deleteBtn.addEventListener("click", function () {
    noteList.remove();
    localStorage.removeItem("allNotes");
});


// set data in local storage✅
function getsNote(title, content) {
    const note = { title: title, content: content };
    /*
    مهم نسوي كيت عشان نجيب البيانات القديمة بأي شي بنسويه 
    هنا جبنا البيانات القدبمة هلق هون بما ان اول مره رح نضيف بيانات للوكال
    فحيكون فارغ عشان كذا اول قيمه حتكون ارري فارغة
    */
    const allNotes = JSON.parse(localStorage.getItem("allNotes")) || [];
    allNotes.push(note);

    localStorage.setItem("allNotes", JSON.stringify(allNotes));
}

/*
function getsNote() {
    const allNotes = [];
    const noteElements = document.querySelectorAll(".note");
    //console.log(noteElements);

    noteElements.forEach(note => allNotes.push(note));
    localStorage.setItem("allNotes", JSON.stringify(allNotes));

}
*/