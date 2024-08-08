const title = document.getElementsByTagName("title");
title[0].innerHTML = "Utsav";

const body_select = document.getElementsByTagName("body");
body_select[0].style.backgroundColor = "lightgray";

const header = document.createElement("header");
header.setAttribute(
  "style",
  "padding:20px 50px 20px 50px;text-align:end;border-bottom:1px solid gray;"
);
const button = document.createElement("button");
button.innerHTML = "Take me to footer";
button.setAttribute(
  "style",
  "padding:10px;cursor:pointer;color:#fdf0d5;background-color:#003049;"
);
button.addEventListener("click", function () {
  document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
});

button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "#114151";
});

button.addEventListener("mouseout", function () {
  button.style.backgroundColor = "#003049";
});

header.appendChild(button);
document.body.appendChild(header);

const main = document.createElement("main");
main.setAttribute("style", "height: 80vh; display: flex;padding:50px");

const div1 = document.createElement("div");
div1.setAttribute(
  "style",
  "width: 50%;text-align:left;font-size:40px;font-family:Arial"
);
div1.innerHTML =
  "<h1>Assignment7</h1> <li>WebPage</li><li>Using JS only</li><li>Nothing in html file</li>";

const div2 = document.createElement("div");
div2.setAttribute("style", "width: 50%;");
const img1 = document.createElement("img");
img1.src = "./assets/img/camera_lense_0.jpeg";
img1.setAttribute("style", "width:60%;height:80%;border-radius:100%");
div2.appendChild(img1);

main.appendChild(div1);
main.appendChild(div2);
document.body.appendChild(main);

const footer = document.createElement("footer");
footer.setAttribute(
  "style",
  "display:flex;border-top:1px solid gray;padding:20px 50px 0px 50px;height:50vh;text-align:center"
);
footer.setAttribute("id", "footer");
const div3 = document.createElement("div");
div3.setAttribute("style", "width: 25%;");
const img2 = document.createElement("img");
img2.src = "./assets/img/camera_lense_0.jpeg";
img2.setAttribute("style", "width:100%;height:100%;border-radius:100%");
div3.appendChild(img2);

const div4 = document.createElement("div");
div4.setAttribute("style", "width: 25%;");
div4.innerHTML =
  "<h1>Assignment7</h1> <li>WebPage</li><li>Using JS only</li><li>Nothing in html file</li>";

const div5 = document.createElement("div");
div5.setAttribute("style", "width: 25%;");
div5.innerHTML =
  "<h1>Assignment7</h1> <li>WebPage</li><li>Using JS only</li><li>Nothing in html file</li>";

const div6 = document.createElement("div");
div6.setAttribute("style", "width: 25%;");
div6.innerHTML =
  "<h1>Assignment7</h1> <li>WebPage</li><li>Using JS only</li><li>Nothing in html file</li>";

footer.appendChild(div3);
footer.appendChild(div4);
footer.appendChild(div5);
footer.appendChild(div6);
document.body.appendChild(footer);
