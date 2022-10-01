var txt = document.getElementById("txt");
var btn = document.getElementById("btn");
var ttable = document.getElementById("tbl");
var sum = 0;
btn.addEventListener("click", function () {
  td = document.createElement("td");
  td.innerText = +txt.value;
  tr = document.createElement("tr");
  tr.appendChild(td);
  console.log(tr);
  sum += Number(td.innerHTML);
  ttable.appendChild(tr);
  console.log(sum);
  p.innerHTML = "result : " + sum;
});
