var c1 = document.querySelectorAll("circle") [0],
    c2 = document.querySelectorAll("circle") [1],
    c3 = document.querySelectorAll("circle") [2],
    c4 = document.querySelectorAll("circle") [3],
    path = document.querySelectorAll("path") [0],
    drag, d = {x1: 30, y1: 120, x2: 85, y2: 30, x3: 125, y3: 30, x4: 180, y4: 120};

window.addEventListener("mousedown", mousedownHandler);
function mousedownHandler(e) {
 if (e.target instanceof SVGCircleElement) {
 }
 drag = e.target;
 drag.x = e.target.getAttribute("cx");
 drag.y = e.target.getAttribute("cy");
 drag.clientX = e.clientX;
 drag.clientY = e.clientY;

 window.addEventListener("mousemove", mousemoveHandler);
 window.addEventListener("mouseup", mouseupHandler);

}
function mousemoveHandler(e) {
drag.setAttribute("cx", e.clientX - (drag.clientX - drag.x));
drag.setAttribute("cy", e.clientY - (drag.clientY - drag.y));
 switch (drag) {
  case c1:
   d.x1 = drag.getAttribute("cx");
   d.y1 = drag.getAttribute("cy"); break;
  case c2:
   d.x2 = drag.getAttribute("cx");
   d.y2 = drag.getAttribute("cy"); break;
  case c3:
   d.x3 = drag.getAttribute("cx");
   d.y3 = drag.getAttribute("cy"); break;
  case c4:
   d.x4 = drag.getAttribute("cx");
   d.y4 = drag.getAttribute("cy"); break;
 }

 path.setAttribute("d", `M${d.x1} ${d.y1} C${d.x2} ${d.y2} ${d.x3} ${d.y3} ${d.x4} ${d.y4}`);
 document.getElementById("path").innerHTML = path.getAttribute("d");
}

function mouseupHandler(e) {
 window.removeEventListener("mousemove", mousemoveHandler);
 window.removeEventListener("mouseup", mouseupHandler);
}

