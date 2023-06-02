let main = document.querySelector("main");
let svg = document.getElementById("svg");
let atext = document.getElementById("atext");
let ssize = document.getElementById("size");
let tf = document.getElementById("textf");
let select = document.getElementById("ff");
// gl var
let svgh = 0;
let svgw = 0;
let background = false;
let targetim = undefined;
let firstc = true;
let targettext = undefined;
let targetremovei = undefined;
let targetremovet = undefined;

let xtext = 30;
let ytext = 50;

let tfd = false;

svg.style.width = main.clientWidth;
//console.log(main.clientWidth)
svg.style.height = main.clientHeight;

let back = document.querySelectorAll(".back");
back.forEach((item) => {
  item.onclick = fun1n;
});

function fun1n(event) {
  background = true;
  let url = event.target.src;
  let picw = event.target.clientWidth;
  let pich = event.target.clientHeight;
  let mw = main.clientWidth;
  let mh = main.clientHeight;

  svg.style.backgroundImage = "url(" + url + ")";
  svg.style.backgroundSize = "cover";
  console.log(pich + " " + picw);
  let ver = pich / picw;
  if (ver * mw > mh) {
    console.log("true");
    let h = mh / ver;
    h = h - 10;
    let w = h * ver;
    console.log(h);
    console.log(w);
    svg.style.width = h + "px";
    svg.style.height = w + "px";
    svgh = w.toFixed(3);
    svgw = h.toFixed(3);
    svgh = parseFloat(svgh);
    svgw = parseFloat(svgw);
  } else {
    console.log("false");
    //svg.setAttribute("viewBox", "0,0 " +picw+ " "+pich)
    let w = mw;
    let h = w * ver;
    svg.style.width = w + "px";
    svg.style.height = h + "px";
    svgh = h.toFixed(3);
    svgw = w.toFixed(3);
    svgh = parseFloat(svgh);
    svgw = parseFloat(svgw);
  }
}

let img = document.querySelectorAll(".pict");
let imgid = undefined;
let ofimx = 0;
let ofimy = 0;

img.forEach((item) => {
  item.addEventListener("mousedown", (event) => {
    //console.log(item.id)
    ofimx = event.offsetX;
    ofimy = event.offsetY;
    imgid = item.id;
  });
  item.addEventListener("mouseup", (event) => {
    imgid = undefined;
    //console.log(event)
  });
});

svg.addEventListener("dragover", (event) => {
  if (background) {
    event.preventDefault();
  }
  //console.log("test")
});
svg.addEventListener("drop", (event) => {
  //console.log(event)
  //console.log(event.offsetX+" "+ event.offsetY)
  if (imgid != undefined) {
    if (imgid != "atext") {
      let image = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "image"
      );
      let src = document.getElementById(imgid).getAttribute("src");
      image.setAttribute("href", src);

      image.setAttribute("height", "100px");
      image.setAttribute("x", event.offsetX - ofimx);
      image.setAttribute("y", event.offsetY - ofimy);
      svg.append(image);

      image.addEventListener("mousedown", (event) => {
        targetim = event.target;
      });

      image.addEventListener("mouseup", (event) => {
        targetim = undefined;
        firstc = true;
      });

      image.addEventListener("click", (event) => {
        event.stopPropagation();
        targetremovei = event.target;
      });

      imgid = undefined;
    }
    if (imgid == "atext") {
      xtext = event.offsetX - ofimx;
      ytext = event.offsetY;
      createtext();
    }
  }
});

svg.addEventListener("mousemove", (event) => {
  event.stopPropagation();
  if (targetim != undefined) {
    if (targetim.nodeName == "text") {
      if (firstc) {
        let x = targetim.getBoundingClientRect()["x"];
        let y = targetim.getBoundingClientRect()["y"];
        xp = event.x - x;
        firstc = false;
      }
      targetim.setAttribute("x", event.offsetX - xp);
      targetim.setAttribute("y", event.offsetY);
    } else {
      if (firstc) {
        let x = targetim.getBoundingClientRect()["x"];
        let y = targetim.getBoundingClientRect()["y"];
        xp = event.x - x;
        yp = event.y - y;
        // console.log(xp)
        firstc = false;
      }
      targetim.setAttribute("x", event.offsetX - xp);
      targetim.setAttribute("y", event.offsetY - yp);
    }
  }
});

