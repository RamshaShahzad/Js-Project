// const key = "1f73a5a2";

// fetch("http://www.omdbapi.com/?s=tt3896198&apikey=1f73a5a2")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const clickHandler = () => {
  const search = document.getElementById("search").value;

  fetch(`http://www.omdbapi.com/?s=${search}&apikey=1f73a5a2`)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data.Search[0].Title);
      // UL tag id
      const ulTag = document.getElementById("movieList");
      data.Search.map(resultMovies);
      function resultMovies(movie) {
        const listItem = `
          <li>
          <div>
          <p>Title: ${movie.Title}</p>
          <p>Year: ${movie.Year}</p>
          <img src="${movie.Poster}" alt="Image not found">
          </div>
          </li>
          `;
        ulTag.innerHTML = ulTag.innerHTML + listItem;
      }
    });
};
