const bookList = document.querySelector("#book-list ul");

bookList.addEventListener('click', (event) => {
    const deleteButton = event.target.className
    if (deleteButton == "delete") {
        const deletedBtn = event.target.parentNode;
        bookList.removeChild(deletedBtn)
    }
})


const bookForm = document.forms['add-book']
bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const theInput = bookForm.querySelector('input[type ="text"]').value.trim();

  if (theInput != "") {
    const newLi = document.createElement('li');
    const newBookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    // console.log()
    newBookName.textContent = theInput;
    deleteBtn.textContent = 'delete';

    newBookName.classList.add('name');
    deleteBtn.classList.add('delete');

    newLi.appendChild(newBookName);
    newLi.appendChild(deleteBtn);
    bookList.appendChild(newLi);
  }
      
    bookForm.querySelector('input[type ="text"]').value = "";

})

const searchForm = document.forms['search-books'].querySelector('input');
searchForm.addEventListener('keyup', (event) => {
  const input = event.target.value.toLowerCase();
  const books = bookList.getElementsByTagName('li');
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(input) != -1) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});



