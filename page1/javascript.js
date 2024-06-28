function fetchJSON(url) {
    return fetch(url)
        .then(response => response.json())
        .catch((error) => {
            console.log(error);
        });
}

(async () => {
    var json = await fetchJSON('https://dummyjson.com/products');
    console.log(json.products)
})();