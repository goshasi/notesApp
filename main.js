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
*/