const clickHandler = () => {
  const search = document.getElementById("search").value;
  if (!search) {
    return;
  }
  fetch(`http://www.omdbapi.com/?s=${search}&apikey=1f73a5a2`)
    .then((resp) => {
      return resp.json();
    })

    .then((data) => {
      // console.log(data);
      console.log(data.Search[0].Title);
      // UL tag id
      let mydata = data.Search;
      const ulTag = document.getElementById("movieList");
      ulTag.innerHTML = "";
      const year = document.getElementById("filter").value;
      console.log(year);
      if (year) {
        mydata = mydata.filter((movie) => movie.Year >= Number(year));
      }
      console.log(mydata);
      mydata.map(resultMovies);
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
