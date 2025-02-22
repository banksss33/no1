function fetchJSON(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}

for (let i = 0;i < 5;i++){
  
}

foodDetail = {
  id,
  price,
  quantity
}

food_list = {
  best_seller: [],
  popular: [],
  discount: [],
  other: []
}

for (let i = 0; i < 6; i++) {
  (async () => {
    var json = await fetchJSON(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    document.getElementById('carousel_items').innerHTML += `
            <div class="carousel-item active">
              <img src="..." class="d-block w-100" alt="...">
            </div>`

    document.getElementById(
      "show_products"
    ).innerHTML += ` <div class="card p-0 shadow" style="width: 22rem">
                          <img src="${json.meals[0].strMealThumb}" class="w-100 card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">${json.meals[0].strMeal}</h5>
                            <p class="card-subtitle">"${json.meals[0].strArea}"</p>
                            <a href="#" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#${json.meals[0].idMeal}">Detail</a>
                          </div>
                        </div>`;

    let price = parseInt(Math.random() * (420 - 40) + 40);
    let quantity = parseInt(Math.random() * (420 - 40) + 40);
    sessionStorage.setItem(json.meals[0].strMeal + "_quantity", quantity);
    sessionStorage.setItem(json.meals[0].strMeal + "_price", price);
    document.getElementById("load_modal").innerHTML += ` 
    <div class="modal fade" id="${
      json.meals[0].idMeal
    }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="${
              json.meals[0].idMeal
            }">รายละเอียด</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>ชื่อ: <span>${json.meals[0].strMeal}</span></p>
            <p>ราคา: <span>${
              sessionStorage.getItem(json.meals[0].strMeal + "_price") + " บาท"
            }</span></p>
            <p>คงเหลือ: <span>${
              sessionStorage.getItem(json.meals[0].strMeal + "_quantity") +
              " จาน"
            }</span></p>
          </div>
          <div class="modal-footer">
            
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
            <a type="button" class="btn btn-primary" href="../page3/index.html?id=${
              json.meals[0].idMeal
            }">รายละเอียด</a>
          </div>
        </div>
      </div>
    </div>
    `;
  })();
}

addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.clickcount) {
    document.getElementById("lblCartCount").innerHTML =
      sessionStorage.clickcount;
  }
});
