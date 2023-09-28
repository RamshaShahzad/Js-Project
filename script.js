const clickHandler = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=1f73a5a2")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log("resp: ", resp);