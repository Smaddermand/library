//SAVE THIS TO GIT

const showNewBookForm = document.getElementById("newbook-btn") //the "NEW BOOK" button
const newBookDialog = document.getElementById("newbook-dialog") //the dialog for new book
const newBookForm = document.getElementById("newbook-form");

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return(title + " by " + author + ", " + pages + " pages, " + read)};
};

function addBookToLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

//render/shows books
function displayBooks(){
    let booksDiv = document.querySelector(".books");
    
    for (let i = 0; i < myLibrary.length; i++){
        let newBookDiv = document.createElement("div");
        let newInfo = document.createTextNode(myLibrary[i].info());
        newBookDiv.appendChild(newInfo);
        newBookDiv.className = "book";


        let deleteButton = document.createElement("button");
        let buttonText = document.createTextNode("delete");
        deleteButton.appendChild(buttonText);
        newBookDiv.appendChild(deleteButton);
        
        deleteButton.addEventListener("click", function(){
            booksDiv.removeChild(newBookDiv);
            myLibrary.splice(i, 1);
        });

        


        booksDiv.appendChild(newBookDiv);

    }
};



//displays the dialog/modal on click
showNewBookForm.addEventListener("click", () => {
    newBookDialog.showModal();

})

newBookForm.addEventListener("submit", function(event){
    event.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, read);

    //clear the previous book displays
    document.querySelector(".books").innerHTML = "";
    displayBooks();
    newBookDialog.close();
    
})

displayBooks();