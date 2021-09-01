console.log("hello world");


let message = document.querySelector('#message')

function addMovie(event) {
  event.preventDefault();
  const inputField = document.querySelector("input");
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

function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = "Movie Deleted!"
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked")
  if(event.target.classList.contains("checked")){
        message.textContent = "Movie Watched"
  } else {
      message.textContent = "Movie Added Back"
  }
}

document.querySelector("form").addEventListener("submit", addMovie);
