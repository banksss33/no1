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
//                         <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="">Go somewhere</a>
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
                            <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${json.meals[0].idMeal}">Detail</a>
                          </div>
                        </div>`;

    document.getElementById(
      "load_modal"
    ).innerHTML += ` 
    <div class="modal fade" id="${json.meals[0].idMeal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="${json.meals[0].idMeal}">รายละเอียด</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>ชื่อ: <span>${json.meals[0].strMeal}</span></p>
            <p>ราคา: <span>ไม่มีวะ ชิหัย</span></p>
            <p>คงเหลือ: <span>รอ sessionstorage</span></p>
          </div>
          <div class="modal-footer">
            
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
            <button type="button" class="btn btn-primary">รายละเอียด</button>
          </div>
        </div>
      </div>
    </div>
    `;
  })();
}
