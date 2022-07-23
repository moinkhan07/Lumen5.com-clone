document.querySelector("form").addEventListener("submit", okkkk);
let form = document.querySelector("form");
function okkkk(event) {
  event.preventDefault();
  let card_no = form.cardno.value;
  let cvv = form.cvv.value;

  if (card_no == "1234567812345678" && cvv == "123") {
    alert("Success");
  } else {
    alert("Check you card number again bikhaaari");
  }
}

let data = JSON.parse(localStorage.getItem("price"));
let h1 = document.getElementById("laao");
h1.innerText = data;
let h5 = document.getElementById("lto");
h5.innerText = data;
