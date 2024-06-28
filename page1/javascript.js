function fetchJSON(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}

// (async () => {
//   var json = await fetchJSON(
//     "https://www.themealdb.com/api/json/v1/1/random.php"
//   );
//   console.log(json.meals[0]);
// })();

// json.forEach((element) => {
//   document.getElementById(
//     "show_products"
//   ).innerHTML += ` <div class="card" style="width: 18rem">
//                       <img src=".." class="card-img-top" alt="..." />
//                       <div class="card-body">
//                         <h5 class="card-title">Card title</h5>
//                         <p class="card-text">
//                           Some quick example text to build on the card title and make up the
//                           bulk of the card's content.
//                         </p>
//                         <a href="#" class="btn btn-primary">Go somewhere</a>
//                       </div>
//                     </div>`;
// });

for (let i = 0; i < 6; i++) {
  (async () => {
    var json = await fetchJSON(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    console.log(json.meals[0]);
    document.getElementById(
        "show_products"
      ).innerHTML += ` <div class="card" style="width: 18rem">
                          <img src="${json.meals[0].strMealThumb}" class="w-100 card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">${json.meals[0].strMeal}</h5>
                            <a href="#" class="btn btn-primary">Detail</a>
                          </div>
                        </div>`;
  })();
 
}
