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
    document.getElementById('pic').src = json.meals[0].strMealThumb;
    document.getElementById('name').innerHTML = json.meals[0].strMeal;
    document.getElementById('sub').innerHTML = json.meals[0].strArea;
    document.getElementById('price').innerHTML = sessionStorage.getItem(json.meals[0].strMeal+'_price')
    document.getElementById('quantity').innerHTML = sessionStorage.getItem(json.meals[0].strMeal+'_quantity')
  })();

  function clickCounter() {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
      sessionStorage.clickcount = 1;
      }
    document.getElementById("lblCartCount").innerHTML = sessionStorage.clickcount;
  }

  if (sessionStorage.clickcount) {
      document.getElementById("lblCartCount").innerHTML = sessionStorage.clickcount;
  }