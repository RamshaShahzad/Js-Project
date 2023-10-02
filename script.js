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
          <img src="${movie.Poster}" alt="Image not found">
          <p>Title: ${movie.Title}</p>
          <p>Year: ${movie.Year}</p>
          </div>
          </li>
          `;
        ulTag.innerHTML = ulTag.innerHTML + listItem;
      }
    });
};
