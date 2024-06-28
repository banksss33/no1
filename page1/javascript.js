function fetchJSON(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}

(async () => {
  var json = await fetchJSON("https://dummyjson.com/products");
  console.log(json.products);
})();




function initProduct(Json_data){
    json.products.forEach(element => {
        document.getElementById(
            "show_products"
          ).innerHTML += ` <div class="card" style="width: 18rem">
                      <img src="${element}" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>`;
    });
}