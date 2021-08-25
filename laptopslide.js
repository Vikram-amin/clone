let laptopData = [
  {
    name: "MSI GE Series GE66 Raider 11UH-227 15.6 4K/UHD Intel Core i9 11th Gen",
    price: 338256,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/34-155-884-V25.jpg",
  },
  {
    name: "MSI GE Series GE66 Raider 11UH-227 15.6 4K/UHD Intel Core i9 11th Gen",
    price: 15716,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/34-156-019-S01.jpg",
  },
  {
    name: "ASUS TUF Series GE66 Raider 11UH-227 15.6 4K/UHD Intel Core i9 11th Gen",
    price: 121663,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/34-235-898-V01.jpg",
  },
  {
    name: "MSI EG 66 Series GE66 Raider 11UH-227 15.6 4K/UHD Intel Core i9 11th Gen",
    price: 217919,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/34-155-842-V02.jpg",
  },
  {
    name: "SAMSUNG 870 EVO Sereies 2.5 SATA internal solid state ",
    price: 14091,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/20-147-793-V07.jpg",
  },
  {
    name: "accer laptop i5 7 th gen 3D NAND 1TB Internal 6GB/s 2.5 SSD",
    price: 49719,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/34-316-900-V13.jpg",
  },
];

if (localStorage.getItem("laptopData") == null) {
  localStorage.setItem("laptopData", JSON.stringify(laptopData));
}

function appendpro() {
  let data = JSON.parse(localStorage.getItem("laptopData"));
  let mainDiv = document.getElementById("laptopData_products");
  data.forEach(function (el) {
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    p_name.innerHTML = el.name;
    p_name.style.fontSize = "14px";
    p_name.style.color = "Black";
    p_name.style.padding = "0";
    p_name.style.overflow = "hidden";
    p_name.setAttribute("class", "Tname");

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
    div.append(img, rating, p_name, p_Price);
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

// onclikc event for slider
function slider() {
  let sapn = document.getElementById("laptopData").getElementsByTagName("span");
  let div = document.getElementById("laptopData").getElementsByTagName("div");
  let l = 0;
  sapn[1].onclick = () => {
    l++; //for right scroll
    for (var i of div) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-740px";
      }
      if (l == 2) {
        i.style.left = "-1480px";
      }
      if (l == 3) {
        i.style.left = "-2220px";
      }
      if (l == 4) {
        i.style.left = "-2967px";
      }
      if (l > 4) {
        l = 4;
      }
    }
  };
  sapn[0].onclick = () => {
    l--; //for left scroll
    for (var i of div) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-740px";
      }
      if (l == 2) {
        i.style.left = "-1480px";
      }
      if (l == 3) {
        i.style.left = "-2220px";
      }

      if (l < 0) {
        l = 0;
      }
    }
  };
}
slider();

function showdetail(el) {
  localStorage.setItem("prodetaails", JSON.stringify(el));
}