window.addEventListener("mousemove", (event) => {
  targetim = undefined;
  firstc = true;
});

atext.onclick = createtext;

function createtext(event) {
  let eingt = prompt("enter Text");
  let textt = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  textt.textContent = eingt;
  textt.setAttribute("font-size", "48px");
  textt.style.fontFamily = "times new roman";

  textt.setAttribute("x", xtext);
  textt.setAttribute("y", ytext);
  svg.appendChild(textt);
  xtext = 30;
  ytext = 50;

  textt.addEventListener("mousedown", (event) => {
    //console.log(event)
    targetim = event.target;
    console.log(event.target.nodeName);
  });

  textt.addEventListener("dblclick", (event) => {
    ssize.disabled = false;
    tf.disabled = false;
    select.disabled = false;
    tf.value = event.target.textContent;
    let size = event.target.getAttribute("font-size");
    size = size.replace("px", "");
    ssize.value = size;
    targettext = event.target;

    let hff = targettext.style.fontFamily;
    hff = hff.replace('"', "");
    hff = hff.replace('"', "");
    console.log(hff);
    select.value = hff;

    targetremovet = event.target;
  });

  textt.addEventListener("click", (event) => {
    event.stopPropagation();
    targetremovet = event.target;
    //console.log(targetremovet)
  });
}

ssize.addEventListener("input", (event) => {
  if (targettext != undefined) {
    // console.log(ssize.value)
    targettext.setAttribute("font-size", ssize.value + "px");
  }
});

ssize.addEventListener("mouseup", (event) => {
  //ssize.disabled=true
  //targettext=undefined
});

svg.addEventListener("mouseup", (event) => {
  targetim = undefined;
  firstc = true;
});

tf.addEventListener("keyup", (event) => {
  event.stopPropagation();
  if (targettext != undefined) {
    targettext.textContent = tf.value;
  }
});

tf.addEventListener("mousedown", (event) => {
  tfd = true;
  //console.log(tfd)
});
tf.addEventListener("mouseup", (event) => {
  tfd = false;
  // console.log(tfd)
});

window.addEventListener("click", (event) => {
  if (!tfd) {
    if (tf.value == "") {
      if (targettext != undefined) {
        svg.removeChild(targettext);
      }
    }
    targettext = undefined;
    ssize.disabled = true;
    tf.disabled = true;
    select.disabled = true;

    tf.value = "";
    targetremovei = undefined;
    targetremovet = undefined;
  }
  tfd = false;
});

tf.addEventListener("click", (event) => {
  event.stopPropagation();
});

ssize.addEventListener("click", (event) => {
  event.stopPropagation();
});

select.addEventListener("click", (event) => {
  event.stopPropagation();
});

function fontf(event) {
  if (targettext != undefined) {
    targettext.style.fontFamily = select.value;
  }
}

window.addEventListener("keyup", (event) => {
  if (event.key == "Delete") {
    console.log(targetremovet);
    if (targetremovei != undefined) {
      svg.removeChild(targetremovei);
    }
    if (targetremovet != undefined) {
      svg.removeChild(targetremovet);
      tf.value = "";
    }
  }
});

function load2() {
  let xmls = new XMLSerializer();
  let tj = xmls.serializeToString(svg);

  let t = tj.replace("width: " + svgw + "px;", "");
  t = t.replace("width: " + svgw.toFixed(2) + "px;", "");
  t = t.replace("width: " + svgw.toFixed(1) + "px;", "");
  t = t.replace("width: " + svgw.toFixed(0) + "px;", "");

  t = t.replace("height: " + svgh + "px;", "");
  t = t.replace("height: " + svgh.toFixed(0) + "px;", "");
  t = t.replace("height: " + svgh.toFixed(1) + "px;", "");
  t = t.replace("height: " + svgh.toFixed(2) + "px;", "");

  t = t.replace(
    'background-size: cover;"',
    '"  viewBox="0 0 ' + svg.clientWidth + " " + svg.clientHeight + '"'
  );
  console.log(tj);
  console.log(t);

  $record = { card: t };
  fetch("create.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify($record),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}