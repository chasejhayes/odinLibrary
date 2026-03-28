let myLibrary = [];

function Book(title, author, page_count) {
    this.title = title;
    this.author = author;
    this.page_count = page_count;

}

function addBookToLibrary(title, author, page_count) {
    let book = new Book(title, author, page_count);
    book.id = crypto.randomUUID();
    return myLibrary.push(book);
}



function displayBooks() {
    const container = document.querySelector("#container")
    let newBook = myLibrary.at(-1)

    const bookCard = document.createElement("div");
    bookCard.classList.add("book");
    container.appendChild(bookCard);
    bookCard.textContent = newBook.title;
     bookCard.id = newBook.id;

    const bookTitle = document.createElement("div");
    bookCard.appendChild(bookTitle);
    bookTitle.classList.add("info");

    const title = document.createElement("div");
    bookTitle.appendChild(title);
    title.textContent = "Title:";

    const titleText = document.createElement("div");
    bookTitle.appendChild(titleText);
    titleText.textContent = newBook.title;

    const bookAuthor = document.createElement("div");
    bookCard.appendChild(bookAuthor);
    bookAuthor.classList.add("info");

    const author = document.createElement("div");
    bookAuthor.appendChild(author);
    author.textContent = "Author:";

    const authorText = document.createElement("div");
    bookAuthor.appendChild(authorText);
    authorText.textContent = newBook.author;

    const pageNum = document.createElement("div")
    bookCard.appendChild(pageNum);
    pageNum.classList.add("info");

    const num = document.createElement("div");
    pageNum.appendChild(num);
    num.textContent = "Page Number:";

    const numText = document.createElement("div");
    pageNum.appendChild(numText);
    numText.textContent = newBook.page_count;

    const removeButton = document.createElement("button");
    bookCard.appendChild(removeButton);
    removeButton.textContent = "Delete";

    removeButton.classList = "delete"

    removeButton.addEventListener("click", () => {
        myLibrary = myLibrary.filter(book=>book.id !== bookCard.id )
        bookCard.remove()
    })

    const readButton = document.createElement("button");
    bookCard.appendChild(readButton);
    readButton.textContent = "Toggle Read"

    const toReadOrNotToRead = document.createElement("div");
    bookCard.appendChild(toReadOrNotToRead);
    toReadOrNotToRead.textContent = "Have Not Read"

    let clickCounter = 1;
    readButton.addEventListener("click", () => {
        ++clickCounter
        if (clickCounter%2 == 0){
        toReadOrNotToRead.textContent = "Have Read"}
        else {
            toReadOrNotToRead.textContent = "Have Not Read"

        }

    })



}



const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    console.log(fd)
    const obj = Object.fromEntries(fd)
    addBookToLibrary(obj.title, obj.author, obj.page_count);
    displayBooks()
    dialog.close()
    form.reset()
})


// should delete from the array too
