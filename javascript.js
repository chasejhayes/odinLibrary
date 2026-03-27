const myLibrary = [];

function Book(title, author, page_count){
    this.title = title;
    this.author = author;
    this.page_count = page_count;

}

function addBookToLibrary(title, author, page_count){
    let book = new Book(title, author, page_count);
    book.id = crypto.randomUUID();
    return myLibrary.push(book);
}

addBookToLibrary("A book title", "An author", 1234)


console.log(myLibrary)

addBookToLibrary("1984", "Herman Melville", 9002)

console.log(myLibrary)

addBookToLibrary("Unspeakable", "Jack Something", 225)



function displayBooks(){
    const container = document.querySelector("#container")
    for (const book of myLibrary){
        const bookCard = document.createElement("div");
        bookCard.classList.add("book");
        container.appendChild(bookCard);
        bookCard.textContent = book.title;

        const bookTitle = document.createElement("div");
        bookCard.appendChild(bookTitle);
        bookTitle.classList.add("info");

        const title = document.createElement("div");
        bookTitle.appendChild(title);
        title.textContent = "Title:";

        const titleText = document.createElement("div");
        bookTitle.appendChild(titleText);
        titleText.textContent = book.title;

        const bookAuthor = document.createElement("div");
        bookCard.appendChild(bookAuthor);
        bookAuthor.classList.add("info");

        const author = document.createElement("div");
        bookAuthor.appendChild(author);
        author.textContent = "Author:";

        const authorText= document.createElement("div");
        bookAuthor.appendChild(authorText);
        authorText.textContent = book.author;

        const pageNum = document.createElement("div")
        bookCard.appendChild(pageNum);
        pageNum.classList.add("info");

        const num = document.createElement("div");
        pageNum.appendChild(num);
        num.textContent = "Page Number:";

        const numText= document.createElement("div");
        pageNum.appendChild(numText);
        numText.textContent = book.page_count;
    }
}

displayBooks()

const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    return addBookToLibrary(formObject)
})