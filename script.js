document.getElementById("bt").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  let c = document.getElementById("c").value;
  let f = document.getElementById("f").value;
  let oc = (c * 9) / 5 + 32;
  let of = ((f - 32) * 5) / 9;
  document.getElementById("oc").innerHTML = oc;
  document.getElementById("of").innerHTML = of;
}
