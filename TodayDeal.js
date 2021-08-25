let bestdealData = [
  {
    name: "G.S skill trident 16 GB 288 Pin DDR-4 3600 intel XMP",
    price: 9523,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/20-232-728-V01.jpg",
  },
  {
    name: "ABS Gaming PC trident 16 GB 288 Pin DDR-4 3600 intel i7",
    price: 178079,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/83-360-169-01.jpg",
  },

  {
    name: "G.S skill trident 16 GB 288 Pin DDR-4 3600 intel XMP",
    price: 9523,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/20-232-907-V01.jpg",
  },
  {
    name: "ASUUS Rapture GT AX 11000 GigaBite Wifi Router ",
    price: 39749,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/33-320-264-01.jpg",
  },
];

if (localStorage.getItem("bestdealData") == null) {
  localStorage.setItem("bestdealData", JSON.stringify(bestdealData));
}

function appendpro() {
  let data = JSON.parse(localStorage.getItem("bestdealData"));
  let mainDiv = document.getElementById("bestdeal_products");
  data.forEach(function (el) {
    let div = document.createElement("div");
    let divimg = document.createElement("div");
    divimg.setAttribute("id", "divimgP");
    let divPara = document.createElement("div");
    divPara.setAttribute("id", "divparaP");
    let p_name = document.createElement("p");
    p_name.innerHTML = el.name;
    p_name.style.fontSize = "14px";
    p_name.style.color = "Black";
    p_name.style.padding = "0";
    p_name.style.overflow = "hidden";
    p_name.setAttribute("class", "Tpname");

    let rating = document.createElement("p");
    rating.setAttribute("id", "rateT");
    rating.innerHTML = `<p><i class="fas fa-egg"></i><i class="fas fa-egg"></i><i class="fas fa-egg"></i><i class="fas fa-egg"></i><i class="fas fa-egg"></i><span> ( ${Math.round(
      Math.random() * 1000
    )} )</span></p>`;

    let p_Price = document.createElement("ul");
    p_Price.innerHTML = "₹ " + el.price;
    p_Price.style.fontSize = "22px";
    p_Price.setAttribute("class", "Tprice");

    let img = document.createElement("img");
    img.src = el.img;
    divimg.append(img);
    divPara.append(rating, p_name, p_Price);
    div.append(divimg, divPara);
    mainDiv.append(div);

    //   img.addEventListener("click", function () {
    //     window.location.href = "producdetail.html";
    //   });
    div.addEventListener("click", function () {
      window.open("showProductdetails.html");
      showdetail(el);
    });
  });
}
appendpro();

function showdetail(el) {
  localStorage.setItem("prodetaails", JSON.stringify(el));
}
