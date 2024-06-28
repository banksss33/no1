const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get('id'))
function fetchJSON(url) {
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
  }

(async () => {
    var json = await fetchJSON(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchParams.get('id')}`
    );
    console.log(json)
  })();