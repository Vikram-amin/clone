let TopRateData = [
  {
    name: "AMD Rayzon 5 5600X 3 GHZ Desktop Processor",
    price: 38256,
    img: "https://rukminim1.flixcart.com/image/312/312/kfpq5jk0/computer/h/t/b/msi-na-gaming-laptop-original-imafw3yhmdkzmhzr.jpeg?q=70",
    rating: "",
  },
  {
    name: "Arctic silver AS%-3.G Thermal Compound",
    price: 716,
    img: "https://rukminim1.flixcart.com/image/312/312/ke353m80/computer/p/q/m/msi-original-imafuurxjxzy4zcn.jpeg?q=70",
    rating: "",
  },
  {
    name: "Western Digital WD black SN750 NVMe M > 2 1 TB ...",
    price: 11663,
    img: "https://rukminim1.flixcart.com/image/312/312/kmxsakw0/computer/f/g/t/na-laptop-msi-original-imagfq9cthg4wxwh.jpeg?q=70",
  },
  {
    name: "Western Digital WD NVMe M>2 2280 1 TB  static Drive",
    price: 7919,
    img: "https://rukminim1.flixcart.com/image/312/312/kmwcuq80/computer/d/z/k/na-gaming-laptop-acer-original-imagfp8wrqwe6v6w.jpeg?q=70",
  },
  {
    name: "SAMSUNG 870 EVO Sereies 2.5 SATA internal solid state ",
    price: 14091,
    img: "https://rukminim1.flixcart.com/image/312/312/kmns7m80/computer/g/5/p/na-gaming-laptop-acer-original-imagfgq6mjjqwwhq.jpeg?q=70",
  },
  {
    name: "WD Blue 3D NAND 1TB Internal 6GB/s 2.5 SSD",
    price: 9719,
    img: "https://rukminim1.flixcart.com/image/312/312/kcm9t3k0/computer/q/x/r/hp-na-gaming-laptop-original-imaftpesbvfxgw9t.jpeg?q=70",
  },
  {
    name: "GIGBATE G27Q 27 144Hz 144Hz 1440P Gaming Monitor",
    price: 26973,

    img: "https://rukminim1.flixcart.com/image/312/312/ko382a80/computer/b/v/u/na-gaming-laptop-asus-original-imag2mrvrxgsaahh.jpeg?q=70",
  },
  {
    name: "AMD Rayzon 5 5600X 3 GHZ Desktop Processor",
    price: 38256,
    img: "https://rukminim1.flixcart.com/image/312/312/kfpq5jk0/computer/h/t/b/msi-na-gaming-laptop-original-imafw3yhmdkzmhzr.jpeg?q=70",
    rating: "",
  },
  {
    name: "Arctic silver AS%-3.G Thermal Compound",
    price: 716,
    img: "https://rukminim1.flixcart.com/image/312/312/ke353m80/computer/p/q/m/msi-original-imafuurxjxzy4zcn.jpeg?q=70",
    rating: "",
  },
  {
    name: "Western Digital WD black SN750 NVMe M > 2 1 TB ...",
    price: 11663,
    img: "https://rukminim1.flixcart.com/image/312/312/kmxsakw0/computer/f/g/t/na-laptop-msi-original-imagfq9cthg4wxwh.jpeg?q=70",
  },
  {
    name: "Western Digital WD NVMe M>2 2280 1 TB  static Drive",
    price: 7919,
    img: "https://rukminim1.flixcart.com/image/312/312/kmwcuq80/computer/d/z/k/na-gaming-laptop-acer-original-imagfp8wrqwe6v6w.jpeg?q=70",
  },
  {
    name: "SAMSUNG 870 EVO Sereies 2.5 SATA internal solid state ",
    price: 14091,
    img: "https://rukminim1.flixcart.com/image/312/312/kmns7m80/computer/g/5/p/na-gaming-laptop-acer-original-imagfgq6mjjqwwhq.jpeg?q=70",
  },
  {
    name: "WD Blue 3D NAND 1TB Internal 6GB/s 2.5 SSD",
    price: 9719,
    img: "https://rukminim1.flixcart.com/image/312/312/kcm9t3k0/computer/q/x/r/hp-na-gaming-laptop-original-imaftpesbvfxgw9t.jpeg?q=70",
  },
  {
    name: "GIGBATE G27Q 27 144Hz 144Hz 1440P Gaming Monitor",
    price: 26973,

    img: "https://rukminim1.flixcart.com/image/312/312/ko382a80/computer/b/v/u/na-gaming-laptop-asus-original-imag2mrvrxgsaahh.jpeg?q=70",
  },
];

if (localStorage.getItem("TopRateData") == null) {
  localStorage.setItem("TopRateData", JSON.stringify(TopRateData));
}

function appendpro() {
  let data = JSON.parse(localStorage.getItem("TopRateData"));
  let mainDiv = document.getElementById("TopRate_products");
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
    // rating.setAttribute("class", "prorating");

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
  let sapn = document
    .getElementById("Toprate_page")
    .getElementsByTagName("span");
  let div = document.getElementById("Toprate_page").getElementsByTagName("div");
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
  // refere this code -->https://github.com/souvik666/PhramEasy/blob/structure/productdetails/productDetails.js
  // window.location.href = "showProductdetails.html";
  localStorage.setItem("prodetaails", JSON.stringify(el));
}
