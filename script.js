const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

// Click event listener
addBtn.addEventListener("click", function () {
    addNote();
});

// Save button function
const saveNotes = () => {
    const notes = document.querySelectorAll(".note .content");
    const titles = document.querySelectorAll(".note .title");

    const data = [];

    notes.forEach((note, index) => {
        const content = note.value;
        const title = titles[index].value;
        if (content.trim() !== "") {
            data.push({ title, content });
        }
    });

    const titlesData = data.map((item) => item.title);
    const contentData = data.map((item) => item.content);

    localStorage.setItem("titles", JSON.stringify(titlesData));
    localStorage.setItem("notes", JSON.stringify(contentData));
};

// Addnote button function
const addNote = (text = "", title = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="icons">
         <i class="save fas fa-save" style="color:red" title="Save"></i>
         <i class="edit fas fa-edit" style="color:green" title="Edit"></i>
         <i class="trash fas fa-trash" style="color:yellow" title="Delete"></i> 
    </div>
    <div class="title-div">
        <textarea class="title" placeholder="Write the title ..." disabled>${title}</textarea>
    </div>
    <textarea class="content" placeholder="Note down your thoughts ..." disabled>${text}</textarea>
    `;


    const titleArea = note.querySelector(".title");
    const contentArea = note.querySelector(".content");

    function handleTrashClick() {
        note.remove();
        saveNotes();
    }

    function handleSaveClick() {
        titleArea.disabled = true;
        contentArea.disabled = true;
        saveNotes();
    }

    function handleEditClick() {
        titleArea.disabled = false;
        contentArea.disabled = false;
        titleArea.focus();
    }

    const delBtn = note.querySelector(".trash");
    const saveButton = note.querySelector(".save");
    const editButton = note.querySelector(".edit");

    delBtn.addEventListener("click", handleTrashClick);
    saveButton.addEventListener("click", handleSaveClick);
    editButton.addEventListener("click", handleEditClick);

    main.appendChild(note);
    saveNotes();
};

// Load saved notes
function loadNotes() {
    const titlesData = JSON.parse(localStorage.getItem("titles")) || [];
    const contentData = JSON.parse(localStorage.getItem("notes")) || [];

    for (let i = 0; i < Math.max(titlesData.length, contentData.length); i++) {
        addNote(contentData[i], titlesData[i]);
    }
}
loadNotes();
