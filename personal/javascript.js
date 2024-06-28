addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.clickcount) {
      document.getElementById("lblCartCount").innerHTML = sessionStorage.clickcount;
    }
  });