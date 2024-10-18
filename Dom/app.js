// const wrapper = document.getElementById("wrapper");
// console.log(wrapper);
// const bookTitles = document.getElementsByClassName("name")
// console.log(bookTitles);
// // Array.from(bookTitles)
// // console.log(Array.isArray(bookTitles))
// const arrayResult = Array.from(bookTitles);

// arrayResult.forEach((element) => {
//     console.log(element.textContent)
// });

// const lis = document.getElementsByTagName('li')
// console.log(lis)

// const pageBanner = document.querySelector("#page-banner")
// console.log(pageBanner)

// const booToRead = document.querySelectorAll(".title")
// console.log(booToRead)
// booToRead.forEach(Element => (
//     console.log(Element)
// ))

// const pageBanner = document.querySelector(".name");
// console.log(pageBanner.childElementCount)

// const bookTitle = document.querySelectorAll(".name");

// bookTitle.forEach(element => {
//     console.log(element.textContent)
//     console.log(element.textContent += " text");
    
// })


//we are now wor king on delete...
//query to get exactly what you want to delete
const theuls = document.querySelector("#book-list ul");

console.log(theuls)

//event listener to to target click`
theuls.addEventListener('click', (event) => {
    console.log(event)
})