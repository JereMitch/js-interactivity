console.log("hello world");


let message = document.querySelector('#message')

function addMovie(event) {
  event.preventDefault();

  let inputField = document.querySelector("input");
  let movie = document.createElement("li");
  let movieTitle = document.createElement("span");

  movieTitle.addEventListener('click', crossOffMovie)
  movieTitle.textContent = inputField.value;
  movie.appendChild(movieTitle).querySelector;
  document.querySelector("ul").appendChild(movie);

  let deleteBtn = document.createElement("button");
  deleteBtn.addEventListener('click', deleteMovie)
  deleteBtn.textContent = "x";

  movie.appendChild(deleteBtn);

  inputField.value = "";
}

document.querySelector("form").addEventListener("submit", addMovie);

function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent =  `${event.target.parentNode.firstChild.textContent} Deleted!`
  revealMessage()
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked")
  if(event.target.classList.contains("checked")){
        message.textContent = `${event.target.textContent} Watched`
  } else {
      message.textContent = `${event.target.textContent} Added Back`
  }
  revealMessage()
}

function revealMessage(){
  message.classList.remove('hide')
  setTimeout(function (){
    message.classList.add('hide')
  },1000)
}


// let name = "Jeremy"
// console.log(`${name}`)