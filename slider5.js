let slider5Data = [
  {
    name: "AMD Rayzon 5 5600X 3 GHZ Desktop Processor",
    price: 38256,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/1B4-005X-001D3-V01.jpg",
    rating: "",
  },
  {
    name: "Arctic silver AS%-3.G Thermal Compound",
    price: 716,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/1Z4-0002-013V6-V02.jpg",
    rating: "",
  },
  {
    name: "Western Digital WD black SN750 NVMe M > 2 1 TB ...",
    price: 11663,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/22-234-427-01.jpg",
  },
  {
    name: "Western Digital WD NVMe M>2 2280 1 TB  static Drive",
    price: 7919,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/22-231-533-V15.jpg",
  },
  {
    name: "AMD Rayzon 5 5600X 3 GHZ Desktop Processor",
    price: 38256,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/1B4-005X-001D3-V01.jpg",
    rating: "",
  },
  {
    name: "Arctic silver AS%-3.G Thermal Compound",
    price: 716,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/1Z4-0002-013V6-V02.jpg",
    rating: "",
  },
  {
    name: "Western Digital WD black SN750 NVMe M > 2 1 TB ...",
    price: 11663,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/22-234-427-01.jpg",
  },
  {
    name: "Western Digital WD NVMe M>2 2280 1 TB  static Drive",
    price: 7919,
    img: "https://c1.neweggimages.com/ProductImageCompressAll300/22-231-533-V15.jpg",
  },
];

if (localStorage.getItem("slider5Data") == null) {
  localStorage.setItem("slider5Data", JSON.stringify(slider5Data));
}

function appendpro() {
  let data = JSON.parse(localStorage.getItem("slider5Data"));
  let mainDiv = document.getElementById("slider5_products");
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
       window.location.href = "showProductdetails.html";
      showdetail(el);
    });
  });
}
appendpro();

// onclikc event for slider
function slider() {
  let sapn = document.getElementById("slider5").getElementsByTagName("span");
  let div = document.getElementById("slider5").getElementsByTagName("div");
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
